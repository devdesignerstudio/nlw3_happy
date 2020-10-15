//create map
const mymap = L.map('mapid').setView([-22.9419474,-43.2035458], 13);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
// {
    // attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }
)
.addTo(mymap);

//create icon
const icon = L.icon(
    {
        iconUrl: "./public/img/map-marker.svg",
        iconSide: [58,68],
        iconAnchor: [29,68],
        popupAnchor: [170,2]
    }
)

//create popup overlay
const popup = L.popup(
    {
        closeButton: false,
        className: 'map-popup',
        minWidth: 240,
        minHeight: 240
    }
).setContent('Lar das meninas <a href="orphanage.html?id=1" class ="choose-orphanage"><img src="./public/img/arrow-white.svg"></a>')
 
//create and add marker
L.marker([-22.9419474,-43.2035458], { icon })
    .addTo(mymap)
    .bindPopup(popup)
    // .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    // .openPopup();