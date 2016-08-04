window.addEventListener("load", function() {

    var next = document.getElementById("nextButton");
    var form = document.getElementById("form");
    var albumArtistDiv = document.getElementById("albumArtist");
    var albumImagesText = document.getElementById("albumImagesText");
    var addMembersText = document.getElementById("addMembersText");
    var addMembersNote = document.getElementById("addMembersNote");
    var plusMember = document.getElementById("plus");
    var submit = document.getElementById("submit");
    var wrapper = document.getElementById("wrapper");

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
                    submit.style.display = "none";
                    albumImagesText.style.display = "block";
                    var albumArtDiv = document.createElement("albumArt");
                    albumArtDiv.id = "albumArt";
                    albumArtDiv.innerHTML = "<select><option value='cover'>Album Cover</option></select>";
                    document.getElementById("wrapper").appendChild(albumArtDiv);

                } else {
                    albumArtistDiv.style.display = "none";
                    submit.style.display = "none";
                    addMembersText.style.display = "block";

                    var addMember = document.createElement("input");
                    addMember.setAttribute("type", "text");
                    addMember.id = "newMember";
                    addMember.className = "memberInput";
                    document.getElementById("wrapper").appendChild(addMember);

                    var addInstrument = document.createElement("input");
                    addInstrument.setAttribute("type", "text");
                    addInstrument.id = "newInstrument";
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

        var x = document.getElementById("newMember");
        var y = document.getElementById("newInstrument");

        x.style.display = "none";
        y.style.display = "none";

        var addAdditonalMember = document.createElement("input");
        addAdditonalMember.setAttribute("type", "text");
        addAdditonalMember.className = "memberInput";
        document.getElementById("wrapper").appendChild(addAdditonalMember);

        var addAdditonalInstrument = document.createElement("input");
        addAdditonalInstrument.setAttribute("type", "text");
        addAdditonalInstrument.className = "memberInput";
        document.getElementById("wrapper").appendChild(addAdditonalInstrument);

        // var n = addMemberDiv.length;
        // addMemberDiv[n-1].style.display = "none";
    });

});