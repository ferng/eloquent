var reverseArray = function(array) {
    console.log("a", array, array.length);
    var myArray = [];
    for (i = array.length -1, j=0; i >= 0; i--, j++) {
        console.log("b", array[i]);
        myArray[j] = array[i];
    }
    console.log("c", myArray);
    return myArray;
}

var reverseArrayInPlace = function(array) {
    console.log("a2", array, array.length);
    var myArray = reverseArray(array);
    console.log("b2", myArray);
    for (i = 0; i < array.length; i++) {
        array[i] = myArray[i];
    }
}


var fernArray = [1,2,3,4,5,6,7,8,9];

console.log(reverseArray(fernArray));
console.log(fernArray);
reverseArrayInPlace(fernArray);
console.log(fernArray);
