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


	// clear markers from map
	function removeMarkers(){
		for(i=0; i<markers.length; i++){
			markers[i].setMap(null);
		}
	}

		var ref = new Firebase("https://fiery-fire-3549.firebaseio.com/");
		$(document).ready(function() {
			// get title from user input
			$("#title-form").submit(function(evt){
				evt.preventDefault();
				removeMarkers();

				var title = $("#title").val(); // pull in movie title

// The following loops through all movie objects with the specified movie title in firebase
// and makes markers at each lat lon and drops them onto the map
				ref.child("transformed-data")
				  .orderByChild("movieName")
					.equalTo(title).on("child_added", function(snap) {
						var value = snap.val();
						var lat = value.lat;
						var lon = value.lon;
						// console.log(lat + " "+lon)
						var myLatlng = new google.maps.LatLng(lat, lon);

						    marker = new google.maps.Marker({
								position: myLatlng,
								map: map,
								title: lat +" " + lon
						});
						// push markers into array so can clear them later
						markers.push(marker);


			});
		});
});
