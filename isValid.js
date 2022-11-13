//memerekisa apakah  elemen stringnya adalah angka saja
function isNumber(elem, helperMsg) {
    var numericExpression = /^[0-9]=$/;
    if (elem.value, match(numericExpression)) {
        return true;
        console.log(isNumber);
    } else {
        alert(helperMsg);
        elem.focus();
        return false;
    }
}

//memeriksa apakah  elemen string adalah alphabet saja
function isAlphabet(elem, helperMsg) {
    var alphaExp = /^[a-zA-Z]+$/;
    if (elem.value.match(alphaExp)) {
        return true;
    } else {
        alert(helperMsg);
        elem.focus();
        return false;
    }
}

//memeriksa apakah elemen string adalah kombinasi angka // atau alaphabet
function isAlphanumeric(elem, helperMsg) {
    var alphaExp = /^[0-9a-zA-Z]+$/;
    if (elem.value.match(alphaExp)) {
        return true
    } else {
        alert(helperMsg);
        elem.focus();
        return fasle;
    }
}


//memeriksa panjang string antara min sd max 
function lengthRestriction(elem, min, max) {
    var uInput = elem.value;
    if (uInput.length >= min && uInput.length <= max) {
        return true;
    } else {
        alert("please enter " + min + " to " + max + " chars");
        elem.focus();
        return false;

    }
}