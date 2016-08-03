window.addEventListener("load", function() {

    var next = document.getElementById("nextButton");
    var form = document.getElementById("form");
    var albumArtistDiv = document.getElementById("albumArtist");
    // var addMember = document.getElementById("plus");
 
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
                    var newdiv = document.createElement("albumArt");
          			newdiv.innerHTML = "Album images" + " <br><select><option value='cover'>Album Cover</option></select>";
        		  	document.getElementsByTagName("body")[0].appendChild(newdiv);
                } else {
                    albumArtistDiv.style.display = "none";
                    artistInfoDiv.style.display = "block";
                }
            }

        });

        validate.open("get", "info.txt");
        validate.send();

    });

	// addMember.addEventListener("click", function() { 	

 //    	var textbox = document.createElement("input");
	// 	textbox.type = "text";
	// 	document.getElementById("theForm").appendChild(textbox);

	// 	var newTextbox = document.getElementById("input2"); 
 //  		document.body.insertBefore(textbox, newTextbox); 

	// });

});