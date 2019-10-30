$.get("/api/map", function(data) {
  console.log(data);
  $("#map1").attr(
    "src",
    "https://www.google.com/maps/embed/v1/place?key=AIzaSyDA7yGe9xdaHgiQbrY2YmxmTh1yz1C09jI&q=" +
      data[0].label
  );
  $("#map2").attr(
    "src",
    "https://www.google.com/maps/embed/v1/place?key=AIzaSyDA7yGe9xdaHgiQbrY2YmxmTh1yz1C09jI&q=" +
      data[1].label
  );
  $("#map3").attr(
    "src",
    "https://www.google.com/maps/embed/v1/place?key=AIzaSyDA7yGe9xdaHgiQbrY2YmxmTh1yz1C09jI&q=" +
      data[2].label
  );
  $("#map4").attr(
    "src",
    "https://www.google.com/maps/embed/v1/place?key=AIzaSyDA7yGe9xdaHgiQbrY2YmxmTh1yz1C09jI&q=" +
      data[3].label
  );
  $("#map5").attr(
    "src",
    "https://www.google.com/maps/embed/v1/place?key=AIzaSyDA7yGe9xdaHgiQbrY2YmxmTh1yz1C09jI&q=" +
      data[4].label
  );
});
