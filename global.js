window.addEventListener("load", function() {

    var next = document.getElementById("next");
    var form = document.getElementById("form");
    var albumArtistDiv = document.getElementById("albumArtist");
    var artistInfoDiv = document.getElementById("artistInfo");
    var albumArtDiv = document.getElementById("albumArt");
 
    next.addEventListener("click", function(form) {

        form.preventDefault();

        var validate = new XMLHttpRequest();

        validate.addEventListener("loadstart", function() {

            document.body.style.cursor = "wait";

        });

        validate.addEventListener("load", function(e) {

            document.body.style.cursor = "default";

            var apiResponse = JSON.parse(e.target.responseText);
            var error = document.getElementById("error");

                var albumInput = document.forms["form"]["album"].value;
    			var artistInput = document.forms["form"]["artist"].value;

            for (i = 0; i < apiResponse.blah.albums.length; i++) {
                if (apiResponse.blah.albums[i].albumTitle == albumInput && artistInput == apiResponse.blah.artist) {
                    error.style.display = "block";
                } else if (apiResponse.blah.albums[i].albumTitle != albumInput && artistInput == apiResponse.blah.artist) {
                    albumArtistDiv.style.display = "none";
                    albumArtDiv.style.display = "block";
                } else {
                    albumArtistDiv.style.display = "none";
                    artistInfoDiv.style.display = "block";
                }
            }

        });

        validate.open("get", "info.txt");
        validate.send();

    });

});