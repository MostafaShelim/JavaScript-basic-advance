var numbers = [1, 3, 4];
var a = numbers;// carbon copy of numbers but with reference

a = [...numbers];//new array but not reference
const object = {
    a: 1,
    b: 2,
};
const obj = {
    x: 1,
    y: 2,
};
console.log({...object, ...obj});