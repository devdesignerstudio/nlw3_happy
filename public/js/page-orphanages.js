//create map
const map = L.map('mapid').setView([-22.9419474,-43.2035458], 13);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
// {
    // attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }
)
.addTo(map);

//create icon
const icon = L.icon(
    {
        iconUrl: "/img/map-marker.svg",
        iconSide: [58,68],
        iconAnchor: [29,68],
        popupAnchor: [170,2]
    }
)  

function addMarker({id, name, lat, lng} = orphanage){
    //create popup overlay
    const popup = L.popup(
        {
            closeButton: false,
            className: 'map-popup',
            minWidth: 240,
            minHeight: 240
        }
    ).setContent(`${name} <a href="/orphanage?id=${id}"><img src="/img/arrow-white.svg"></a>`)
    
    //create and add marker
    L.marker([lat,lng], { icon })
        .addTo(map)
        .bindPopup(popup)
        // .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        // .openPopup();
}

const orphanagesSpan = document.querySelectorAll('.orphanages span')
// console.log(orphanagesSpan);
orphanagesSpan.forEach( span => {
    const orphanage = { //dataset é o DOMString
        id: span.dataset.id,
        name:span.dataset.name,
        lat:span.dataset.lat,
        lng:span.dataset.lng
    }

    // console.log(orphanage);

    addMarker(orphanage);
})

