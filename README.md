# Blur Viewer

## About
image blur effect using svg filter
view the blurred image with mouse move
![screen](https://raw.githubusercontent.com/dodoroy/blur-viewer/master/example/demo.png)

## Usage
1. include the script and css
```html
<script type="text/javascript" src="blur-viewer.js"></script>
```
```css
  .blur-wrapper {
    position: relative;
    width: 1000px;
    /* background: yellow; */
  }
  .blur-wrapper .blur-image {
    display: block;
    width: 100%;
    height: auto;
    opacity: 0;
    visibility: hidden;
    z-index: -1;
  }
  .blur-wrapper .blur {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
```

2. add wrapper and svg template in html with id 'blur-template'

```html
  <div class="blur-wrapper"><img class="blur-image" src="./images/pic1.jpg" alt=""></div>

  <script type="text/template" id="blur-template">
    <svg class="blur" width="100%">

      <filter id="{{filter}}">
        <feGaussianBlur stdDeviation="10" color-interpolation-filters="sRGB"/>
      </filter>

      <mask class="mask" id="{{mask}}">
        <circle cx="-50%" cy="-50%" r="120" fill="white" filter="url(#{{filter}})" />
      </mask>

      <image xlink:href="{{image}}" width="100%" height="100%" filter="url(#{{filter}})" ></image>
      <image xlink:href="{{image}}" width="100%" height="100%" mask="url(#{{mask}})"></image>
    </svg>
  </script>
```

3. call BlurViewer with new

```JavaScript
let blurElements = document.querySelectorAll('.blur-wrapper');

if(blurElements) {
  for(let i=0;i<blurElements.length;i++) {
    let blurElement = blurElements[i]
    if('blurViewer' in blurElement) {
      blurElement.blurViewer.destroy();
    };
    blurElement.blurViewer = new dodoroy.BlurViewer(blurElement);
  }
}
```

## Credit
Created by [@dodo糯](http://weibo.com/dodoroy), *[blog](http://effy.me)*
