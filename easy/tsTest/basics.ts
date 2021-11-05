let interface1 = {

}

// One of TypeScript’s core principles is that type checking focuses on the shape that values have. This is sometimes called “duck typing” or “structural subtyping”. In TypeScript, interfaces fill the role of naming these types, and are a powerful way of defining contracts within your code as well as contracts with code outside of your project.

// https://www.typescriptlang.org/docs/handbook/interfaces.html

function printLabels(labeledObj: {labelOne: string, labelTwo: string}) {
    console.log(labeledObj.labelOne, labeledObj.labelTwo);
}

let testOne = {size: 10, label: "zapier", labelOne: "aaaa", labelTwo: "bbbb"}
printLabels(testOne)
let testTwo = {size: 300, labelOne: "foo", labelTwo: "bar"}
printLabels(testTwo);

interface Food {
    label: string;
}

interface Employee {
    hourly: number;
    role: string;
    label: string;
    rank: number;
    current: boolean;
    location: string;
}

interface Animal {
    hasLegs: boolean;
    hasEyes: true;
    hasMouth: true;
    isMultiCellular: true;
    hasDecoration: true;
    numberOfLegs: number;


}