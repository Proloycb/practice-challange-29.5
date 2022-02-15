const myNumber = [23, 2, 1, 5, 6, 7, 3, 4, 13];
const sortedNumber = myNumber.sort();
// console.log(sortedNumber);
const sortedNumber2 = myNumber.sort(function(a, b){
    return a - b;
});
console.log(sortedNumber2);
