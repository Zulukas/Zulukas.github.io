// JavaScript source code

function validateName(input, id) {
    var img = document.getElementById(id);

    //Accepts First Last, First M. Last, First Middle Last as acceptable input
    if (!input.match(/^[A-Za-z]+\s[A-Za-z]+\s[A-Za-z]+|[A-Za-z]+\s[A-Z].\s[A-Za-z]+|[A-Za-z]+\s[A-Za-z]+$/)) {        
        img.style.visibility = 'visible';
        return false;
    }
    else {
        img.style.visibility = 'hidden';
        return true;
    }
}

function validateAddressLine1(input, id) {
    var img = document.getElementById(id);

    //Accepts addresses like 1234 My Street and 100 East 90th South and 100 east 9000 south
    if (!input.match(/^\d+\s\w+\s\d+\s\w+|\d+\s\w+\s\d+[a-z]{2}\s\w+|\d+\s\w+\s\w+$/)) {
        img.style.visibility = 'visible';
        return false;
    }
    else {
        img.style.visibility = 'hidden';
        return true;
    }
}

function validateCity(input, id) {
    var img = document.getElementById(id);

    //Accepts cities with three or less words (Salt Lake City, New York, Sacremento)
    //I chose not to assert the first character is capitalized because it convolutes it greatly.
    if (!input.match(/^([A-Za-z]+|[A-Za-z]+\s[A-Za-z]+|[A-Za-z]+\s[A-Za-z]+\s[A-Za-z]+)$/)) {
        img.style.visibility = 'visible';
        return false;
    }
    else {
        img.style.visibility = 'hidden';
        return true;
    }
}

function validateState(input, id) {    
    var img = document.getElementById(id);

    //Validates a 5 digit zip or a 5 digit zip with an extension
    //83440 or 83400-1234
    if (!input.match(/(\s*(A[L,K,R,Z]|C[A,O,T]|D[C,E]|FL|GA|HI|I[A,D,L,N]|K[S,Y]|LA|M[A,D,E,I,N,S,O,T]|N[C,E,D,H,J,M,V,Y]|O[H,K,R]|PA|RI|S[C,D]|T[N,X]|UT|V[A,T]|W[A,I,V,Y])\s*)$/)) {
        img.style.visibility = 'visible';
        return false;
    }
    else {
        img.style.visibility = 'hidden';
        return true;
    }
}

function validateZIP(input, id) {
    var img = document.getElementById(id);

    //Validates a 5 digit zip or a 5 digit zip with an extension
    //83440 or 83400-1234
    if (!input.match(/^(\d{5}\-\d{4}|\d{5})$/)) {
        img.style.visibility = 'visible';
        return false;
    }
    else {
        img.style.visibility = 'hidden';
        return true;
    }
}

function validatePhoneNumber(input, id) {
    var img = document.getElementById(id);

    //Validates phone numbers matching 123-456-7890 format
    if (!input.match(/^\d{3}-\d{3}-\d{4}$/)) {
        img.style.visibility = 'visible';
        return false;
    }
    else {
        img.style.visibility = 'hidden';
        return true;
    }
}

function validateCreditCard(input, id) {
    var img = document.getElementById(id);

    //Validates credit card names matching: 1234-1234-1234-1234 or 1234123412341234
    if (!input.match(/^(\d{4}-\d{4}-\d{4}-\d{4}|\d{16})$/)) {
        img.style.visibility = 'visible';
        return false;
    }
    else {
        img.style.visibility = 'hidden';
        return true;
    }
}

function validateCVV(input, id) {
    var img = document.getElementById(id);

    //Validates CVV numbers from 0-999
    if (!input.match(/^\d{3}$/)) {
        img.style.visibility = 'visible';
        return false;
    }
    else {
        img.style.visibility = 'hidden';
        return true;
    }
}

function resetSelection() {
    document.forms['solarpanels']['Solar Panels'].value = "";
    document.forms['BatterySizes']['Battery Sizes'].value = "";
    document.forms['Transmitters']['Num Transmitters'].value = "";
    document.forms['Receivers']['Num Receivers'].value = "";
    document.forms['Bandwidth']['Bandwidth'].value = "";
    document.forms['Orbit']['Orbit Height'].value = "";

    document.getElementById("observation").checked = false;
    document.getElementById("meteorology").checked = false;
    document.getElementById("positioning").checked = false;
    document.getElementById("spotbeam").checked = false;
    document.getElementById("astronomical").checked = false;
}

function submitSelection() {
    
    var cost = calculateCost();

    if (cost !== 0) {
        sessionStorage.setItem('cost', cost);
        window.location.href = "checkout.html";
    }
}

function getCost() {
    var cost = 0;
    localStorage.getItem('cost', cost);
    if (cost !== 0)
        document.getElementById("basecost").innerHTML = "Cost: " + cost;
    else
        document.getElementById("basecost").innerHTML = "Cost: NA";
}

