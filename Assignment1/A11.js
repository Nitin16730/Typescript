/*1. Write a typescript program which contains one function named as Maximum. That function accepts three parameters and it should returns largest value from three input parameters.

Input: 23 89 6

Output: Maximum number is 89

*/
function Maximum(x, y, z) {
    if ((x > y) && (x > z)) {
        console.log("Maximum No. is " + x);
    }
    else if ((y > x) && (y > z)) {
        console.log("Maximum Ni is : " + y);
    }
    else if ((z > x) && (z > y)) {
        console.log("Maximum No. is " + z);
    }
}
/*var A : number = 23
var B : number = 89
var C : number = 6
*/
Maximum(23, 89, 6);
