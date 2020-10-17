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
        iconUrl: "/img/map-marker.svg",
        iconSide: [58,68],
        iconAnchor: [29,68],
        popupAnchor: [170,2]
    }
)

let marker;

//create and add marker
mymap.on('click',(event) => {
    const latitude = event.latlng.lat;
    const longitude = event.latlng.lng;

    document.querySelector('[name=lat]').value = latitude;
    document.querySelector('[name=lng]').value = longitude;

    // remover marcações anteriores
    marker && mymap.removeLayer(marker);

    //add icon layer
    marker = L.marker([latitude,longitude], { icon })
    .addTo(mymap)
})

// //create and add marker
// L.marker([-22.9419474,-43.2035458], { icon })
//     .addTo(mymap)
//     // .bindPopup(popup)
//     // .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
//     // .openPopup();

//adicionar a url de fotos
function addPhotoField(){
    // pegar o valor do container de fotos #images
    const container = document.querySelector('#images');
    // pegar o container para multiplicar .new-image
    const fieldSetContainer = document.querySelectorAll('.new-upload');

    // realizar o clone da última imagem adicionada
    const newFieldContainer = fieldSetContainer[fieldSetContainer.length -1].cloneNode(true);

    //verificar se o campo está preenchido para adicionar ao container de images
    const input = newFieldContainer.children[0];

    if (input.value == ""){
        return
    }

    //limpar o campo url da foto antes de adicionar ao container de images
    input.value = "";

    // adicionar o clone ao container de #images
    container.appendChild(newFieldContainer);
}

function deleteField(event){
    const span = event.currentTarget;

    const fieldSetContainer = document.querySelectorAll('.new-upload');

    if (fieldSetContainer.length < 2){
        span.parentNode.children[0].value = "";
        //limpar o valor do campo somente se for somente 1 campo
        return
    }

    //deletar o campo
    span.parentNode.remove();

}

//seleção do botão de confirmação sim e não 
function toggleSelect(event){
    //retirar a classe .active (dos botoes)
    document.querySelectorAll('.button-select button')
    .forEach(button => button.classList.remove('active'));

    //colocar a class .active nesse botao clicado
    const btnConfirmacao = event.currentTarget;
    btnConfirmacao.classList.add('active');

    //pegar o botao clicado

    //verificar se sim ou nao o valor dele 

    //atualizar o meu input hidden com o valor selecionado

    const input = document.querySelector('[name="open_on_weekends"]');
    
    input.value = btnConfirmacao.dataset.value;
}

function validate(event) {
    //validate case lat and lng are filled
    const latField = document.querySelector('[name=lat]').value;
   
    const needsLatAndLng = latField == "";
  
    if (needsLatAndLng) {
        event.preventDefault();
        alert('Selecione um ponto no mapa');
    }
    
}