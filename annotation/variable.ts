const apple: number = 5;

const var1: null = null;
const var2: undefined = undefined;

const arr1: string[] = ['a1', 'a2'];

let arr2: boolean[] = [true, false];

class Car {
    constructor() {

    }
}
const audi: Car = new Car();

const myCor: { x: number; y: number } = {
    x: 50,
    y: 20
};

const addNumber: (a: number, b: number) => void = (a: number, b: number) => {
    console.log(a+b);
}

//when type inference doesn't works:

// 1. when many function doesn't explicity return variable with "any" type (ex: JSON.parse)
const jsonStr: string = '{"x": 12, "y": 15}';
const jsonPar: { x: number, y: number } = JSON.parse(jsonStr);

//2. when variable declaration/initialization happens at different lines of code
const arr3 = ['b1', 'b2', 'b3'];
let isFlag: boolean;

arr3.forEach(element => {
    if(element == 'b2') {
        isFlag = true;
    }
})

//3. variable whose type cant bbe refered
let isFlag2: boolean | number = false;
isFlag2 = 234;


let testVar:any;

testVar = 123;
testVar = 'sdsd';


