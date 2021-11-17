let latitude, longitude, destination;

$(document).ready(function () {
  initGeolocation();
});

function initGeolocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(handleSuccess);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

$(function () {
  $("#navigate-button").click(function () {
    window.location.href = `weather.html?source=${latitude};${longitude}&destination=${destination[1]};${destination[0]}`;
  });
});

function handleSuccess(position) {
  longitude = position.coords.longitude;
  latitude = position.coords.latitude;
  mapboxgl.accessToken =
    "pk.eyJ1IjoiaGFja29ydW0iLCJhIjoiY2t2amZrNTYzNmg5aTJ1cXdkeDgyNGMxdSJ9.F1-boLG26xDea2rONGUzYw";
  let map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: [longitude, latitude],
    zoom: 4,
  });
  map.addControl(
    new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
    }).on("result", function (e) {
      destination = e.result.center;
    })
  );
  let img1 = document.querySelector("#amber");
  let marker1 = new mapboxgl.Marker({
    element: img1,
  })
    .setLngLat([75.85133, 26.98547])
    .addTo(map);
  let img2 = document.querySelector("#gateway");
  let marker2 = new mapboxgl.Marker({
    element: img2,
  })
    .setLngLat([72.835163, 18.92018])
    .addTo(map);

  let img3 = document.querySelector("#gate");
  let marker3 = new mapboxgl.Marker({
    element: img3,
  })
    .setLngLat([77.22931, 28.61495])
    .addTo(map);

  let img4 = document.querySelector("#lotus");

  let marker4 = new mapboxgl.Marker({
    element: img4,
  })
    .setLngLat([77.2588, 28.553501])
    .addTo(map);

  let img5 = document.querySelector("#victoria");

  let marker5 = new mapboxgl.Marker({
    element: img5,
  })
    .setLngLat([88.342785, 22.54617])
    .addTo(map);
}
