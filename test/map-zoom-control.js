const test = require('node:test');
const zc = require('../');

function dummyMap(document, _zoom) {
  let zoom = _zoom;

  function getContainer() {
    return document.querySelector('#map-container');
  }

  function zoomIn() {
    return ++zoom;
  }

  function zoomOut() {
    return --zoom;
  }

  function getZoom() {
    return zoom;
  }

  return {
    zoomIn,
    zoomOut,
    getZoom,
    getContainer
  };
}

test('map-zoom-control', async t => {
  let map;

  t.beforeEach(() => {
    document.body.innerHTML = '<div id="map-container"></div>';
    map = dummyMap(document, 7);
  });

  await t.test('must add and remove zoom', t => {
    const zoom = zc();
    const el = zoom.onAdd(map);

    t.assert.ok(el, 'Container should be created');
    t.assert.equal(el.className, 'mapboxgl-ctrl mapboxgl-ctrl-group');

    const bzi = el.querySelector('button.mapboxgl-ctrl-icon.mapboxgl-ctrl-zoom-in');
    t.assert.ok(bzi, 'Zoom In button should be created');

    bzi.click();
    t.assert.equal(map.getZoom(), 8);

    bzi.click();
    t.assert.equal(map.getZoom(), 9);

    const bzo = el.querySelector('button.mapboxgl-ctrl-icon.mapboxgl-ctrl-zoom-out');
    t.assert.ok(bzo, 'Zoom Out button should be created');

    bzo.click();
    t.assert.equal(map.getZoom(), 8);

    bzo.click();
    t.assert.equal(map.getZoom(), 7);

    zoom.onRemove();

    t.assert.ok(!document.querySelector('mapboxgl-ctrl'));
  });
});
