var message = 'Hello World';
console.log(message);
var message2 = "foo";
var message3 = "bar";
console.log(message2 + message3);
// https://code.visualstudio.com/docs/typescript/typescript-compiling
function drive(car, distance) {
    if (car === "ferrari") {
        return distance * 3;
    }
    else if (car === "taxi") {
        return distance;
    }
    else {
        console.log("unknown entity", car);
        return distance * 2;
    }
}
function mustReturnInt() {
    var numbers = [5, 3, 1, 500, 6006];
    return numbers[Math.floor(Math.random() * numbers.length)];
}
function returnString(maxLength) {
    var chars = "abcdefgHIJKLMNOP";
    var returnVal = "";
    for (var i = 0; i < maxLength; i++) {
        returnVal = returnVal + chars[Math.floor(Math.random() * chars.length)];
    }
    return returnVal;
}
function filterSelection(selection, nameTarget, tagTarget) {
    var passableNames = [];
    if (tagTarget !== undefined) {
        // is either target present in selection? if so, filter em out
        for (var i = 0; i < selection.length; i++) {
            var select = selection[i];
            if (select.includes(tagTarget), select.includes(nameTarget)) {
                passableNames.push(select);
            }
        }
    }
    else {
        // remove ony by nameTarget
        for (var i = 0; i < selection.length; i++) {
            var select = selection[i];
            if (typeof select === "string") {
                console.log(select, 51);
                if (select.includes(nameTarget)) {
                    passableNames.push(selection[i]);
                }
            }
        }
    }
    console.log(passableNames);
    return passableNames;
}
filterSelection(["aaaaa", "bbbb", "aaabbb", "aaacccc", "aaaDDDD", "aaa33333"], "aaa");
console.log(mustReturnInt(), mustReturnInt(), mustReturnInt(), mustReturnInt());
console.log(drive("ferrari", 5), drive("ferrari", 6), drive("ferrari", 7), drive("taxi", 2), drive("taxi", 3));
