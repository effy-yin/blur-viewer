import Templator from './templator.js';
import $ from 'jquery';
import './blur-viewer.scss';

export class BlurViewer {
    constructor (wrapper) {
        this.id = this.generateID('blur-viewer-');
        this.$wrapper = $(wrapper);
        this.blurTemplate = null;
        this.init();
    }

    init () {
        this.blurTemplate = new Templator(document.getElementById('blur-template').innerHTML);

        $(window).on('load', () => {
            this.addBlur();
        });

        this.bind();
    }

    addBlur () {
        // this.$wrapper.find('.blur').empty().remove();

        let svgStr = this.blurTemplate.compile({
            image: this.$wrapper.find('.blur-image').attr('src'),
            filter: this.generateID('filter-'),
            mask: this.generateID('mask-')
        });
        console.log(svgStr);


        this.$wrapper.append(svgStr);
    }

    updateCirclePosition (event) {
        let posX = event.offsetX;
        let posY = event.offsetY;

        let circle = this.$wrapper.find('.mask circle').get(0);
        circle.setAttribute('cy', ((posY) + 'px'));
        circle.setAttribute('cx', ((posX) + 'px'));
    }

    bind () {
        this.$wrapper.on('mousemove', (event) => {
            this.updateCirclePosition(event);
        });
    }

    unbind () {
        this.$wrapper.off('mousemove');
    }

    destroy () {
        this.unbind();
    }

    generateID (prefix) {
        return (prefix || '') + new Date().getTime();
    }
}
