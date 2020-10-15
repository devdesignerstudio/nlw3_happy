const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//create map
const mymap = L.map('mapid',options).setView([-22.9419474,-43.2035458], 14);

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

//create and add marker
L.marker([-22.9419474,-43.2035458], { icon })
    .addTo(mymap)

// image gallery
function selectImg(event){
    const btn = event.currentTarget;
    //remover todas as classes .active
    const btns = document.querySelectorAll('.images button');
    btns.forEach(button => button.classList.remove("active"))

    // function removeActiveClass(button){
        // button.classList.remove("active");
    // }

    // selecionar a imagem clicada
    const img = btn.children[0];
    const imgContainer = document.querySelector(".orphanage-details > img");

    //atualizar o container mostrador de imagem
    imgContainer.src = img.src;

    //adicionar a classe .active para este botão
    btn.classList.add("active");
}