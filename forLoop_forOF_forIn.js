// let numbers = [1, 2, 3, 4, 5];

// //for in
// for(ele in numbers){
//     console.log(numbers[ele]);// here ele hocche idx number
// }
// //for of
// for(ele of numbers){
//     console.log(ele);//here ele is array number
// }
// //for loop
// console.log('\n');
// let i = 0;
// for(; ; ){//langta kore dilom
//     if(i<numbers.length)
//     {
//         console.log(numbers[i]);
//     }else break;
//     i++;
// }

const object = {
    name: 'mostafa',
    age: 12,
    nationality: 'bangladeshi'
};
for(info in object){
    console.log(info);
}