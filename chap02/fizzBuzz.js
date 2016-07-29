for (i = 1; i <= 100; i++) {
    var output = "";
    if (i % 3 == 0) {
        output = "fizz";
    }
    if (i % 5 == 0) {
        output += "buzz";
    } else if (output.length == 0 ) {
        output = i;
    }
    console.log(output);
}