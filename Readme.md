[![NPM version][npm-image]][npm-url]
[![Build Status][build-image]][build-url]
[![Dependency Status][deps-image]][deps-url]

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

[npm-image]: https://img.shields.io/npm/v/map-zoom-control
[npm-url]: https://npmjs.org/package/map-zoom-control

[build-url]: https://github.com/furkot/map-zoom-control/actions/workflows/check.yaml
[build-image]: https://img.shields.io/github/actions/workflow/status/furkot/map-zoom-control/check.yaml?branch=main

[deps-image]: https://img.shields.io/librariesio/release/npm/map-zoom-control
[deps-url]: https://libraries.io/npm/map-zoom-control


[mapbox-gl-js]: https://github.com/mapbox/mapbox-gl-js
