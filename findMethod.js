var nums = [1, 2, 3, 4];
var result = nums.find(function(number){//find method return true or false but in result variable it assign the true variable value
    return number>2; //result = 3;
})
console.log(result);

var nums = [1, 2, 3, 4];
var result = nums.find((number) => number>2);// find method can take value, index, whole array as parameters
console.log(result);

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    };
    eat(){
        console.log("eating");
    };
    exampleFunc(){
        let arr = [1, 2, 3];
        arr.find((element) => {
             this.eat();
        });
    };
};
const test = new Person("mostafa", 13);
test.exampleFunc();