function getCountry(input) {
	var index = input.selectedIndex;
	var val = input[index].text;
	var parse = document.forms["countrySelect"];
	var parseElements = parse.elements;
	var citiesSel = parseElements["cities"];	
	var country = val.toLowerCase();

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4 && xhttp.status == 200) {
			document.getElementById("blah").innerHTML = xhttp.responseText;
		}
	};

	xhttp.open("GET", "http://157.201.194.254/~cs213/" + country + ".txt", true);
	xhttp.send();

	// alert ("country!");

	// if (country !== "USA" || country !== "Mexico" ||
	// 	country !== "Canada" || country !== "Russia") {
	// 	return;
	// }

	// var directory = "http://157.201.194.254/~cs213";

	// Http.get({
	// 	url: "http://157.201.194.254/~cs213" + country + ".txt",
	// 	callback: fillCities,
	// 	cache: Http.Cache.Get
	// }, [citiesSel]);

	// return;
}

// function fillCities(xmlreply, citiesElement) {
// 	if (xmlreply.status == Http.Status.OK) {
// 		var citiesResponse = xmlreply.responseText;
// 		var cities = citiesResponse.split("|");
// 		citiesElement.length = 1;
// 		citiesElement.length = cities.length;

// 		for (var i = 0; i < cities.length; i++) {
// 			citiesElement[i].text = cities[i];
// 		}
// 	}
// 	else
// 	{
// 		"Unable to handle the Ajax call.");
// 	}
// }