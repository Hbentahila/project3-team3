function init() {
  let myMap = L.map("map", {
    center: [40.7128, -74.0060],
    zoom: 11
  });

  // Adding the tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);

  return myMap; // Return the map instance if needed
}

function createMarkers(data, map) {
  const markers = L.markerClusterGroup();

  data.forEach(function(listing) {
    const rating = listing[0];
    const roomType = listing[1];
    const numReviews = listing[2];
    const borough = listing[3];
    const neighbourhood = listing[4];
    const lat = listing[5];
    const lng = listing[6];

    const marker = L.marker([lat, lng])
      .bindPopup(`<strong>${roomType}</strong><br>Neighbourhood: ${borough}<br>Rating: ${rating}<br>Number of Reviews: ${numReviews}`)
      .addTo(markers);
  });

  map.addLayer(markers);
}

const myMap = init();

//Printing data in console
const dataurl = "http://127.0.0.1:5000/data/metadata_map";

d3.json(dataurl).then(function(data) {
  createMarkers(data, myMap);
}).catch(function(error) {
  console.log(error);
});
