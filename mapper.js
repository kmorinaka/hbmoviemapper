// render google map
var map;
var markers = [];

function initialize() {
  var myLatlng = new google.maps.LatLng(37.775, -122.4183333);
  var mapOptions = {
    zoom: 12,
    center: myLatlng
  }
   map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);


}

google.maps.event.addDomListener(window, 'load', initialize);




	// get value from user input

	function removeMarkers(){
for(i=0; i<markers.length; i++){
	markers[i].setMap(null);
}
}

		var ref = new Firebase("https://fiery-fire-3549.firebaseio.com/");
		$(document).ready(function() {

			$("#title-form").submit(function(evt){
				evt.preventDefault();

				removeMarkers();



				var title = $("#title").val();

// pull in data from firebase.  this loops through each lat long and console logs
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

						markers.push(marker);
						console.log(markers);






// display marker on map for each lat long





			// 			var myLatlng = new google.maps.LatLng(lat, lon);
			// 			var mapOptions = {
			// 	  zoom: 4,
			// 	  center: myLatlng
			// 	}
			// 	var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
			//
			// 	var marker = new google.maps.Marker({
			// 	    position: myLatlng,
			// 	    title:"Hello World!"
			// 	});
			//
			//
			//
			// 	// To add the marker to the map, call setMap();
			// 	marker.setMap(map);
			//
			});
		});
});

// google.maps.event.addDomListener(window, 'load', initialize);

	// Firebase query:
