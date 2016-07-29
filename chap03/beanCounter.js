var counter = function count(stringToCheck, charVal) {
    var strLen = stringToCheck.length;
    var total = 0;
    for (i = 0; i < strLen; i++) {
        if (stringToCheck[i] == charVal) {
            total++;
        }
    }
    return total;
}

var countBs = function countWithB(StringToCheck) {
    return counter(StringToCheck, "B");
}


var countAs = function countWithA(StringToCheck) {
    return counter(StringToCheck, "a");
}

console.log(countBs("Bertie Bananas"));
console.log(countAs("Bertie Bananas"));