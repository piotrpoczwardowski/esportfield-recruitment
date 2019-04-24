let number = 1;
let markersArray = [];
let map = L.map("content__map").setView([54.372158, 18.638306], 15);
let table = $(".table tbody");

L.tileLayer(
  "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken:
      "pk.eyJ1IjoidGF6aXMiLCJhIjoiY2p1djdweHgwMGpndzN5cWV2YTJlOXg3dCJ9.BNvCwfb8GAxRVHdU8JixRA"
  }
).addTo(map);

function onMapClick(e) {
  var marker = L.marker([e.latlng.lat, e.latlng.lng], {
    title: `Marker${number}`,
    alt: `Marker ${number}`,
    draggable: true
  })
    .addTo(map)
    .on("dragend", function() {
      showMarkers();
    });
  marker.bindPopup(`<h5>Marker ${number}</h5>`).openPopup();
  markersArray.push(marker);
  showMarkers();
  number++;
}

map.on("click", onMapClick);

function showMarkers() {
  table.html("");
  markersArray.map((x, i) =>
   
    table.append(`
   <tr>
      <th scope="row">${i+1}</th>
      <td>${x.options.title}</td>
      <td>${x._latlng.lat}</td>
      <td>${x._latlng.lng}</td>
    </tr>`)
  );
}

