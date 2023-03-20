/*
3. Write a typescript program which contains one function named as DisplayFactors. That function should accept one number and display factors of that number.
 Input : 20
 Output: 1 2 4 5 10

 */
function DisplayFactors(Num) {
    var Fact = 0;
    for (Fact = 1; Fact <= Num / 2; Fact++) {
        if (Num % Fact == 0) {
            console.log(Fact);
        }
    }
}
var N = 20;
DisplayFactors(N);
