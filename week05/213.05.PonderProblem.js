/******************************************************************************
 * Alert the user with "Hello World!"
 *****************************************************************************/
function problem1() {
    alert("Hello World!");
}

/******************************************************************************
 * Alert the user with the RegEx'ed message.
 *****************************************************************************/
function problem2(name, paragraph) {
    alert(paragraph.replace(/\w+_\w+/g, name));
}

/******************************************************************************
 * Alert the user with converted celcius temperature
 *****************************************************************************/
function problem3(F) {
    if (isNotNumerical(F, "Temperature"))
        return;

    alert(calculateCelsius(F).toFixed(1));
}

/******************************************************************************
 * Calculate the rate from weight.  Notify user if out of bounds.
 *****************************************************************************/
function problem4(weight) {
    if (isNotNumerical(weight, "Weight"))
        return;

    (weight < 1 || weight > 5) ?                            //CONDITION
        (alert("Error: Invalid weight")) :                  //TRUE
        (alert("$" + calculatePrice(weight).toFixed(2)));   //FALSE
}

/******************************************************************************
 * Calculate the compound interest without using the exponent method.  Takes
 * the amount * (1 + apr) per iteration.  Alerts the user with the result.
 *****************************************************************************/
function problem5(apr, term, amount) {
    total = 1 + (apr / 100);

    if (isNotNumerical(apr, "APR") ||
        isNotNumerical(term, "Term") ||
        isNotNumerical(amount, "Amount")) {
        return;
    }

    for (i = 0; i < term; i++) {
        amount *= total;
    }

    alert("$" + amount.toFixed(2));
}

/* Functions to make things look a little bit cleaner */

/******************************************************************************
 * Simple function to error handle bad input.  Personal venture on this
 * assignment, not required by assignment.  More of me wanting to play around
 * with JS a bit more in depth than what was required by the assignment as I
 * felt it wasn't difficult at all (I pounded the thing out in an hour without
 * any previous knowledge of JS but having had a fair amount of experience with
 * Java).
 *****************************************************************************/
function isNotNumerical(value, type) {
    if (isNaN(value)) {
        alert("Error: " + type + " is not a number!");
        return true;
    }

    return false;
}

/******************************************************************************
 * Calculates the rate, used to clean things up a bit
 *****************************************************************************/
function calculatePrice(w) {
    return 0.98 + ((w - 1) * 0.21);
}

/******************************************************************************
 * Calculate celcius, used to clean things up a bit
 *****************************************************************************/
function calculateCelsius(f) {
    return (f - 32) * (5 / 9);
}