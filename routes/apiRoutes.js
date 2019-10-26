var db = require("../models");

module.exports = function(app) {
  //post route that listens for click
  //then grabs the info
  //.then() res.json and put the call inside the function istelf instead of handlebars

  app.post("/api/results/:name", function(req, res) {
    db.wyeoak
      .findOne({
        where: {
          name: req.params.name
        },
        attributes: ["city", "state"]
      })
      .then(function(results) {
        var googleCall =
          "https://www.google.com/maps/embed/v1/place?key={{google}}&q=" +
          res.json(results);
      });
  });
  const axios = require("axios");

  app.post("/api/all", function(req, res) {
    axios({
      method: "GET",
      url: "https://apidojo-booking-v1.p.rapidapi.com/locations/auto-complete",
      headers: {
        "content-type": "application/json",
        "x-rapidapi-host": "apidojo-booking-v1.p.rapidapi.com",
        "x-rapidapi-key": "d4b7b82a1fmshf554c1d06b69e08p16af5ejsneb8e4a16b5e3"
      },
      params: {
        languagecode: "en-us",
        text: req.body.a
      }
    })
      .then(response => {
        console.log(response.data[0].name); //response)

        db.Destinations.create({
          city: response.data[0].name,
          state: response.data[0].region,
          label: response.data[0].label
        }).then(function(results) {
          res.end();
        });
      })
      .catch(error => {
        console.log(error);
      });
    /*
        Destinations.create({
            author: req.body.author,
            body: req.body.body,
            created_at: req.body.created_at,
        }).then(function(results) {
            // `results` here would be the newly created chirp
            res.end();
        });

 */
  });
  /*
    app.get("/api/all", function(req, res) {

        //console.log(temp[0].data);
        //return res.json(temp[0]);
        /*
        db.Destination.findAll({}).then(function(results) {
            // results are available to us inside the .then
            res.json(results);
        });

         */
};
