window.addEventListener("load", function (){

	var next = document.getElementById("nextButton");
	var albumArtistInput = document.getElementById("albumArtist");
	var artistInfoInput = document.getElementById("artistInfo");
	var albumArtInput = document.getElementById("albumArt");

	next.addEventListener("click", function(){
		var validate = new XMLHttpRequest();

		validate.addEventListener("loadstart", function(){

		});

		validate.addEventListener("load", function(e){
			var apiResponse = JSON.parse(e.target.responseText);
			var error = document.getElementById("error");

			var album = document.forms["albumArtistForm"]["album"].value
			var artist = document.forms["albumArtistForm"]["artist"].value;

			for (i = 0; i < apiResponse.blah.albums.length; i++){
				if (apiResponse.blah.albums[i].albumTitle == album && artist == apiResponse.blah.artist){
					error.style.display = "block";
				}
				else if (apiResponse.blah.albums[i].albumTitle != album && artist == apiResponse.blah.artist){
					albumArtistInput.style.display = "none";
					albumArtInput.style.display = "block";
				}
				else{
					albumArtistInput.style.display = "none";
					artistInfoInput.style.display = "block";
				}
			}

		});

		validate.open("get", "info.txt");
		validate.send();

	});

});