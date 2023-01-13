// var newYorkCoords = [40.73, -74.0059];
// var mapZoomLevel = 12;

// Create the createMap function.
let myMap = L.map("map", {
  center: [40.73, -74.0059],
  zoom: 12
});

  // Create the tile layer that will be the background of our map.
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
//   'https://gbfs.citibikenyc.com/gbfs/en/station_information.json')

let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href='https://gbfs.citibikenyc.com/gbfs/en/station_information.json</a>'
})
// d3.json('(https://gbfs.citibikenyc.com/gbfs/en/station_information.json)')

  // Create a baseMaps object to hold the lightmap layer.
var baseMaps = {
  "Street Map": street,
  "Topographic Map": topo
  };

  // Create an overlayMaps object to hold the bikeStations layer.
var overlayMaps = {
  "State Population": states,
  "City Population": cities
  };

  // Create the map object with options.
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5,
  layers: [street, states, cities]
  });

  // Create a layer control, and pass it baseMaps and overlayMaps. Add the layer control to the map.
L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
  }).addTo(myMap);

// Create the createMarkers function.

  // Pull the "stations" property from response.data.

  // Initialize an array to hold the bike markers.

  // Loop through the stations array.
    // For each station, create a marker, and bind a popup with the station's name.

    // Add the marker to the bikeMarkers array.

  // Create a layer group that's made from the bike markers array, and pass it to the createMap function.


// Perform an API call to the Citi Bike API to get the station information. Call createMarkers when it completes.
