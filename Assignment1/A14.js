/*
Write a typescript program which contains one function named as ChkPrime. That function should accept one number and it should return true if the given number is prime and otherwise return false.
Input: 11
Output: It is prime number

  */
function ChkPrime(num) {
    var i = 0;
    var Cnt = 0;
    for (Cnt = 2; Cnt <= num / 2; Cnt++) {
        if (num % Cnt == 0) {
            i++;
        }
    }
    if (i == 0) {
        console.log("It is Prime No.");
    }
    else {
        console.log("It is not Prime No.");
    }
}
var N = 15;
ChkPrime(N);
