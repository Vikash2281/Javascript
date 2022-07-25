
    
/*let r, noMatch, no, temp = 0;  
no = 121;
noMatch = no;  
    while (no > 0)  
    {  
        r = no % 10;  
        no = parseInt( no / 10);  
        temp = temp*10 + r;  
    }  
    if (temp == noMatch)  
    {  
        console.log("It is a Palindrome Number");  
    }  
    else  
    {  
        console.log("it is not a Palindrome Number");  
    }
    
    

   ////////////// // prime no///////////////////////////////////////////////////


let number = 11;
let isPrime = true;

if (number == 1) 
{
    console.log("1 is prime as well as not prime no");
}

else  {

    for (let i = 2; i < number; i++) 
    {
        if (number % i == 0) 
        {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}


/////////////////////Cal///////////////////////////////////////////////////////



// program for a simple calculator


let no1 = parseFloat(prompt('Enter first number: '));
let no2 = parseFloat(prompt('Enter second number: '));
let op = prompt('What do you want to do(+, -, * or / ) ');

let result;

// using if...else if... else
if (op == '+') {
    result = no1 + no2;
}
else if (op == '-') {
    result = no1 - no2;
}
else if (op == '*') {
    result = no1 * no2;
}
else {
    result = no1 / no2;
}

prompt(result);


/////////////////////Table///////////////////////////////////

let no = parseInt(prompt('Enter number: '));

let i=1;
let string=" ";

while(i<=10)
{
    string=toString(no*i);
    string=" ";
   // console.log(string)
    i++;    
}
console.log(string);


/////////////////////ARMS/////////////////////////////


let number = 153;
let len =number.toString().length
let sum = 0;
let rem;


let temp = number;

while (temp > 0) {

    rem= parseInt(temp % 10);
    sum += Math.pow(rem,len);
    temp = parseInt(temp / 10); 
}

if (sum == number) {
    console.log(`${number} is an Armstrong number`);
}
else {
    console.log(`${number} is not an Armstrong number.`);
}

console.log(len);*/


// program to reverse a string


    const string = prompt('Enter a string: ');
    let newString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    }
    

console.log(newString);
































