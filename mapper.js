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


}

// render map on div
google.maps.event.addDomListener(window, 'load', initialize);
