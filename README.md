# Blur Viewer

## About
image blur effect using svg filter

view the blurred image with mouse move

![screen](https://raw.githubusercontent.com/dodoroy/blur-viewer/master/example/demo.gif)

## Usage
1. include the css and script
```html
<link type="text/css" rel="stylesheet" href="../dist/blur-viewer.css">

<script type="text/javascript" src="../dist/blur-viewer.js"></script>
```

2. add image wrapper and svg template in html with id 'blur-template'

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
