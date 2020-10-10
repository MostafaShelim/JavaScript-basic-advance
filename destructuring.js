const object = {
    name: "mostafa",
    age: 33,
    edu: {
        degree: 'bsc',
    }
};

const {edu:{degree:deg}} = object;//or const {edu:{degree}} = object;
console.log(deg);

//array destructuring 
const numbers = [2, 3, 4, 5];
const [a, , b] = numbers;
console.log(a, b);
let n1 = 3,  n2 = 4;
[n1, n2] = [n2, n1];
console.log(n1, n2);