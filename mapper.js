// render google map
var map;
function initialize() {
  var myLatlng = new google.maps.LatLng(-25.363882,131.044922);
  var mapOptions = {
    zoom: 4,
    center: myLatlng
  }
   map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Hello World!'
  });
}

google.maps.event.addDomListener(window, 'load', initialize);

	// get value from user input
		var ref = new Firebase("https://fiery-fire-3549.firebaseio.com/");
		$(document).ready(function() {

			$("#title-form").submit(function(evt){
				evt.preventDefault();
				var title = $("#title").val();

// pull in data from firebase.  this loops through each lat long and console logs
				ref.child("transformed-data")
				  .orderByChild("movieName")
					.equalTo(title).on("child_added", function(snap) {
						var value = snap.val();
						var lat = value.lat;
						var lon = value.lon;
						console.log(lat + " "+lon)
						var myLatlng = new google.maps.LatLng(lat, lon);
						// var mapOptions = {
						//   zoom: 4,
						//   center: myLatlng
						// }

						var marker = new google.maps.Marker({
						    position: myLatlng,
						    title:"Hello World!"
						});
						marker.setMap(map);

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
