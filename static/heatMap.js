function init() {
  let mineMap = L.map("map2", {
    center: [40.7128, -74.0060],
    zoom: 11
  });

  // Adding the tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(mineMap);

  return mineMap; // Return the map instance if needed
}

const mineMap = init(); // Initialize the map

let url = "http://127.0.0.1:5000/data/metadata_map";

d3.json(url).then(function(response) {
  console.log(response);

  let heatArray = [];

  for (let i = 0; i < response.length; i++) {
    let location = [response[i][5], response[i][6]];
    if (location[0] && location[1]) {
      heatArray.push(location);
    }
  }

  let heat = L.heatLayer(heatArray, {
    radius: 20,
    blur: 35
  }).addTo(mineMap); // The error might be here
});

myMap = init();
