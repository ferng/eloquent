util = require('util');

function getNode() {
    return { value : null, rest : null};
}

var arrayToList = function(array) {
    var head = getNode();
    var node = head;
    for (i = 0; ; i++) {
        node.value = array[i];
        if (i == array.length -1) {
            break;
        }
        nextNode = getNode();
        node.rest = nextNode;
        node = nextNode;
    }
    
    return head; 
}

var listToArray = function(list) {
    var node = list;
    var array = [];

    for (i = 0; ; i++) {
        array[i] = node.value
        node.value = array[i];
        if (node.rest == null) {
            break;
        }
        node = node.rest;
    }    
    
    return array;    
}

var prepend = function(list, item) {
    var array = listToArray(list);
    var newArray = [];
    newArray[0] = item;
    for (i = 0; i < array.length; i++) {
        newArray[i+1] = array[i];
    }
    return arrayToList(newArray);
}

var nth = function (list, pos, curPos) {
    console.log("f", list, pos, curPos);
    curPos = (typeof curPos !== 'undefined' && typeof curPos !== 'Nan') ? curPos : 0;
    if (pos == curPos) {
        return list.value;
    } else {
        return nth(list.rest, pos, curPos+1);
    }
}

var fernArray = [1,2,3,4,5,6,7,8,9];
console.log("myList-------------------");
var myList = arrayToList(fernArray);
console.log(util.inspect(myList, true, 12));
console.log("listToArray-------------------");
console.log(listToArray(myList));
console.log("onionList-------------------");
var omelette = prepend(prepend(myList, "onion"), "potatoes");
console.log(util.inspect(omelette, true, 12));
console.log("nth-------------------");
console.log(util.inspect(omelette, true, 12));
var nthList = nth(omelette, 1);
console.log("-------------------");
console.log(util.inspect(nthList, true, 12));
