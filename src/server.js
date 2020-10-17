//importar dependencias
const express = require('express');
const path = require('path');
const pages = require('./pages.js');

//iniciando a biblioteca ou dependecia que instancia o servidor - express
const server = express();
server
//utilizar body do req
.use(express.urlencoded({extended:true}))
//utilizando os arquivos estáticos
.use(express.static('public'))

//configurar template engine estáticos
.set('views',path.join(__dirname, "views"))
.set('view engine','hbs')

//criar rotas da aplicação
.get ('/', pages.index)
.get ('/orphanage', pages.orphanage)
.get ('/orphanages', pages.orphanages)
.get ('/create-orphanage', pages.createOrphanage)
.post ('/save-orphanage', pages.saveOrphanage)
// .get('/', (request, response) => {
//     const city = request.query.city
//     // return response.send('Oi do backend!');
//     // return response.sendFile(__dirname);
//     return response.render('index', { city } );
//     // console.log(request.query);
//     //  return response.sendFile(path.join(__dirname, 'views','index'));
// })

//ligar o servidor
server.listen(5500);