var db = require("../models");

module.exports = function(app) {
  //post route that listens for click
  //then grabs the info
  //.then() res.json and put the call inside the function istelf instead of handlebars

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
        var mapLabel = response.data[0].label;
        /*for (var i = 0; i < mapLabel.length; i++) {
          mapLabel = mapLabel.replace(" ", "+");
          mapLabel = mapLabel.replace(",", "");
        }
         */

        db.Destinations.create({
          name: 1,
          city: response.data[0].name,
          state: response.data[0].region,
          label: mapLabel
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

  app.get("api/results", function(req, res) {
    //console.log(temp[0].data);
    //return res.json(temp[0]);

    db.Destinations.findOne({
      where: {
        id: 1
      },
      attributes: ["label"]
    }).then(function(results) {
      // results are available to us inside the .then
      console.log(results);
      app.get("/api/all", function(req, res) {
        db.Destination.findOne({
          where: {
            name: 1
          }
        }).then(function(results) {
          // results are available to us inside the .then
          res.json(results);
        });
      });
    });
  });
};
