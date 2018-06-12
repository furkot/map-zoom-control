'use strict';

module.exports = zoomControl;

function zoomControl(options) {
  var map, el, buttonZoomIn, buttonZoomOut;

  options = Object.assign({
    label: {
      zoomIn: 'Zoom In',
      zoomOut: 'Zoom Out'
    }
  }, options);

  function zoomIn() {
    map.zoomIn();
  }

  function zoomOut() {
    map.zoomOut();
  }

  function render(parent) {
    el = createElement(parent, 'div', 'mapboxgl-ctrl mapboxgl-ctrl-group');
    el.addEventListener('contextmenu', preventDefault);

    buttonZoomIn = createElement(el, 'button', 'mapboxgl-ctrl-icon mapboxgl-ctrl-zoom-in');
    buttonZoomIn.setAttribute('aria-label', options.label.zoomIn);
    buttonZoomIn.addEventListener('click', zoomIn);

    buttonZoomOut = createElement(el, 'button', 'mapboxgl-ctrl-icon mapboxgl-ctrl-zoom-out');
    buttonZoomOut.setAttribute('aria-label', options.label.zoomOut);
    buttonZoomOut.addEventListener('click', zoomOut);

    return el;
  }

  function remove() {
    buttonZoomIn.addEventListener('click', zoomIn);
    buttonZoomOut.addEventListener('click', zoomOut);
    el.removeEventListener('contextmenu', preventDefault);
    el.remove();
    buttonZoomIn = buttonZoomOut = el = undefined;
  }

  function onAdd(_map) {
    map = _map;
    return render(map.getContainer());
  }

  function onRemove() {
    remove();
    map = undefined;
  }

  return {
    onAdd: onAdd,
    onRemove: onRemove,
  };
}


function preventDefault(e) {
  return e.preventDefault();
}

function createElement(parent, tagName, className) {
  var el = document.createElement(tagName);
  el.className = className;
  parent.appendChild(el);
  return el;
}
