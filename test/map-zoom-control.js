var should = require('should');
var zc = require('../');

function dummyMap(document, _zoom) {
  var zoom = _zoom;

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
    zoomIn: zoomIn,
    zoomOut: zoomOut,
    getZoom: getZoom,
    getContainer: getContainer
  };
}

describe('map-zoom-control', function () {
  beforeEach(function () {
    document.body.innerHTML = '<div id="map-container"></div>';
    this.map = dummyMap(document, 7);
  });

  it('must add and remove zoom', function () {
    var zoom = zc();
    var el = zoom.onAdd(this.map);

    should.exist(el, 'Container should be created');
    el.className.should.be.eql('mapboxgl-ctrl mapboxgl-ctrl-group');

    var bzi = el.querySelector('button.mapboxgl-ctrl-icon.mapboxgl-ctrl-zoom-in');
    should.exist(bzi, 'Zoom In button should be created');

    bzi.click();
    this.map.getZoom().should.eql(8);

    bzi.click();
    this.map.getZoom().should.eql(9);

    var bzo = el.querySelector('button.mapboxgl-ctrl-icon.mapboxgl-ctrl-zoom-out');
    should.exist(bzo, 'Zoom Out button should be created');

    bzo.click();
    this.map.getZoom().should.eql(8);

    bzo.click();
    this.map.getZoom().should.eql(7);

    zoom.onRemove();

    should.not.exist(document.querySelector('mapboxgl-ctrl'));
  });
});
