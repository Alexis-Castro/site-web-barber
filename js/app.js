
const tilesProvider = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

let myMap = L.map('my-map').setView([-6.774766, -79.837137], 17);

L.tileLayer(tilesProvider, {
    maxZoom: 20,
}).addTo(myMap);

let marker = L.marker([-6.774766, -79.837137]).addTo(myMap);
marker.bindPopup('<b>Barbería Navajas</b>').openPopup();