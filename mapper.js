// render google map
var map;
var markers = [];

function initialize() {

  var myLatlng = new google.maps.LatLng(37.775, -122.4183333);
  var mapOptions = {
    zoom: 12,
    center: myLatlng
  }
	// create map at the hard-coded lat long for San Francisco
   map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

   // Create a draggable circle centered on the map
   var circle = new google.maps.Circle({
     strokeColor: "#6D3099",
     strokeOpacity: 0.7,
     strokeWeight: 1,
     fillColor: "#B650FF",
     fillOpacity: 0.35,
     map: map,
     center: loc,
     radius: ((radiusInKm) * 1000),
     draggable: true
   });
}




// render map on div
google.maps.event.addDomListener(window, 'load', initialize);
