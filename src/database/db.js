const db = require('sqlite-async');

function execute(database){
   
    return database.exec(`
        CREATE TABLE IF NOT EXISTS orphanages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            about TEXT,
            lat TEXT,
            lng TEXT,
            whatsapp TEXT,
            images TEXT, 
            instructions TEXT,
            opening_hours TETX,
            open_on_weekends TEXT
        );
    `)
}

module.exports = db.open(__dirname + '/database.sqlite')
.then(execute)