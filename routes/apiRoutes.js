var db = require("../models");

module.exports = function(app) {
  //post route that listens for click
  //then grabs the info
  //.then() res.json and put the call inside the function istelf instead of handlebars

  const axios = require("axios");
  var tripname;

  app.post("/api/all", function(req, res) {
    tripname = req.body[0];
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
        text: req.body[1]
      }
    }).then(response => {
      /*for (var i = 0; i < mapLabel.length; i++) {
            mapLabel = mapLabel.replace(" ", "+");
            mapLabel = mapLabel.replace(",", "");
          }
           */
      db.Destinations.create({
        name: tripname,
        city: response.data[0].name,
        state: response.data[0].region,
        label: response.data[0].label,
        hotel1: response.data[1].label,
        hotel1Img: response.data[1].image_url,
        hotel2: response.data[2].label,
        hotel2Img: response.data[2].image_url,
        hotel3: response.data[3].label,
        hotel3Img: response.data[3].image_url
      }).then(function(results) {
        res.end();
      });

      //stop 1
      axios({
        method: "GET",
        url:
          "https://apidojo-booking-v1.p.rapidapi.com/locations/auto-complete",
        headers: {
          "content-type": "application/json",
          "x-rapidapi-host": "apidojo-booking-v1.p.rapidapi.com",
          "x-rapidapi-key": "d4b7b82a1fmshf554c1d06b69e08p16af5ejsneb8e4a16b5e3"
        },
        params: {
          languagecode: "en-us",
          text: req.body[2]
        }
      }).then(response => {
        /*for (var i = 0; i < mapLabel.length; i++) {
                  mapLabel = mapLabel.replace(" ", "+");
                  mapLabel = mapLabel.replace(",", "");
                }
                 */
        db.Destinations.create({
          name: tripname,
          city: response.data[0].name,
          state: response.data[0].region,
          label: response.data[0].label,
          hotel1: response.data[1].label,
          hotel1Img: response.data[1].image_url,
          hotel2: response.data[2].label,
          hotel2Img: response.data[2].image_url,
          hotel3: response.data[3].label,
          hotel3Img: response.data[3].image_url
        }).then(function(results) {
          res.end();
        });

        //stop 2
        axios({
          method: "GET",
          url:
            "https://apidojo-booking-v1.p.rapidapi.com/locations/auto-complete",
          headers: {
            "content-type": "application/json",
            "x-rapidapi-host": "apidojo-booking-v1.p.rapidapi.com",
            "x-rapidapi-key":
              "d4b7b82a1fmshf554c1d06b69e08p16af5ejsneb8e4a16b5e3"
          },
          params: {
            languagecode: "en-us",
            text: req.body[3]
          }
        }).then(response => {
          /*for (var i = 0; i < mapLabel.length; i++) {
                        mapLabel = mapLabel.replace(" ", "+");
                        mapLabel = mapLabel.replace(",", "");
                      }
                       */
          db.Destinations.create({
            name: tripname,
            city: response.data[0].name,
            state: response.data[0].region,
            label: response.data[0].label,
            hotel1: response.data[1].label,
            hotel1Img: response.data[1].image_url,
            hotel2: response.data[2].label,
            hotel2Img: response.data[2].image_url,
            hotel3: response.data[3].label,
            hotel3Img: response.data[3].image_url
          }).then(function(results) {
            res.end();
          });

          //stop 3
          axios({
            method: "GET",
            url:
              "https://apidojo-booking-v1.p.rapidapi.com/locations/auto-complete",
            headers: {
              "content-type": "application/json",
              "x-rapidapi-host": "apidojo-booking-v1.p.rapidapi.com",
              "x-rapidapi-key":
                "d4b7b82a1fmshf554c1d06b69e08p16af5ejsneb8e4a16b5e3"
            },
            params: {
              languagecode: "en-us",
              text: req.body[4]
            }
          }).then(response => {
            /*for (var i = 0; i < mapLabel.length; i++) {
                              mapLabel = mapLabel.replace(" ", "+");
                              mapLabel = mapLabel.replace(",", "");
                            }
                             */
            db.Destinations.create({
              name: tripname,
              city: response.data[0].name,
              state: response.data[0].region,
              label: response.data[0].label,
              hotel1: response.data[1].label,
              hotel1Img: response.data[1].image_url,
              hotel2: response.data[2].label,
              hotel2Img: response.data[2].image_url,
              hotel3: response.data[3].label,
              hotel3Img: response.data[3].image_url
            }).then(function(results) {
              res.end();
            });

            //destination
            axios({
              method: "GET",
              url:
                "https://apidojo-booking-v1.p.rapidapi.com/locations/auto-complete",
              headers: {
                "content-type": "application/json",
                "x-rapidapi-host": "apidojo-booking-v1.p.rapidapi.com",
                "x-rapidapi-key":
                  "d4b7b82a1fmshf554c1d06b69e08p16af5ejsneb8e4a16b5e3"
              },
              params: {
                languagecode: "en-us",
                text: req.body[5]
              }
            }).then(response => {
              /*for (var i = 0; i < mapLabel.length; i++) {
                                    mapLabel = mapLabel.replace(" ", "+");
                                    mapLabel = mapLabel.replace(",", "");
                                  }
                                   */
              db.Destinations.create({
                name: tripname,
                city: response.data[0].name,
                state: response.data[0].region,
                label: response.data[0].label,
                hotel1: response.data[1].label,
                hotel1Img: response.data[1].image_url,
                hotel2: response.data[2].label,
                hotel2Img: response.data[2].image_url,
                hotel3: response.data[3].label,
                hotel3Img: response.data[3].image_url
              }).then(function(results) {
                res.end();
              });
            });
          });
        });
      });
    });
  });
  app.get("/api/map", function(req, res) {
    //console.log(temp[0].data);
    //return res.json(temp[0]);

    db.Destinations.findAll({}).then(function(results) {
      console.log(results);
      // results are available to us inside the .then
      res.json(results);
    });
  });

  app.get("/api/hotel", function(req, res) {
    db.Destinations.findAll({}).then(function(results) {
      res.json(results);
    });
  });
};
