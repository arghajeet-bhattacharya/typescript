/**
 * generic: generics, that is, being able to create a component that can work over a 
 * variety of types rather than a single one.
We’ve now added a type variable Type to the identity function. 
This Type allows us to capture the type the user provides (e.g. number), 
so that we can use that information later. Here, we use Type again as the return type
 */

function returnArray<Type>(element: Type[]): Type[] {
    return new Array().concat(element);
}

let numArray = returnArray([1, 2, 3, 4]);
let strArray = returnArray(['d', 'a', 'r', 'k']);

numArray.push(5);
// strArray.push(6);
// numArray.push('x');
strArray.push('y');

console.log('numArray: ', numArray);
console.log('strArray: ', strArray);

