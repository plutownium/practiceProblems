let message: string = 'Hello World';
console.log(message);

let message2: string = "foo";
let message3: string = "bar";

console.log(message2+message3);

// https://code.visualstudio.com/docs/typescript/typescript-compiling

function drive(car: string, distance: number) {
    if (car === "ferrari") {
        return distance * 3;
    } else if (car === "taxi") {
        return distance;
    } else {
        console.log("unknown entity", car)
        return distance * 2;
    }
}

function mustReturnInt(): number {
    let numbers = [5, 3, 1, 500, 6006];
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function returnString(maxLength): string {
    let chars: string = "abcdefgHIJKLMNOP";
    let returnVal: string = "";
    for (let i = 0; i < maxLength; i++) {
        returnVal = returnVal + chars[Math.floor(Math.random() * chars.length)]
    }
    return returnVal;
}

function filterSelection(selection: string[], nameTarget: string, tagTarget?: string) {
    let passableNames = [];
    if (tagTarget !== undefined) {
        // is either target present in selection? if so, filter em out
        for (let i = 0; i < selection.length; i++) {
            let select: string = selection[i]
            if (select.includes(tagTarget), select.includes(nameTarget)) {
                passableNames.push(select);
            }
        }
    } else {
        // remove ony by nameTarget
        for (let i = 0; i < selection.length; i++) {
            let select: string = selection[i]
            if (typeof select === "string") {
                console.log(select, 51)
                if (select.includes(nameTarget)) {
                    passableNames.push(selection[i]);
                }
            }
            
        }
    }   
    console.log(passableNames);
    return passableNames;
}
