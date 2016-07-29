var data = require("./data.js");

var ancestry = JSON.parse(data);

function groupKeyCentury(record) {
    return "c" + Math.ceil(record.born / 100);
}


function groupBy(groupFunction, flatArray) {
    var arrayMap = [];
    var key;
    flatArray.forEach(function(record) {
        key = groupFunction(record);
        console.log("key:", key, "-", typeof arrayMap[key]);
        
        if (typeof arrayMap[key] == "undefined") {
            var innerArray = [];
            arrayMap[key] = innerArray;
        }
        
        
    });
    
    return arrayMap;
}

console.log("-----------------");
console.log("fern", groupBy(groupKeyCentury, ancestry));
console.log("-----------------");



var centuries = groupBy(groupKeyCentury, ancestry);
ancestry.forEach(function(person) {
    century = groupKeyCentury(person);
    age = person.died - person.born;
    console.log(century, age);
    
    centuryArray = centuries[century];
    centuryArray.push(age);
    centuries[century] = centuryArray;
});

console.log(centuries);

console.log(centuries.length);

var keys = Object.keys(centuries);
keys.forEach(function(key) {
    var totalAge = 0;
    century = centuries[key];
    century.forEach(function(age) {
        totalAge += age;
    });
    console.log(key, totalAge / century.length);
});