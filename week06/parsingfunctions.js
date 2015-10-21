// JavaScript source code

/*Problem #1 Function*/
/*
    Validate an age, asserting that it is between 0 and 118

    Designed such that the user can send in:
        input: the input to be checked
        target: the target text to change
        replace: indicate whether we want to change any text

    The idea behind this is that this function could be used
    without requiring any text to be modified

    Returns true or false (inverted error)
*/
function validateAge(input, target, replace) {
    replace = invertReplace(replace);

    error = false;
    message = "Invalid age";

    if (input == "") { //Is it blank?
        error = true;
    }
    else if (isNaN(input)) { //Is it not a number?        
        error = true;
    }
    else if (input < 0 || input > 118) { //Is it ranging from 0-118?         
        error = true;
    }
       
    if (replace)
        modifyText(error, target, message);

    return !error;
}

/*Problem #2 Function*/
/*
    Valid a social security number

    Designed such that the user can send in:
        input: the input to be checked
        target: the target text to change
        replace: indicate whether we want to change any text

    The idea behind this is that this function could be used
    without requiring any text to be modified

    Returns true or false (inverted error)
*/
function validateSSN(input, target, replace) {
    replace = invertReplace(replace);

    error = false
    message = "Invalid SSN";

    if (input == "") {
        error = true;
    }

    //Take the string, replace the good part with ""
    input = input.replace(/\s*\d{3}-\d{2}-\d{4}\s*/, "");

    //Now if we have anything else in our string, we know it's invalid
    if (input != "") {
        error = true;
    }

    if (replace)
        modifyText(error, target, message);

    return !error;
}

function validateCreditCard(input, target, replace) {
    replace = invertReplace(replace);

    error = false
    message = "Invalid credit card number";

    if (input == "") {
        error = true;
    }

    //Take the string, replace the good part with ""
    input = input.replace(/\s*\d{4}\s{0,1}\d{4}\s{0,1}\d{4}\s{0,1}\d{4}\s*/, "");

    //Now if we have anything else in our string, we know it's invalid
    if (input != "") {
        error = true;
    }

    if (replace)
        modifyText(error, target, message);

    return !error;
}

function invertReplace(replace) {
    return (!replace) ? (false) : (true);
}

function modifyText(error, target, message) {
    if (error) {
        document.getElementById(target).textContent = (message);
    }
    else {
        document.getElementById(target).textContent = "";
    }
}