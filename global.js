window.addEventListener("load", function (){

	var next = document.getElementById("nextButton");

	next.addEventListener("click", function(){
		var validate = new XMLHttpRequest();

		validate.addEventListener("loadstart", function(){

		});

		validate.addEventListener("load", function(e){
			var apiResponse = JSON.parse(e.target.responseText);
			var x = document.forms["form"]["album"].value
			var y = document.forms["form"]["artist"].value;
			if (x == apiResponse.album && y == apiResponse.artist) {
				alert("Nope");
				return false;
			}

		});

		validate.open("get", "info.txt");
		validate.send();

	});

});