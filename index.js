var numberString;
var firstString;
var equal;
function calNumber(i) {
    if (numberString == null) numberString = i;
    else if (numberString != "Math Error") numberString = numberString + i;
    document.getElementById("input").value = numberString;
}
function calDel() {
    numberString = numberString.substr(0, numberString.length - 1);
    document.getElementById("input").value = numberString;
}
function calThan(i) {
    if (numberString == null) document.getElementById("input").value = "Math Error";
    else {
        firstString = numberString;
        equal = i;
        numberString = null;
    }
    document.getElementById("input").value = numberString;
}
function calCle() {
    numberString = null;
    document.getElementById("input").value = numberString;
}
function calEqual() {
    switch(equal) {
        case 1:
            numberString = parseFloat(numberString) + parseFloat(firstString);
            break;
        case 2:
            numberString = parseFloat(numberString) / parseFloat(firstString);
            break;
        case 3:
            numberString = parseFloat(numberString) - parseFloat(firstString);
            break;
        case 4:
            numberString = parseFloat(numberString) * parseFloat(firstString);
            break;
    }
    document.getElementById("input").value = numberString;
}