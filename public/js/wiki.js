//Materialize Scrollspy, Pushpin, Dropdown initializations
$(document).ready(function() {
  $(".scrollspy").scrollSpy();
  $(".pushpin").pushpin();
  $(".dropdown-trigger").dropdown();

  //Hide the speech bubbles
  $("#bubbleName").hide();
  $("#bubbleView").hide();
  $("#bubbleSubmit").hide();
  $("#bubbleMore").hide();
  $("#bubbleBuddy").hide();

  //Logic to cause second stop and third stop to hide, and then appear when button is clicked
  $("#stopTwo").hide();
  $("#stopThree").hide();

  $("#moreButton1").on("click", function() {
    $("#moreButton1").hide();
    $("#stopTwo").show();
  });
  $("#moreButton2").on("click", function() {
    $("#moreButton2").hide();
    $("#stopThree").show();
  });

  //Show the speech bubbles when mouseover the five specified areas
  //Name Your Trip
  $("#hoverName").mouseenter(function() {
    $("#bubbleName").show();
  });

  $("#hoverName").mouseleave(function() {
    $("#bubbleName").hide();
  });

  //Save Your Trip
  $("#saveTripButton").mouseenter(function() {
    $("#bubbleView").show();
  });

  $("#saveTripButton").mouseleave(function() {
    $("#bubbleView").hide();
  });

  //Submit Your Form
  $("#submitButton").mouseenter(function() {
    $("#bubbleSubmit").show();
  });

  $("#submitButton").mouseleave(function() {
    $("#bubbleSubmit").hide();
  });

  //More Stops
  $("#moreButton1").mouseenter(function() {
    $("#bubbleMore").show();
  });

  $("#moreButton1").mouseleave(function() {
    $("#bubbleMore").hide();
  });

  //Travel Buddy says Hello
  $("#buddy").mouseenter(function() {
    $("#bubbleBuddy").show();
  });

  $("#buddy").mouseleave(function() {
    $("#bubbleBuddy").hide();
  });
});

$("#submitButton").on("click", function(event) {
  event.preventDefault();
  $.get("/result");
  var locations = {};
  // Make a newChirp object
  var tripName = $("#nameTrip")
    .val()
    .trim();
  var startLocation =
    $("#cityStart")
      .val()
      .trim() +
    ", " +
    $("#stateStart")
      .val()
      .trim();

  var firstStop =
    $("#cityStopOne")
      .val()
      .trim() +
    ", " +
    $("#stateStopOne")
      .val()
      .trim();

  var secondStop =
    $("#cityStopTwo")
      .val()
      .trim() +
    ", " +
    $("#stateStopTwo")
      .val()
      .trim();

  var thirdStop =
    $("#cityStopThree")
      .val()
      .trim() +
    ", " +
    $("#stateStopThree")
      .val()
      .trim();

  var endLocation =
    $("#cityEnd")
      .val()
      .trim() +
    ", " +
    $("#stateEnd")
      .val()
      .trim();

  locations[0] = tripName;
  locations[1] = startLocation;
  locations[2] = firstStop;
  locations[3] = secondStop;
  locations[4] = thirdStop;
  locations[5] = endLocation;
  console.log(locations);

  // Send an AJAX POST-request with jQuery
  $.post("/api/all", locations);
  // On success, run the following code
});

$.get("/api/hotel", function(data) {
  console.log(data);
  for (var i = 0; i < data.length; i++) {
    var row = $("<div>");
    row.addClass("hotelSingle");

    row.prepend("<img src=" + data[i].hotel1Img + ">");
    row.prepend("<h6>" + data[i].hotel1 + "</h6>");

    row.prepend("<img src=" + data[i].hotel2Img + ">");
    row.prepend("<h6>" + data[i].hotel2 + "</h6>");
    row.prepend("<img src=" + data[i].hotel3Img + ">");
    row.prepend("<h6>" + data[i].hotel3 + "</h6>");

    row.prepend("<h1>" + data[i].label + "</h1>");
    $("#hotels").prepend(row);
  }
});
