window.addEventListener("load", function (){

	var next = document.getElementById("nextButton");

	next.addEventListener("click", function(){
		var validate = new XMLHttpRequest();

		validate.addEventListener("loadstart", function(){

		});

		validate.addEventListener("load", function(e){
			var apiResponse = JSON.parse(e.target.responseText);
			var error = document.getElementById("error");

			var x = document.forms["form"]["album"].value
			var y = document.forms["form"]["artist"].value;
			if (x == apiResponse.blah.albums.albumTitle && y == apiResponse.blah.artist) {
				error.style.display = "block";
				return false;
			}

		});

		validate.open("get", "info.txt");
		validate.send();

	});

});