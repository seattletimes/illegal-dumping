// require("./lib/social");
// require("./lib/ads");
// var track = require("./lib/tracking");

require("component-responsive-frame/child");
require("component-leaflet-map");

var L = require("leaflet");

var mapElement = document.querySelector("leaflet-map");
var L = mapElement.leaflet;
var map = mapElement.map;

dumpData.forEach(function(dump) {
  var icon = new L.divIcon({className: 'pin'});
  L.marker([dump.lat,dump.lng], {icon: icon}).addTo(map);
});
