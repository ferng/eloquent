function Vector(x, y) {
    this.x = x;
    this.y = y;
}

Vector.prototype.plus = function(other) {
    var inner = new Vector(this.x + other.x, this.y + other.y);
    return inner;
}

Vector.prototype.minus = function(other) {
    var inner = new Vector(this.x - other.x, this.y - other.y);
    return inner;
}

Vector.prototype.length = function() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
}


var vec1 = new Vector(20, 30);
var vec2 = new Vector(5, 5);

var added = vec1.plus(vec2);

console.log(added);

var subd = vec1.minus(vec2);

console.log(subd);

var vec3 = new Vector(4, 3);
console.log(vec3.length());
