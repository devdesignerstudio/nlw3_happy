const db = require('./db')

function saveOrphanage (db, {name,about,lat,lng,whatsapp,images,instructions,opening_hours,open_on_weekends}) {
    return db.run(`
        INSERT INTO orphanages (
            name,
            about,
            lat, 
            lng,
            whatsapp,
            images,
            instructions,
            opening_hours,
            open_on_weekends
        ) VALUES (
            "${name}",
            "${about}",
            "${lat}",
            "${lng}",
            "${whatsapp}",
            "${images}",
            "${instructions}",
            "${opening_hours}",
            "${open_on_weekends}"
        );
    `)
}

module.exports = saveOrphanage;