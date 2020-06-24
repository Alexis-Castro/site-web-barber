
const tilesProvider = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

let myMap = L.map('my-map').setView([-6.774766, -79.837137], 17);

L.tileLayer(tilesProvider, {
    maxZoom: 22,
}).addTo(myMap);

let enero = L.marker([-6.774766, -79.837137]).addTo(myMap);
let bolognesi = L.marker([-6.776215, -79.833376]).addTo(myMap);

bolognesi.bindPopup('<b>Barbería Navajas</b>').openPopup();
enero.bindPopup('<b>Barbería Navajas</b>').openPopup();