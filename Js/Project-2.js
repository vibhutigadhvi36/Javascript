// Project-2  - - - - 20 programs!! - - - - -

// Q-1 Print numbers.. 

for (let i = 1; i <= 10; i++) {
    console.log(i);
}
console.log();

// Q-2 Print revers numbers.. 

for (let i = 10; i >= 1; i--) {
    console.log(i);
}
console.log();

// Q-3 Print Even numbers..

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
console.log();

// Q-4 Print Odd numbers..

for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
console.log();

// Q-5 Print your name..

for (let i = 1; i <= 10; i++) {
    console.log("Vibhuti");
}
console.log();

// Q-6 Print a century!

for (let i = 1; i <= 100; i++) {
    console.log(i);
}
console.log();

// Q-7 Print all numbers divisible by 5 between 1 and 50.. 

for (let i = 1; i <= 50; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}
console.log();

// Q-8 Print all numbers divisible by 3 and 5 between 1 and 100..

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }
}
console.log();

// Q-9 Sum from 1 to 10
{
    let sum = 0;

    for (let i = 1; i <= 10; i++) {
        sum += i;
    }

    console.log(sum);
}

// Q-10 Sum of even numbers
{
    let sum = 0;

    for (let i = 1; i <= 50; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }

    console.log(sum);
}

// Q-11 sum of all odd numbers..
{
    let sum = 0;

    for (let i = 1; i <= 50; i++) {
        if (i % 2 !== 0) {
            sum += i;
        }
    }

    console.log("Sum =", sum);
}
console.log();

// Q-12 Multiplication Table
{
    let num = 5;

    for (let i = 1; i <= 10; i++) {
        console.log(num + " x " + i + " = " + (num * i));
    }
}
console.log();

// Q-13 Generate multiplication tables from 1 to 10..

for (let i = 1; i <= 10; i++) {
    console.log("Table of " + i);

    for (let j = 1; j <= 10; j++) {
        console.log(i + " x " + j + " = " + (i * j));
    }

    console.log("------------");
    console.log();
}
console.log();

// Q-14 Factorial
{
    let num = 5;
    let factorial = 1;

    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }

    console.log("Factorial =", factorial);
}
console.log();

// Q-15 Count the total digits..
{
    let num = 12345;
    let count = 0;

    while (num > 0) {
        count++;
        num = Math.floor(num / 10);
    }

    console.log("Total digits =", count);
}
console.log();

// Q-16 Reverse a given number..
{
    let num = 12345;
    let reverse = 0;

    while (num > 0) {
        let digit = num % 10;
        reverse = reverse * 10 + digit;
        num = Math.floor(num / 10);
    }

    console.log(reverse);
}
console.log();

// Q-17 largest digit..
{
    let num = 58392;
    let largest = 0;

    while (num > 0) {
        let digit = num % 10;

        if (digit > largest) {
            largest = digit;
        }

        num = Math.floor(num / 10);
    }

    console.log("Largest digit =", largest);
}
console.log();

// Q-18 smallest digit..
{
    let num = 58392;
    let smallest = 9;

    while (num > 0) {
        let digit = num % 10;

        if (digit < smallest) {
            smallest = digit;
        }

        num = Math.floor(num / 10);
    }

    console.log("Smallest digit =", smallest);
}
console.log();

// Q-19 palindrome..
{
    let num = 121;
    let original = num;
    let reverse = 0;

    while (num > 0) {
        let digit = num % 10;
        reverse = reverse * 10 + digit;
        num = Math.floor(num / 10);
    }

    if (original === reverse) {
        console.log("Palindrome Number");
    } else {
        console.log("Not a Palindrome Number");
    }
}
console.log();

// Q-20 Armstrong number..
{
    let num = 153;
    let original = num;
    let sum = 0;

    while (num > 0) {
        let digit = num % 10;
        sum += digit ** 3;
        num = Math.floor(num / 10);
    }

    if (sum === original) {
        console.log("Armstrong Number");
    } else {
        console.log("Not an Armstrong Number");
    }
}


// - - - - The End Thankyou - - - -  