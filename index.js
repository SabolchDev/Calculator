var numberString;
var firstString;
var lastString;
var equal;
function calOne() {
    if (numberString == null) numberString = "1";
    else if (numberString != "Math Error") numberString = numberString + "1";
    document.getElementById("input").value = numberString;
}
function calTwo() {
    if (numberString == null) numberString = "2";
    else if (numberString != "Math Error") numberString = numberString + "2";
    document.getElementById("input").value = numberString;
}
function calThr() {
    if (numberString == null) numberString = "3";
    else if (numberString != "Math Error") numberString = numberString + "3";
    document.getElementById("input").value = numberString;
}
function calFor() {
    if (numberString == null) numberString = "4";
    else if (numberString != "Math Error") numberString = numberString + "4";
    document.getElementById("input").value = numberString;
}
function calFiv() {
    if (numberString == null) numberString = "5";
    else if (numberString != "Math Error") numberString = numberString + "5";
    document.getElementById("input").value = numberString;
}
function calSix() {
    if (numberString == null) numberString = "6";
    else if (numberString != "Math Error") numberString = numberString + "6";
    document.getElementById("input").value = numberString;
}
function calSev() {
    if (numberString == null) numberString = "7";
    else if (numberString != "Math Error") numberString = numberString + "7";
    document.getElementById("input").value = numberString;
}
function calEig() {
    if (numberString == null) numberString = "8";
    else if (numberString != "Math Error") numberString = numberString + "8";
    document.getElementById("input").value = numberString;
}
function calNin() {
    if (numberString == null) numberString = "9";
    else if (numberString != "Math Error") numberString = numberString + "9";
    document.getElementById("input").value = numberString;
}
function calZer() {
    if (numberString == null) numberString = "0";
    else if (numberString != "Math Error") numberString = numberString + "0";
    document.getElementById("input").value = numberString;
}
function calDel() {
    numberString = numberString.substr(0, numberString.length - 1);
    document.getElementById("input").value = numberString;
}
function calPlus() {
    if (numberString == null) document.getElementById("input").value = "Math Error";
    else {
        firstString = numberString;
        equal = 1
        numberString = null;
    }
    document.getElementById("input").value = numberString;
}
function calPer() {
    if (numberString == null) document.getElementById("input").value = "Math Error";
    else {
        firstString = numberString;
        equal = 2
        numberString = null;
    }
    document.getElementById("input").value = numberString;
}
function calNeg() {
    if (numberString == null) document.getElementById("input").value = "Math Error";
    else {
        firstString = numberString;
        equal = 3
        numberString = null;
    }
    document.getElementById("input").value = numberString;
}
function calSzo() {
    if (numberString == null) document.getElementById("input").value = "Math Error";
    else {
        firstString = numberString;
        equal = 4
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
            numberString = parseInt(numberString) + parseInt(firstString);
            break;
        case 2:
            numberString = parseInt(numberString) / parseInt(firstString);
            break;
        case 3:
            numberString = parseInt(numberString) - parseInt(firstString);
            break;
        case 4:
            numberString = parseInt(numberString) * parseInt(firstString);
            break;
    }
    document.getElementById("input").value = numberString;
}