function getCountry(input) {
	var index = input.selectedIndex;
	var val = input[index].text;
	var country = val.toLowerCase();

	//var file = "http://157.201.194.254/~cs213/" + country + ".txt";
	var file = country + ".txt";

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {  
		if (xhttp.readyState == 4 && xhttp.status == 200) {
  			fillTable("CITIES", xhttp.responseText);
    }
  };
  
  xhttp.open("GET", file, true);
  xhttp.send();

}

function fillTable(table_ID, data) {
	// console.log(data);
	//Get the table in question
	var table = document.getElementById(table_ID);

	//Split the data into bite-size pieces
	// var parts = data.replace(/\n/g, " ").split(" ");
	var parts = data.replace(/(\s\s+|\n)/g, " ").split(" ");

	console.log(parts);

	//Number of rows in our current table
	var length = table.rows.length;

	//Clear the old data
	for (var i = 1; i < length; i++) {
		table.deleteRow(1);
	}

	//Initialize data arrays
	var fieldA = [];
	var indexA = 0;
	var fieldB = [];
	var indexB = 0;

	var enterIntoFieldA = true;



	//Populate the data arrays
	for (var i = 0; i < parts.length; i++) {
		if (enterIntoFieldA) {
			fieldA[indexA] += parts[i];

			if (parts[i + 1])
		}
		else {

		}
	}

	// for (var i = 0; i < parts.length; i++) {
	// 	if (i % 2 == 0) {
	// 		fieldA.push(parts[i]);
	// 	}
	// 	else {
	// 		fieldB.push(parts[i]);
	// 	}
	// }

	 console.log(fieldA);
	 console.log(fieldB);

	// console.log("Num cities: " + cities.length);
	// console.log("Num pops: " + populations.length);

	//Populate the table
	for (var i = 0; i < fieldA.length; i++) {
		var row = table.insertRow(i + 1);

		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);

		cell1.innerHTML = fieldA[i];
		cell2.innerHTML = fieldB[i];
	}
}