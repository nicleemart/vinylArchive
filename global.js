window.addEventListener("load", function() {

    var form = document.getElementById("form");
    var albumArtistDiv = document.getElementById("albumArtist");
    var albumImagesText = document.getElementById("albumImagesText");
    var addMembersText = document.getElementById("addMembersText");
    var addMembersNote = document.getElementById("addMembersNote");
    var plusMember = document.getElementById("plus");
    var submit = document.getElementById("submit");
    var wrapper = document.getElementById("wrapper");
    var memberNumber = 0;
    var submit2 = document.getElementById("submit2");
    var submit3 = document.getElementById("submit3");
    var submit4 = document.getElementById("submit4");

    submit.addEventListener("click", function(form) {

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
                    albumImagesText.style.display = "block";
                    submit4.style.display = "block";

                    var selectAlbumArt = document.createElement("select");
                    selectAlbumArt.setAttribute("value", "Album Cover");
                    selectAlbumArt.id = "albumArt";
                    document.getElementById("wrapper").appendChild(selectAlbumArt);

                } else {
                    albumArtistDiv.style.display = "none";
                    addMembersText.style.display = "block";
                    submit2.style.display = "block";

                    var addMember = document.createElement("input");
                    addMember.setAttribute("type", "text");
                    addMember.setAttribute("placeholder", "Name");
                    addMember.setAttribute("name", "member");
                    addMember.id = "newMember" + memberNumber;
                    addMember.className = "memberInput";
                    document.getElementById("wrapper").appendChild(addMember);

                    var addInstrument = document.createElement("input");
                    addInstrument.setAttribute("type", "text");
                    addInstrument.setAttribute("placeholder", "Instrument(s)");
                    addInstrument.setAttribute("name", "instrument");
                    addInstrument.id = "newInstrument" + memberNumber;
                    addInstrument.className = "memberInput";
                    document.getElementById("wrapper").appendChild(addInstrument);

                    addMembersNote.style.display = "block";
                }
            }

        });

        validate.open("get", "info.txt");
        validate.send();

    });

    plusMember.addEventListener("click", function() {

        var x = document.getElementById("newMember" + memberNumber);
        var y = document.getElementById("newInstrument" + memberNumber);
        var memberInput = document.getElementsByClassName("memberInput");


        memberNumber++;

        x.style.display = "none";
        y.style.display = "none";

        var addAdditionalMember = document.createElement("input");
        addAdditionalMember.setAttribute("type", "text");
        addAdditionalMember.setAttribute("placeholder", "Name");
        addAdditionalMember.setAttribute("name", "member" + memberNumber);
        addAdditionalMember.className = "memberInput";
        addAdditionalMember.id = "newMember" + memberNumber;
        document.getElementById("wrapper").appendChild(addAdditionalMember);

        var addAdditionalInstrument = document.createElement("input");
        addAdditionalInstrument.setAttribute("type", "text");
        addAdditionalInstrument.setAttribute("placeholder", "Instrument(s)");
        addAdditionalInstrument.setAttribute("name", "Instrument" + memberNumber);
        addAdditionalInstrument.className = "memberInput";
        addAdditionalInstrument.id = "newInstrument" + memberNumber;
        document.getElementById("wrapper").appendChild(addAdditionalInstrument);
    });

    submit2.addEventListener("click", function(form) {

        form.preventDefault();

            var currentMemberInput = document.getElementById("newMember" + memberNumber);
            var currentInstrumentInput = document.getElementById("newInstrument" + memberNumber);

            currentMemberInput.style.display = "none";
            currentInstrumentInput.style.display = "none";
            addMembersText.style.display = "none";
            addMembersNote.style.display = "none";
            submit2.style.display = "none";
            submit3.style.display = "block";

            var addLocation = document.createElement("input");
            addLocation.setAttribute("type", "text");
            addLocation.setAttribute("placeholder", "City name...");
            addLocation.setAttribute("name", "location");
            addLocation.id = "location";
            addLocation.className = "memberInput";
            document.getElementById("wrapper").appendChild(addLocation);

            var addArtistImage = document.createElement("input");
            addArtistImage.setAttribute("type", "file");
            addArtistImage.setAttribute("placeholder", "Choose File");
            addArtistImage.setAttribute("name", "artistImage");
            addArtistImage.id = "artistImage";
            addArtistImage.className = "memberInput";
            document.getElementById("wrapper").appendChild(addArtistImage);

    });
        submit3.addEventListener("click", function(form) {

        form.preventDefault();

            var addLocationInput = document.getElementById("location");
            var addArtistImageInput = document.getElementById("artistImage");

            addLocationInput.style.display = "none";
            addArtistImageInput.style.display = "none";
            submit3.style.display = "none";
            albumImagesText.style.display = "block";
            submit4.style.display = "block";

            var selectAlbumArt = document.createElement("select");
            selectAlbumArt.setAttribute("value", "Album Cover");
            selectAlbumArt.id = "albumArt";
            document.getElementById("wrapper").appendChild(selectAlbumArt);

            var addAlbumImage = document.createElement("input");
            addAlbumImage.setAttribute("type", "file");
            addAlbumImage.setAttribute("placeholder", "Choose File");
            addAlbumImage.setAttribute("name", "albumImage");
            addAlbumImage.id = "albumImage";
            addAlbumImage.className = "memberInput";
            document.getElementById("wrapper").appendChild(addAlbumImage);

    });

        submit4.addEventListener("click", function(form) {

        form.preventDefault();

            var selectAlbumArtInput = document.getElementById("albumArt");
            var addAlbumImageInput = document.getElementById("albumImage");

            selectAlbumArtInput.style.display = "none";
            addAlbumImageInput.style.display = "none";
            albumImagesText.style.display = "none";
            submit4.style.display = "none";

            var addAlbumGenre = document.createElement("input");
            addAlbumGenre.setAttribute("type", "text");
            addAlbumGenre.setAttribute("placeholder", "Album genre");
            addAlbumGenre.setAttribute("name", "genre");
            addAlbumGenre.id = "albumGenre";
            addAlbumGenre.className = "memberInput";
            document.getElementById("wrapper").appendChild(addAlbumGenre);

            var addReleaseDate = document.createElement("input");
            addReleaseDate.setAttribute("type", "text");
            addReleaseDate.setAttribute("placeholder", "Release date");
            addReleaseDate.setAttribute("name", "date");
            addReleaseDate.id = "releaseDate";
            addReleaseDate.className = "memberInput";
            document.getElementById("wrapper").appendChild(addReleaseDate);

            var selectAlbumFormat = document.createElement("select");
            selectAlbumFormat.setAttribute("value", "Album Format");
            selectAlbumFormat.id = "albumFormat";
            document.getElementById("wrapper").appendChild(selectAlbumFormat);

    });

});