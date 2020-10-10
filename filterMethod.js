var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var result = nums.filter((currentValue, idx, arr) => {
    console.log(idx);
    console.log(arr);
    return currentValue > 4;// true condition hole oi purata array return korbe
});
console.log(result);// akta array show korbe