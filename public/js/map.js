
//Add your LocationIQ Maps Access Token here (not the API token!)
locationiq.key = mapToken;
//Define the map and configure the map's theme
var map = new maplibregl.Map({
  container: "map",
  style: locationiq.getLayer("Streets"),
  zoom: 9,
  center: listing.geometry.coordinates,
});

//Define layers you want to add to the layer controls; the first element will be the default layer
var layerStyles = {
  Streets: "streets/vector",
  Dark: "dark/vector",
  Light: "light/vector",
};

map.addControl(
  new locationiqLayerControl({
    key: locationiq.key,
    layerStyles: layerStyles,
  }),
  "top-left",
);
console.log(listing.geometry.coordinates);

var popup = new maplibregl.Popup()
            .setHTML(`<h4>${listing.title}</h4><p>Exact Location will be provided after booking<p>`);

var marker = new maplibregl.Marker({color:"red"})
  .setLngLat(listing.geometry.coordinates)
  .setPopup(popup)
  .addTo(map);


