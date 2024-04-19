//================1. Hello Variable================
let greeting: string = "Hello, World!";
//================2. Basic Math====================
let num1: number = 4;
let num2: number = 2;
let sum: number = num1 + num2;
let product: number = num1 * num2;
let difference: number = num1 - num2;
let quotient: number = num1 / num2;
//=================3. Swapping Values==============

 let a = 2;
 let b = 3;
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
console.log(message)*/;
//index.ts:20:1 - error TS2322: Type 'number' is not assignable to type 'string'.
//=====================5. Modulus Operator===============
let modulus: number = num1 % num2;
//===================6. Increment Challenge================
let value: number = 0;
value++;
value = value + 1;
//====================7. Logical Gates==================
let a2= true;
let b2 = false;
let c2 = true;
let AND: boolean = a2 && b2 && c2;
let OR : boolean = a2 || b2 || c2;
let NOT : boolean = !a2 || !b2 || !c2;
//====================8. Compound Assignment====================
let num: number = 10;
num += num;
num %= 10;
num *= num;
num -= num;
num /= 10;
//===================9. Even or Odd=========================
let isEven: boolean;
if (num % 2 == 0){
    isEven = true;
}
else{
    isEven = false;
}
//===================10. Voting Eligibility========================
let age = 18;
if(age>=18){
    console.log("Eligible");
}
else{
    console.log("Not eligible");
}
//===================11. Grading System========================
let score: number = 88;
let grade: string;
if(score >= 90){
    grade = "A";
}
else if(score >= 80){
    grade = "B";
}
else if(score >= 70){
    grade = "C";
}
else if (score >= 60){
    grade = "D";
}
else{
    grade = "F";
}
//================12. Max of Three=============
let c: number = 4;
if(a > b && a > c){
    console.log("a is greatest");
}
else if (b > a && b > c){
    console.log("b is greatest");
}
else{
    console.log("c is greatest");
}
//================13. Leap year Checker=============
let year: number = 2024;
if (year % 4 == 0){
    console.log("Leap year");
    
}
else{
    console.log("Not a leap year");
    
}
//================14. Fahrenheit to Celsius Converter============
let fahrenheit: number = 98.6;
console.log("Celsius: " + ((fahrenheit - 32) + (5/9)) + " C");
//================================15. Positive, Negative, or Zero============
let number: number = -5;
if(number > 0){
    console.log("positive");
    
}
else if (num < 0){
    console.log("negative");
    

}
else{
    console.log("Zero");
    
}

//================================16. Multiplication Table========================

let multiplicationNumber: number = 9;
for(let i =1; i <= 10; i++){
    console.log(multiplicationNumber + " x " + i + " = " + (multiplicationNumber*i));
    
}
