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
///////////////////////



//////////////////////////////////////////////////////////
// //Tile layer that will be the base of the map
// let streetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// });

//Initialize the layers we need
// let layers = {
//     Entire_Home_or_Apt: new L.LayerGroup(),
//     Hotel_Room: new L.LayerGroup(),
//     Private_Room: new L.LayerGroup(),
//     Shared_Room: new L.LayerGroup()
// };


// //Create the map with the layers
// let map = L.map("map", {
//   center: [40.73, -74.0059],
//   zoom: 12,
//   layers: [
//     layers.Entire_Home_or_Apt,
//     layers.Hotel_Room,
//     layers.Private_Room,
//     layers.Shared_Room
//   ]
// });

// //Add streetmap tile layer to map
// streetmap.addTo(map);

// let overlays = {
//   "Entire Home or Apt": layers.Entire_Home_or_Apt,
//   "Hotel Room": layers.Hotel_Room,
//   "Private Room": layers.Private_Room,
//   "Shared Room": layers.Shared_Room
// };

// //Create layer control and overlays to it
// L.control.layers(null, overlays).addTo(map);

// //Create a legend
// let info = L.control({
//     position:"bottomright"
// });

// //Instert a div with class legend
// info.onAdd = function() {
//     let div = L.DomUtil.create("div", "legend");
//     return div;
// };
// info.addTo(map);

// // Perform an API call for the map data
// d3.json('http://127.0.0.1:5000/data/metadata_map').then(function(infobnb) {
//   console.log(infobnb);

//   // Create an object to hold listing type counts
//   let ltcount = {
//     Entire_Home_or_Apt: 0,
//     Hotel_Room: 0,
//     Private_Room: 0,
//     Shared_Room: 0
//   };

//   let listingTypeCode; 

//   // Loop through the listings
//   for (let i = 0; i < infobnb.length; i++) {

//     // Determine the listing type
//     if (infobnb[i][1] === 'Private room') {
//       listingTypeCode = "Private_Room";
//     } else if (infobnb[i][1] === 'Entire home/apt') {
//       listingTypeCode = "Entire_Home_or_Apt";
//     } else if (infobnb[i][1] === 'Shared room') {
//       listingTypeCode = "Shared_Room";
//     } else {
//       listingTypeCode = "Hotel_Room";
//     };

//     // Update the listing type count
//     ltcount[listingTypeCode]++;
//   }

//   updateLegend(ltcount);
// });
// // Update the legend's innerHTML with the listing type count
// function updateLegend(ltcount) {
//   document.querySelector(".legend").innerHTML = [
//     "<p class='Entire-Home-or-Apt'>Entire_Home_or_Apts: " + ltcount.Entire_Home_or_Apt + "</p>",
//     "<p class='Private-Room'>Private Rooms: " + ltcount.Private_Room + "</p>",
//     "<p class='Shared-Room'>Shared Rooms: " + ltcount.Shared_Room + "</p>",
//     "<p class='Hotel-Room'>Hotel_Rooms: " + ltcount.Hotel_Room + "</p>"
//   ].join("");
// };