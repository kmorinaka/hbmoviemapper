// render google map
	      function initialize() {
	        var mapOptions = {
	          center: { lat: -34.397, lng: 150.644},
	          zoom: 8
	        };
	        var map = new google.maps.Map(document.getElementById('map-canvas'),
	            mapOptions);
	      }
	      google.maps.event.addDomListener(window, 'load', initialize);

	// get value from user input
		var ref = new Firebase("https://fiery-fire-3549.firebaseio.com/");
		$(document).ready(function() {

			$("#title-form").submit(function(evt){
				evt.preventDefault();
				var title = $("#title").val();
				console.log("hi");

				ref.child("transformed-data")
				  .orderByChild("movieName")
					.equalTo(title).on("child_added", function(snap) {
						var value = snap.val();
						var lat = value.lat;
						var lon = value.lon;
						console.log(lat + " "+lon)
						});

			});
});
	// Firebase query:
