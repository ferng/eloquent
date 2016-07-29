var isEven = function (value) {
    console.log("a", value);
    value = Math.abs(value);
    console.log("e", value);
    function even(value) {
        console.log("b", value);
        if (value == 0) {
            console.log("c", value);
            return "even";
        } else if (value ==1) {
            console.log("d", value);
            return "odd";
        } else {
            return even(value -2);
        }
    }
    return even(value);
}

console.log (isEven(-1));