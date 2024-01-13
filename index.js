var numberString;
var firstString;
var equal;
var date = new Date();

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
        console.log(numberString)
        numberString = null;
    }
    document.getElementById("input").value = numberString;
}
function calCle() {
    firstString = null;
    numberString = null;
    document.getElementById("input").value = numberString;
}
function calEqual() {
    switch(equal) {
        case 1:
            if(numberString == null) numberString = firstString;
            else numberString = parseFloat(numberString) + parseFloat(firstString);
            break;
        case 2:
            if(numberString == null) numberString = firstString;
            else numberString = parseFloat(numberString) / parseFloat(firstString);
            break;
        case 3:
            if(numberString == null) numberString = firstString;
            else numberString = parseFloat(numberString) - parseFloat(firstString);
            break;
        case 4:
            if(numberString == null) numberString = firstString;
            else numberString = parseFloat(numberString) * parseFloat(firstString);
            break;
    }
    document.getElementById("input").value = numberString;
}
document.getElementById("version").innerHTML = "V1.1 || " + date.getFullYear();

document.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        calEqual();
    }
});

document.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 67) {
        calCle();
    }
});

document.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 107) {
        calThan(1);
    }
});

document.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 111) {
        calThan(2);
    }
});

document.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 109) {
        calThan(3);
    }
});

document.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 106) {
        calThan(4);
    }
});

// 1-9 button

document.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 97) {
        calNumber('1');
    }
});

document.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 98) {
        calNumber('2');
    }
});

document.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 99) {
        calNumber('3');
    }
});

document.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 100) {
        calNumber('4');
    }
});

document.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 101) {
        calNumber('5');
    }
});

document.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 102) {
        calNumber('6');
    }
});

document.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 103) {
        calNumber('7');
    }
});

document.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 104) {
        calNumber('8');
    }
});

document.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 105) {
        calNumber('9');
    }
});

document.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 96) {
        calNumber('0');
    }
});

document.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 110) {
        calNumber('.');
    }
});

document.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 8) {
        calDel();
    }
});