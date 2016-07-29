var range = function(start, end, step) {
    step = typeof step !== 'undefined' ? step : 1;
    var arr = [];
    var steps = ((end - start) / step);
    
    for (i = 0, val = start; i <= steps; i++, val+=step) {
        // console.log(i, "-", j, "-", step);
        arr[i] = val;
    }
    return arr;
}

var sum = function(start, end) {
    var arr = range(start, end);
    var total = 0;
    for (i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

console.log(range(1, 10));
console.log(sum(1, 10));
console.log(range(1, 10, 2));
console.log(range(5, 2, -1));