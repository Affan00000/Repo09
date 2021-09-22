function switchCase(letter) {
    //Write code below this line
    var animals = "antelope"; "bird"; "cat";
    switch (letter) {
        case "a":
            var animals = "antelope";
            break;
        case "b":
            var animals = "bird";
            break;
        case "c":
            var animals = "cat";
            break;
        default:
            var animals = "stuff";
            break;
    }


    //Write code abowe this line
    return animals;
}
switchCase("a");
switchCase("b");
switchCase("c");
switchCase("d");
switchCase(4);
console.log(switchCase("a"));
console.log(switchCase("b"));
console.log(switchCase("c"));
console.log(switchCase("d"));
console.log(switchCase(4));
module.exports = switchCase;