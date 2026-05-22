"use strict";
// Q-1 Name, Age and City decleration..
let Name = "Vibhuti";
let Age = "18";
let City = "Surat";
console.log(Name);
console.log(Age);
console.log(City);
console.log();
// Q-2 Addition, substraction, Multiplication, Diivsion..
let a = 10;
let b = 20;
console.log("Addition = ", a + b);
console.log("Substraction =", a - b);
console.log("Multiplication =", a * b);
console.log("Division =", a / b);
console.log();
// Q-4 Find square and cube.. 
let number = 4;
let square = number * number;
let cube = number * number * number;
console.log("Number:", number);
console.log("Square:", square);
console.log("Cube:", cube);
console.log();
// Q-5 Find the area of Rectangle.. 
let Length = 10;
let Width = 30;
console.log("Area of Rectangle = ", Length * Width);
console.log();
// Q-6 Showing different TypeScript data types.. 
let age = 18;
let userName = "Vibhuti";
let value = true;
console.log("Age:", age);
console.log("userName:", userName);
console.log("Value", value);
console.log();
// Q-7  declare one variable using any type and assign different values one by one..
let num;
num = 10;
console.log("Integer value:", num);
num = "Vibhuti";
console.log("String value:", num);
num = true;
console.log("Boolean value:", num);
num = 25.5;
console.log("Decimal value:", num);
console.log();
// Q-8 convert string.. 
let str = "250";
let Num = Number(str);
let result = num + 50;
console.log("Result:", result);
console.log();
// Q-9 convert number.. 
let N = 500;
let s = String(num);
console.log("String value:", str);
console.log("Type:", typeof str);
console.log();
// Q-10 numeric addition.. 
let str1 = "100";
let str2 = "200";
let num1 = Number(str1);
let num2 = Number(str2);
let sum = num1 + num2;
console.log("Sum =", sum);
console.log();
// Q-11  arithmetic operations.. 
let A = 50;
let B = 90;
console.log("Addition =", a + b);
console.log("Subtraction =", a - b);
console.log("Multiplication =", a * b);
console.log("Division =", a / b);
console.log("Modulus =", a % b);
console.log();
// Q-12  Swap two Numbers..
let x = 10;
let y = 20;
console.log("Before Swapping:");
console.log("x =", x);
console.log("y =", y);
let temp = x;
x = b;
y = temp;
console.log("After Swapping:");
console.log("x =", x);
console.log("y =", y);
console.log();
// Q-13 swap two numbers without using third variable.. 
let X = 10;
let Y = 20;
console.log("Before Swapping:");
console.log("X =", X);
console.log("Y =", Y);
X = X + Y;
Y = X - Y;
X = X - Y;
console.log("After Swapping:");
console.log("X =", X);
console.log("Y =", y);
console.log();
// Q-14 check student grade based on marks.. 
let marks = 75;
if (marks >= 80) {
    console.log("Grade = A");
}
else if (marks >= 60) {
    console.log("Grade = B");
}
else {
    console.log("Grade = C");
}
console.log();
// Q-15 calculate electricity bill.. 
let units = 120;
let bill;
if (units <= 100) {
    bill = units * 5;
}
else {
    bill = units * 8;
}
console.log("Electricity Bill = ₹" + bill);
console.log();
// Q-16 calculate employee total salary.. 
let basicSalary = 20000;
let hra = basicSalary * 0.10;
let da = basicSalary * 0.05;
let totalSalary = basicSalary + hra + da;
console.log("Basic Salary =", basicSalary);
console.log("HRA =", hra);
console.log("DA =", da);
console.log("Total Salary =", totalSalary);
console.log();
// Q-17 Checking Eligibility for Voting.. 
let AGE = 20;
if (AGE >= 18) {
    console.log("Person is eligible for voting.");
}
else {
    console.log("Person is not eligible for voting.");
}
console.log();
// Q-18  calculate discount.. 
let purchase = 6000;
let discount;
if (purchase > 5000) {
    discount = purchase * 0.15;
}
else {
    discount = purchase * 0.05;
}
let finalAmount = purchase - discount;
console.log("Purchase Amount = ₹" + purchase);
console.log("Discount = ₹" + discount);
console.log("Final Amount = ₹" + finalAmount);
console.log();
// Q-19  convert Celsius into Fahrenheit.. 
let celsius = 25;
let fahrenheit = (celsius * 9 / 5) + 32;
console.log("Temperature in Fahrenheit =", fahrenheit);
console.log();
// Q-20  convert minutes into hours and minutes.. 
let totalMinutes = 130;
let hours = Math.floor(totalMinutes / 60);
let minutes = totalMinutes % 60;
console.log("Hours:", hours);
console.log("Minutes:", minutes);
