const db = require('./db');
const saveOrphanage = require('./saveOrphanage');

db.then(async database => {
    //insert data into table orphanage
    // await saveOrphanage(database, {
    //     name: 'Lar das meninas',
    //     about: 'Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.',
    //     lat: '-22.9419474',
    //     lng: '-43.2035458',
    //     whatsapp: '+5521972357129',
    //     images: 'https://images.unsplash.com/photo-1600420592434-0ce54ed4b0f5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max,https://images.unsplash.com/photo-1600409864933-921066854c78?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
    //     instructions: 'Veja como se sentir a vontade e traga muito amor e paciência para dar',
    //     opening_hours: 'Horários de visitas das 08h até 18h',
    //     open_on_weekends: '1'
    // })

    //query from table
    // const selectedOrphanages = await database.all("SELECT * FROM orphanages")
    // console.log(selectedOrphanages);

    //query just one orphanage by id
    // const orphanage = await database.all('SELECT * FROM orphanages where id="2"')
    // console.log (orphanage);

    //remove from table
    // await database.run("DELETE FROM orphanages")
})