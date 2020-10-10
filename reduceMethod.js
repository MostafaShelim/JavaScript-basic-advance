var numbers = [1, 2, 3, 4];
var result = numbers.reduce((prevValue, currValue, currIdx, arr) => {
    return prevValue + currValue;//cumalative frequency
}, 0);
console.log(result);