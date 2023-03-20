/*
2. Write a typescript program which contains one function named as Summation.
 That function accepts array of numbers and returns the summation of each number from array.
 
 Input: 23 6 7 4 5 7

Output: Addition is 52

*/
function Addition(Brr) {
    var cnt = 0;
    var sum = 0;
    for (cnt = 0; cnt <= 5; cnt++) {
        sum = sum + Brr[cnt];
    }
    return sum;
}
var Arr = [23, 6, 7, 4, 5, 7];
var Ret = 0;
Ret = Addition(Arr);
console.log("Addition is " + Ret);
