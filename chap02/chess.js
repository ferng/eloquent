var size = 21
for (var i=0; i<size; i++) {
    var currentWhite = i % 2 == 0;
    var line = ""
    for (var j=0; j<size; j++) {
        if (currentWhite ) {
            line += "-";
        } else {
            line += "#";
        }
        currentWhite = !currentWhite;
    }
    console.log(line);
}