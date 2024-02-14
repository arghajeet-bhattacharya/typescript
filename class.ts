class Spartan {
    constructor(public engine: string) {
    }
    protected drive(): void {
        console.log('this is sparta');
    }
}   

// class Athen extends Spartan {
//     drive(): void {
//         console.log('this is athens');
//     }
// }

const var1 = new Spartan('V9');

console.log(var1.engine);
