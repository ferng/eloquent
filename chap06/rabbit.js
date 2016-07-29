function speak(line) {
    console.log("The", this.type, "rabbit says '" + line + "'" );
}


var protoRabbit = {
    speak: function(line) {
    console.log("The", this.type, "rabbit says '" + line + "'" );
    }
}

var whiteRabbit = {type: "white", speak: speak};
var redRabbit = {type: "red", speak: speak};

whiteRabbit.speak("Hello there");
redRabbit.speak("Oh no!!");

speak.apply(redRabbit, ["Burp"]);

speak.call({type: "old"}, "Oh my!");

console.log(Object.getPrototypeOf([]) == Array.prototype);

var killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("zoiks");



function Rabbit(type) {
    this.type = type;
}

Rabbit.prototype.speak = function(line) {
    console.log("The", this.type, "rabbit says '" + line + "'" );
}

Rabbit.prototype.teeth = "small";


var funnyRabbit = new Rabbit("funny");
var blackRabbit = new Rabbit("black");

blackRabbit.teeth = "yellow";
console.log(funnyRabbit.type, funnyRabbit.prototype, "-", Rabbit.prototype);
blackRabbit.speak("Boom");
console.log(blackRabbit.teeth, funnyRabbit.teeth, Rabbit.prototype.teeth);
