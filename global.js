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
                    nextButton.style.display = "none";
                    var albumArtDiv = document.createElement("albumArt");
                    albumArtDiv.id = "albumArt";
                    albumArtDiv.innerHTML = "Album images" + "<br><select><option value='cover'>Album Cover</option></select>";
                    document.getElementById("wrapper").appendChild(albumArtDiv);
                } else {
                    albumArtistDiv.style.display = "none";
                    nextButton.style.display = "none";
                    var artistInfoDiv = document.createElement("artistInfo");
                    artistInfoDiv.id = "artistInfo";
                    artistInfoDiv.innerHTML = "Add member" + "<br><input type='text' name='name' placeholder='Name'><br><input type='text' name='instruments' placeholder='Instrument(s)''><br>";
                    document.getElementById("wrapper").appendChild(artistInfoDiv);
                    var addMemberDiv = document.createElement("addMember");
                    addMemberDiv.id = "addMember";
                    addMemberDiv.innerHTML = "+";
                    document.getElementById("parent").appendChild(addMemberDiv);
                }
            }

        });

        validate.open("get", "info.txt");
        validate.send();

    });

    // addMember.addEventListener("click", function() {     

    //      var textbox = document.createElement("input");
    //  textbox.type = "text";
    //  document.getElementById("theForm").appendChild(textbox);

    //  var newTextbox = document.getElementById("input2"); 
    //          document.body.insertBefore(textbox, newTextbox); 

    // });

});