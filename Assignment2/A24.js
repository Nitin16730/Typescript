/*
4. Write a typescript program which contains one arrow function named as ChkArmstrong. That function accepts one numbers and check whether number is Armstrong number or not.

Input: 153

Output: It is Armstrong number
*/
function CheckArmstrong(No1) {
    var rem = 0;
    var temp = 0;
    var Sum = 0;
    temp = No1;
    while (temp > 0) {
        rem = Math.floor(temp % 10);
        Sum = Sum + (rem * rem * rem);
        temp = Math.floor(temp / 10);
    }
    if (Sum == No1) {
        console.log("It is the Armstrong Number");
    }
    else {
        console.log("It is Not Armstrong number");
    }
}
var No = 156;
CheckArmstrong(No);
