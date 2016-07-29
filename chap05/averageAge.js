var data = require("./data.js");

var ancestry = JSON.parse(data);

// console.log(ancestry.length);

var byName = [];
ancestry.forEach(function(person) {
    byName[person.name] = person;
});

console.log(byName["Maria van Brussel"]);

var daughter = byName["Maria van Brussel"];
var mother = byName[daughter.mother];

console.log(byName[daughter.mother]);
console.log ("Age difference: ", daughter.born - mother.born);


// console.log(ancestry.length);

console.log("-----------------");


var ages = [];
var daughter2;
var mother2;
ancestry.forEach(function(person) {
    daughter2 = byName[person.name];
    console.log("daughter", daughter2.name, "mother", daughter2.mother);
    mother2 = byName[daughter2.mother];
    console.log(typeof mother2); 
    if (typeof mother2 != "undefined" && daughter2.sex == "f") {
        console.log("daughterDob", daughter2.born, "mother", mother2.born);
        ages.push(daughter2.born - mother2.born);
    }
});

console.log(ages);

console.log("-----------------");


function average(array) {
    function plus(a, b) { return a + b; }
    console.log("jk", array.length);
    return array.reduce(plus) / array.length;  
}




console.log(average(ages));