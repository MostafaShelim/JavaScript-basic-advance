// var name = function(name){
//     console.log(name);
// };
// name("mostafa");

//Fat Arrow Function
// let name = (name) =>{
//     console.log(name);
// };
// name("mostafa");

// //summing two numbers

// let sum = (a, b) => a + b;
// console.log(sum(10, 29));

// //Fat Arrow function keep actual this

// let example = {
//     name: "javaScript",
//     libraries: ['react', 'angular', 'vue'],
//     printLibraries: function(){
//         var self = this;//it is not good practice
//         this.libraries.forEach(function(a){
//             console.log(`${self.name} loves ${a}`);
//         });
//     },
// };

// example.printLibraries();


// let example = {
//     name: "javaScript",
//     libraries: ['react', 'angular', 'vue'],
//     printLibraries: function(){
//         this.libraries.forEach((a) =>console.log(`${this.name} loves ${a}`));
//     },
// };
// example.printLibraries();

const searchInput = document.querySelector(".input");
const result = document.querySelector(".result");
const thanks = document.querySelector(".thanks");

function show(){
    result.innerHTML = searchInput.value;
    var self = this;//eta diye kaj korate hbe
    setTimeout(function(){//normal funciton kaaj korbe arro function not
        thanks.innerHTML = `You have typed ${self.value}`;
    }, 1000);
}

searchInput.addEventListener("keyup", show)