[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Dependency Status][deps-image]][deps-url]
[![Dev Dependency Status][deps-dev-image]][deps-dev-url]

# map-zoom-control

Zoom control that can be used with vector map renderer: a simplified version of the `NavigationControl` implemented in [mapbox-gl-js]

## Install

```sh
$ npm install --save map-zoom-control
```

## Usage

```js
var zoomControl = require('map-zoom-control');

var zoom = zoomControl({});
map.addControl(zoom);
```

## License

MIT © [Damian Krzeminski](https://pirxpilot.me)

[npm-image]: https://img.shields.io/npm/v/map-zoom-control.svg
[npm-url]: https://npmjs.org/package/map-zoom-control

[travis-url]: https://travis-ci.com/furkot/map-zoom-control
[travis-image]: https://img.shields.io/travis/com/furkot/map-zoom-control.svg

[deps-image]: https://img.shields.io/david/furkot/map-zoom-control.svg
[deps-url]: https://david-dm.org/furkot/map-zoom-control

[deps-dev-image]: https://img.shields.io/david/dev/furkot/map-zoom-control.svg
[deps-dev-url]: https://david-dm.org/furkot/map-zoom-control?type=dev

[mapbox-gl-js]: https://github.com/mapbox/mapbox-gl-js
