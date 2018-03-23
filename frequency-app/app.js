// write your code here!


function getFrequency(str) {
    var sorted  = str.split("").sort();
    var data = [];
    for (var i=0; i<sorted.length;i++) {
        var last = data[data.length-1];
        if (last && last.character === last[i]) last ++;
        else data.push({character: sorted[i], count: 1});
    }
    return data;
}
