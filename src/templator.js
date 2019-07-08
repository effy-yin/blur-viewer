export default class Templator {
    constructor (string) {
        this.template = string;
    }

    compile (data) {
        if (!this.template) {
            return null;
        }

        return this.template.replace(/\{\{(.*?)\}\}/g, function (match, keysString) {
            console.log('match', match, 'keysString', keysString);

            let keys = keysString.split('.');
            let value = data;

            // console.log(keys.length)

            for (let i = 0; i < keys.length; i++) {
                if (value.hasOwnProperty(keys[i])) {
                    value = value[keys[i]];
                } else {
                    value = '';
                    break;
                }
            }

            return value;
        });
    }
}
