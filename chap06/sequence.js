function Sequence(collection) {
    this.collection = collection;
    this.cur = 0;
    this.size = collection.length;
}

Sequence.prototype.hasNext = function() {
    return this.cur < this.size;
}

Sequence.prototype.next = function() {
    return this.collection[this.cur++];
}

var text = "hello\nthere\nhow\nare\nyou\ntoday\nthen".split("\n");
console.log(text);

var logall = function(seq) {
    while(seq.hasNext()) {
        console.log(seq.next());
    }
}

var seq = new Sequence(text);
logall(seq);

var logfive = function(seq) {
    for (i = 0; i < 5; i ++) {
        if (seq.hasNext()) {
            console.log(seq.next());
        }
    }
}

var seq2 = new Sequence(text);
logfive(seq2);


function TypeRangeSeq(start, end) {
    this.start = start;
    this.end = end;
    var range = [];
    for (i = this.start; i <= this.end; i++) {
        range.push(i);
    }
    Sequence.call(this, range);
}

TypeRangeSeq.prototype = Object.create(Sequence.prototype);

var rangeSeq = new TypeRangeSeq(3,7);
logall(rangeSeq);