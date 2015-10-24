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

    if (!input.match(/^([1][0-1][1-8]|[1-9][0-9]|[0-9])$/))
        error = true;
       
    if (replace)
        modifyText(error, target, message);

    return !error;
}

/*Problem #2 Function*/
/*
    Validate a social security number

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
    
    //This regex requires a string of format ###-##-####
    if (!input.match(/^\s*\d{3}-\d{2}-\d{4}\s*$/)) {
        error = true;
    }

    if (replace)
        modifyText(error, target, message);

    return !error;
}

/*Problem #3 Function*/
/*
    Validate a credit card number

    Designed such that the user can send in:
        input: the input to be checked
        target: the target text to change
        replace: indicate whether we want to change any text

    The idea behind this is that this function could be used
    without requiring any text to be modified

    Returns true or false (inverted error)
*/
function validateCreditCard(input, target, replace) {
    replace = invertReplace(replace);
    error = false
    message = "Invalid credit card number";
    
    //This regex explicitly requires 1 space or no spaces between quartets of numbers between 0-9
    if (!input.match(/^(\s*(\d{4}\d{4}\d{4}\d{4}\s*)|(\s*\d{4}\s\d{4}\s\d{4}\s\d{4})\s*)$/)) {
        error = true;
    }

    if (replace)
        modifyText(error, target, message);

    return !error;
}

/*Problem #4 Function*/
/*
    Validate a date in mm/dd/yyyy format

    Designed such that the user can send in:
        input: the input to be checked
        target: the target text to change
        replace: indicate whether we want to change any text

    The idea behind this is that this function could be used
    without requiring any text to be modified

    Returns true or false (inverted error)
*/
function validateDate(input, target, replace) {
    replace = invertReplace(replace);

    error = false;
    message = "Invalid date"

    //Todo: Add support for correct range for months ;)
    if (!input.match(/^(\s*(1[0-2]|[1-9])\/([1-2][0-9]|[3][0-1]|[1-9])\/(1[7-9][0-9][0-9]|2[0][0-9][0-9]|2100)\s*)$/)) {
        error = true;
    }

    if (replace)
        modifyText(error, target, message);

    return !error;
}

/*Problem #5 Function*/
/*
    Validate a state abbreviation

    Designed such that the user can send in:
        input: the input to be checked
        target: the target text to change
        replace: indicate whether we want to change any text

    The idea behind this is that this function could be used
    without requiring any text to be modified

    Returns true or false (inverted error)
*/
function validateStateAbbreviation(input, target, replace) {
    replace = invertReplace(replace);

    error = false;
    message = "Invalid state abbreviation";

    if (!input.match(/(\s*(A[L,K,R,Z]|C[A,O,T]|D[C,E]|FL|GA|HI|I[A,D,L,N]|K[S,Y]|LA|M[A,D,E,I,N,S,O,T]|N[C,E,D,H,J,M,V,Y]|O[H,K,R]|PA|RI|S[C,D]|T[N,X]|UT|V[A,T]|W[A,I,V,Y])\s*)$/)) {
        error = true;
    }

    if (replace)
        modifyText(error, target, message);

    return !error;
}

/*Problem #6 Function*/
/*
    Validate a money value

    Designed such that the user can send in:
        input: the input to be checked
        target: the target text to change
        replace: indicate whether we want to change any text

    The idea behind this is that this function could be used
    without requiring any text to be modified

    Returns true or false (inverted error)
*/
function validateMoney(input, target, replace) {
    replace = invertReplace(replace);

    error = false;
    message = "Invalid money amount";

    //Got help from the internet for this one
    //http://stackoverflow.com/questions/13848570/currency-regular-expression
    //This string supports up to hundreds of trillions, hope that's long enough, if not, add another:
    //(,?\d{3})? following a matching grouping like that
    if (!input.match(/^\$?(?=\(.*\)|[^()]*$)\(?\d{1,3}(,?\d{3})?(,?\d{3})?(,?\d{3})?(,?\d{3})?(\.\d{2})?\)?$/)) {
        error = true;
    }

    if (replace)
        modifyText(error, target, message);

    return !error;
}

//Helper function to decide if we need to change any text
function invertReplace(replace) {
    return (!replace) ? (false) : (true);
}

//Helper function to handle changing text
function modifyText(error, target, message) {
    if (error) {
        document.getElementById(target).textContent = (message);
    }
    else {
        document.getElementById(target).textContent = "";
    }
}