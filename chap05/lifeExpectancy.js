var data = require("./data.js");

var ancestry = JSON.parse(data);

// console.log(ancestry.length);



var centuries = [];
ancestry.forEach(function(person) {
    century = Math.ceil(person.born / 100);
    age = person.died - person.born;
    console.log(century, age);
    
    centuryArray = centuries["c" + century];
    if (typeof centuryArray == "undefined") {
        centuryArray = [];
    }
    // console.log("1", centuryArray);
    centuryArray.push(age);
    // console.log("2", centuryArray);
    centuries["c" + century] = centuryArray;
    // console.log("3", centuries);
    
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