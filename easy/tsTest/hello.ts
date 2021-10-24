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

// function getFunctionBack(picker: number): function {
//     if (picker === 1) {
//         return () => {
//             console.log("dirt")
//         }
//     } else if (picker ===2) {
//         return () => {
//             console.log("grass");
//         }
//     } else if (picker===3) {
//         return () => {
//             console.log("air")
//         }
//     } else {
//         throw "oops";
//     }
// }