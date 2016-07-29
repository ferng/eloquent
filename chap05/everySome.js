var everyTrue = [1,2,3,4,5,7,8,9,10,6];
var everyFalse = [1,2,3,4,5,7,8,10,11,6];

var someFalse = [1,2,3,4,5,7,8,9,10,6];
var someTrue = [1,2,3,4,5,7,8,10,11,6];

function every(array) {
    var result = true;
    var value;
    for (i=0; i < array.length; i++) {
        value = array[i];
        console.log(value, "-", value > 10 );
        if (value > 10) {
            return false;
        }
    }
    return true;
}

console.log(every(everyTrue));
console.log(every(everyFalse));

function some(array) {
    return ! every(array);
}

console.log(some(someFalse));
console.log(some(someTrue));