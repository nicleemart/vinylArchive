window.addEventListener("load", function() {

    var next = document.getElementById("nextButton");
    var form = document.getElementById("form");
    var albumArtistDiv = document.getElementById("albumArtist");
    var albumImagesText = document.getElementById("albumImagesText");
    var addMembersText = document.getElementById("addMembersText");
    var addMembersNote = document.getElementById("addMembersNote");
    var addMember = document.getElementById("plus");
    var submit = document.getElementById("submit");
    var wrapper = document.getElementById("wrapper");

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
                    albumImagesText.style.display = "block";
                    var albumArtDiv = document.createElement("albumArt");
                    albumArtDiv.id = "albumArt";
                    albumArtDiv.innerHTML = "<select><option value='cover'>Album Cover</option></select>";
                    document.getElementById("wrapper").appendChild(albumArtDiv);

                } else {
                    albumArtistDiv.style.display = "none";
                    nextButton.style.display = "none";
                    addMembersText.style.display = "block";
                    var artistInfoDiv = document.createElement("artistInfo");
                    artistInfoDiv.id = "artistInfo";
                    artistInfoDiv.innerHTML = "<input type='text' name='name' placeholder='Name'><br><input type='text' name='instruments' placeholder='Instrument(s)'><br>";
                    document.getElementById("wrapper").appendChild(artistInfoDiv);
                    addMembersNote.style.display = "block";
                }
            }

        });

        validate.open("get", "info.txt");
        validate.send();

    });

    addMember.addEventListener("click", function() {

        artistInfo.style.display = "none";
        // var n = member.length;
        // member[n-1].style.display = "none";
        // instrument[n-1].style.display = "none";

        var addMemberDiv = document.createElement("addAdditionalMember");
        addMemberDiv.innerHTML = "<input type='text' name='name' placeholder='Name' class='members2'><br><input type='text' name='instruments2' placeholder='Instrument(s)' class='instruments'><br>";
        document.getElementById("wrapper").appendChild(addMemberDiv);
    });

});