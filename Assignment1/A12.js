/*2. Write a typescript program which contains one function named as Area. That function should calculate area of circle. Accept value of radius from user and return its area. Default value of PI should be 3.14 if it is not provided by the caller.

        Input: 5

       Output: Area of circle is 78.5
*/
function Area(r) {
    var Pi = 3.14;
    var Area = 0;
    Area = Pi * r * r;
    return Area;
}
var Radius = 5;
var Ret = 0;
Ret = Area(Radius);
console.log("Area of Circle : " + Ret);
