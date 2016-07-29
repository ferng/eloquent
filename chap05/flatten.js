var concatTest = function(array1, array2) {
    return array1.concat(array2);
}

console.log(concatTest([1,2],[3,4]));
console.log(concatTest([1,2],[2,4]));

var fernArray = [[1,2],[3,4],[5,6],[7,8,9]];

console.log(fernArray.reduce(function(array1, array2) {
    return array1.concat(array2);
}));

