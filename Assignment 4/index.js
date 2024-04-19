//================1. Hello Variable================
var greeting = "Hello, World!";
//================2. Basic Math====================
var num1 = 4;
var num2 = 2;
var sum = num1 + num2;
var product = num1 * num2;
var difference = num1 - num2;
var quotient = num1 / num2;
//=================3. Swapping Values==============
var a = 2;
var b = 3;
console.log("\nBefore Swapping\n" + "a = " + a, "b = " + b);
// let temp = b;
// b = a;
// a = temp;
a = a + b;
b = a - b;
a = a - b;
console.log("After Swapping\n" + "a = " + a, "b = " + b);
//================4. Type Annotation (TypeScript)==============
/*let message : string = "Hello";
message = 8;
console.log(message)*/ ;
//index.ts:20:1 - error TS2322: Type 'number' is not assignable to type 'string'.
//=====================5. Modulus Operator===============
var modulus = num1 % num2;
//===================6. Increment Challenge================
var value = 0;
value++;
value = value + 1;
//====================7. Logical Gates==================
var a2 = true;
var b2 = false;
var c2 = true;
var AND = a2 && b2 && c2;
var OR = a2 || b2 || c2;
var NOT = !a2 || !b2 || !c2;
//====================8. Compound Assignment====================
var num = 10;
num += num;
num %= 10;
num *= num;
num -= num;
num /= 10;
//===================9. Even or Odd=========================
var isEven;
if (num % 2 == 0) {
    isEven = true;
}
else {
    isEven = false;
}
//===================10. Voting Eligibility========================
var age = 18;
if (age >= 18) {
    console.log("Eligible");
}
else {
    console.log("Not eligible");
}
//===================11. Grading System========================
var score = 88;
var grade;
if (score >= 90) {
    grade = "A";
}
else if (score >= 80) {
    grade = "B";
}
else if (score >= 70) {
    grade = "C";
}
else if (score >= 60) {
    grade = "D";
}
else {
    grade = "F";
}
//================12. Max of Three=============
var c = 4;
if (a > b && a > c) {
    console.log("a is greatest");
}
else if (b > a && b > c) {
    console.log("b is greatest");
}
else {
    console.log("c is greatest");
}
//================13. Leap year Checker=============
var year = 2024;
if (year % 4 == 0) {
    console.log("Leap year");
}
else {
    console.log("Not a leap year");
}
//================14. Fahrenheit to Celsius Converter============
var fahrenheit = 97;
console.log("Celsius: " + (fahrenheit - 30) / 2 + " C");
//================================15. Positive, Negative, or Zero============
var number = -5;
if (number > 0) {
    console.log("positive");
}
else if (num < 0) {
    console.log("negative");
}
else {
    console.log("Zero");
}
//================================16. Multiplication Table================
var multiplicationNumber = 9;
for (var i = 1; i <= 10; i++) {
    console.log(multiplicationNumber + " x " + i + " = " + (multiplicationNumber * i));
}
