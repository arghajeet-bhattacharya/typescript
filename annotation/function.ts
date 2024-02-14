const addNum = (a: number, b: number): number => {
    return (a+b);
}

function addNum2(a: number, b:number): number {
    return (a+b);
}

const addNum3 = function(a: number, b: number) {
    return (a+b)
}

const f1 = (a1: string): void => {
    console.log(a1);
    return undefined
}

const f2 = (a2: number): never | void => {
    if(!a2) {
        throw new Error();
    }
    console.log(a2);
}

const f3 = (a2: number): never => {
    throw new Error();
}

const myJson: {date: Date, a: string} = {
    date: new Date(),
    a: 'sunny'
}

const f4 = ({ date, a }: {date: Date, a: string}) => {
    console.log(date);
    console.log(a);
};

f4(myJson);