function calculateCost() {
    var cost = 0.00;

    var solar = document.forms['solarpanels']['Solar Panels'].value;
    var ampHour = document.forms['BatterySizes']['Battery Sizes'].value;
    var numTransmitters = document.forms['Transmitters']['Num Transmitters'].value;
    var numReceivers = document.forms['Receivers']['Num Receivers'].value;
    var bandwidth = document.forms['Bandwidth']['Bandwidth'].value;
    var orbit = document.forms['Orbit']['Orbit Height'].value;
    var obs = document.getElementById("observation").checked;
    var met = document.getElementById("meteorology").checked;
    var pos = document.getElementById("positioning").checked;
    var spot = document.getElementById("spotbeam").checked;
    var astro = document.getElementById("astronomical").checked;
    var bad = false;

    //alert("Solar: " + solar + ", Amps: " + ampHour + ", Transmitters: " + numTransmitters + ", Receivers: " + numReceivers + ", Bandwidth: " + bandwidth + ", orbit: " + orbit);

    if (solar === "small") {
        cost += 10000;
        sessionStorage.setItem('SOLAR', "Small Solar Array");
    }
    else if (solar === "medium") {
        cost += 15000;
        sessionStorage.setItem('SOLAR', "Medium Solar Array");
    }
    else if (solar === "large") {
        cost += 25000;
        sessionStorage.setItem('SOLAR', "Large Solar Array");
    }
    else if (solar === "xl") {
        cost += 40000;
        sessionStorage.setItem('SOLAR', "Extra Large Solar Array");
    }
    else {
        bad = true;
    }

    if (ampHour === "75ah") {
        cost += 20000;
        sessionStorage.setItem('BATTERY', "75 AmpHour Battery");
    }
    else if (ampHour === "150ah") {
        cost += 40000;
        sessionStorage.setItem('BATTERY', "150 AmpHour Battery");
    }
    else if (ampHour === "225ah") {
        cost += 60000;
        sessionStorage.setItem('BATTERY', "225 AmpHour Battery");
    }
    else if (ampHour === "300ah") {
        cost += 80000;
        sessionStorage.setItem('BATTERY', "300 AmpHour Battery");
    }
    else {
        bad = true;
    }

    if (numTransmitters === "1") {
        cost += 5000;
        sessionStorage.setItem('TRANSMITTER', "1 Transmitter");
    }
    else if (numTransmitters === "2") {
        cost += 10000;
        sessionStorage.setItem('TRANSMITTER', "2 Transmitter");
    }
    else if (numTransmitters === "3") {
        cost += 15000;
        sessionStorage.setItem('TRANSMITTER', "3 Transmitter");
    }
    else if (numTransmitters === "4") {
        cost += 20000;
        sessionStorage.setItem('TRANSMITTER', "4 Transmitter");
    }
    else {
        bad = true;
    }

    if (numReceivers === "1") {
        cost += 5000;
        sessionStorage.setItem('RECEIVER', "1 Receiver");
    }
    else if (numReceivers === "2") {
        cost += 10000;
        sessionStorage.setItem('RECEIVER', "2 Receiver");
    }
    else if (numReceivers === "3") {
        cost += 15000;
        sessionStorage.setItem('RECEIVER', "3 Receiver");
    }
    else if (numReceivers === "4") {
        cost += 20000;
        sessionStorage.setItem('RECEIVER', "4 Receiver");
    }
    else {
        bad = true;
    }

    if (bandwidth === "500") {
        cost += 20000;
        sessionStorage.setItem('BANDWIDTH', "500 Mbps");
    }
    else if (bandwidth === "1000") {
        cost += 50000;
        sessionStorage.setItem('BANDWIDTH', "1 Gbps");
    }
    else if (bandwidth === "10000") {
        cost += 125000;
        sessionStorage.setItem('BANDWIDTH', "10 Gbps");
    }
    else if (bandwidth === "100000") {
        cost += 250000;
        sessionStorage.setItem('BANDWIDTH', "100 Gbps");
    }
    else {
        bad = true;
    }

    if (orbit === "1") {
        cost += 50000;
        sessionStorage.setItem('ORBIT', "Sun-synchronous");
    }
    else if (orbit === "2") {
        cost += 150000;
        sessionStorage.setItem('ORBIT', "GPS");
    }
    else if (orbit === "3") {
        cost += 500000;
        sessionStorage.setItem('ORBIT', "Geostationary");
    }
    else if (orbit === "4") {
        cost += 2000000;
        sessionStorage.setItem('ORBIT', "Lunar");
    }
    else {
        bad = true;
    }

    if (bad) {
        alert("All Main Parts fields must be selected.");
        return 0;
    }

    if (obs) {
        cost += 1000000;
        sessionStorage.setItem('OBS', "Observational Package");
    }
    if (met) {
        cost += 500000;
        sessionStorage.setItem('MET', "Meteorological Package");
    }
    if (pos) {
        cost += 250000;
        sessionStorage.setItem('POS', "GPS Package");
    }
    if (spot) {
        cost += 1500000;
        sessionStorage.setItem('SPOT', "Spotbeam Package");
    }
    if (astro) {
        cost += 5000000;
        sessionStorage.setItem('ASTRO', "Astronomical Package");
    }

    return cost;
}

