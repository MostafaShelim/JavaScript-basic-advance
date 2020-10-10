var x = 4;
var y = 5;
var z = x * y;
const biodata = {
    name: 'ms dhoni',
    prof: 'cricketer',
    age: '40',
    nationality: "indian",
    x,//key and value ek rokom variable hole eta kora jay
    y,
    z
};
//nicher sobai array return kore
const keys = Object.keys(biodata);
console.log(keys);

const values = Object.values(biodata);
console.log(values);

const entries = Object.entries(biodata);
console.log(entries);

