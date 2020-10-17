// const orphanages = require('./database/sampledata.js');
const database = require("./database/db");
const saveOrphanage = require("./database/saveOrphanage");

module.exports = {
  index(req, res) {
    return res.render("index");
  },

  async orphanage(req, res) {
    const id = req.query.id;

    try {
      const db = await database;
      const query = await db.all(`SELECT * FROM orphanages where id="${id}"`);
      const orphanage = query[0];

      orphanage.images = orphanage.images.split(",");
      orphanage.firstImg = orphanage.images[0];
      console.log(orphanage);
      //if question
      orphanage.open_on_weekends == "0"
        ? (orphanage.open_on_weekends = false)
        : (orphanage.open_on_weekends = true);

      return res.render("orphanage", { orphanage });
    } catch (error) {
      console.log(error);
      return res.send("Error accessing database");
    }
  },

  async orphanages(req, res) {
    try {
      const db = await database;
      //put orphanage object from db
      const orphanages = await db.all("SELECT * FROM orphanages");

      return res.render("orphanages", { orphanages });
    } catch (error) {
      console.log(error);
      return res.send("Error accessing database");
    }
  },

  createOrphanage(req, res) {
    return res.render("create-orphanage");
  },

  async saveOrphanage(req, res) {
    const fields = req.body;

    //validate all fields filled

    //if there is some empty field
    if (Object.values(fields).includes("")) {
      // in case of positive alert
      // return res.send("Todos os campos devem ser preenchidos!");
       return res.render("create-orphanage");
    }

    try {
      //save an orphanage
      const db = await database;
      await saveOrphanage(db, {
        name: fields.name,
        about: fields.about,
        lat: fields.lat,
        lng: fields.lng,
        whatsapp: fields.whatsapp,
        images: fields.images.toString(),
        instructions: fields.instructions,
        opening_hours: fields.opening_hours,
        open_on_weekends: fields.open_on_weekends,
      });

      //redirecting
      return res.redirect("/orphanages");
    } catch (error) {
      console.log(error);
      return res.send("Error accessing database");
    }
  },
};
