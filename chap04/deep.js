function getNode() {
    return { value : null, rest : null};
}

var getKeys = function(obj){
   var keys = [];
   for(var key in obj){
      keys.push(key);
   }
   return keys;
}

var deepEqual = function (obj1, obj2) {
    console.log("e", obj1, obj2);
    
    if (obj1 == null && obj2 == null) {
        console.log("a", obj1, obj2);
        return true;
    }
        
    if (obj1 === obj2) {
        console.log("b", obj1, obj2);
                return true;
    }
    
    if (typeof obj1 == "object" && obj1 == null) {
        console.log("c", obj1, obj2);
        return false;
    }

    if (typeof obj2 == "object" && obj2 == null) {
        console.log("d", obj1, obj2);
        return false;
    }


    if (typeof obj1 == "object" && typeof obj2 == "object") {
        console.log("g", obj1, obj2);
        for (var key in obj1) {
            
            if (typeof obj1[key] == "object") {
                console.log("h", obj1, obj2, obj1[key], obj2[key])
                if (!deepEqual(obj1[key], obj2[key])) {
                    return false
                }
            } else {
                if (obj1[key] != obj2[key]) {
                    return false;
                }
            }
            console.log(typeof key, key, obj1[key]);
        }
        return true;

        // console.log(obj.value);
        // var keys = getKeys(obj1);
        // console.log(keys);
        // // for(var key in obj1) {
        // //     return deepEqual(obj1[key], obj2[key]);
        // // }
    }
}

var a1 = getNode();
a1.value = 22;
a1.rest = "blah";

var a2 = getNode();
a2.value = 22;
a2.rest = "blah";

// console.log(deepEqual(null, null));
// console.log(deepEqual(a1, a1));
// console.log(deepEqual(null, a2));
// console.log(deepEqual(a1, null));
// console.log(deepEqual(a1, a2));

var a3 = getNode();
a3.value = 22;
a3.rest = a1;

var a4 = getNode();
a4.value = 22;
a4.rest = a2;

console.log(deepEqual(a3, a4));
