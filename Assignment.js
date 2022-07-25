// ///////////////////////////////////////////// factorial///////////////////////////

// let number = prompt("Enter a Number ");
// let count=1;
// let Fact = (number) => {

//   if(number=="")
//   {
//     alert("you have not given any input");
//     return;
//   }
//   else if(+number<0)
//   {
//     alert("plese enter no greater then 0");
//     return;
//   }
//   else if(+number==1 || +number==0)
//   {
//     console.log(1);
//     return;
//   }
//   else if(!Number.isInteger(+number))
//   {
//     alert("Enter a proper integer");
//     return;
//   }
//   else if(isFinite(number))
//   {

//     for (let i = 1; i <= number; i++)
//     count *= i;
//   }
//   // else
//   // {
//   //   alert("please enter a valid no")
//   //   return;

//   // }
//   console.log(`The factorial of ${number} is ${count}.`);

// };

//  Fact(number);

// //////////////////////////////////////////Fibonacci/////////////////////////////////

// let number = prompt("Enter a Number ");

// function Fibonacci(number)
// {
//   if(number=="")
//   {
//     alert("you have not given any input");
//     return;
//   }
//   else if(+number<=0)
//   {
//     alert("plese enter no greater then 0");
//     return;
//   }
//   else if(!Number.isInteger(+number))
//   {
//     alert("Enter a proper integer");
//     return;
//   }
//   else if(isFinite(number))
//   {
//     let n1 = 0,  n2 = 1, nextNumber;
//     if(number==1)
//     {
//       console.log(0);
//       return;
//     }

//     console.log(n1+ ",");
//     console.log(n2+ ",")

//   nextNumber = n1 + n2;

//   while (nextNumber <= number-2) {
//     console.log( nextNumber+ ",");

//     n1 = n2;
//     n2 = nextNumber;
//     nextNumber = n1 + n2;
//   }
//   return;

//   }
//   else
//   {
//     alert("please enter a valid no")
//     return;

//   }
// };

// Fibonacci(number);

// ////////////// // prime no///////////////////////////////////////////////////

// let number = prompt("Enter a Number ");
// let isPrime = true;
// function Prime(number) {
//   if (+number == 1) {
//     alert("1 is prime as well as not prime no");
//     return;
//   }
//   else if (number == "") {
//     alert("you have not given any input");
//     return;
//   }
//   else if (+number <= 0) {
//     alert("plese enter no greater then 0");
//     return;
//   }
//   else if(!Number.isInteger(+number))
//   {
//     alert("Enter a proper integer");
//     return;
//   }
//   else if (isFinite(number)) {
//     for (let i = 2; i < number; i++) {
//       if (number % i == 0) {
//         isPrime = false;
//         break;
//       }

//     }
//   }
//   else
//     {
//       alert("please enter a valid no")
//       return;

//     }

//     if (isPrime) {
//       console.log(`${number} is a prime number`);
//     } else {
//       console.log(`${number} is a not prime number`);
//     }
//   }

// Prime(number);

// ///////////////////////////////////////// sum of two/////////////////////////////////

// let number1 = prompt("Enter a Number 1 ");
// let number2 = prompt("Enter a Number  2");

// function Sum(number1, number2) {
//   if(number1=="" || number2=="")
//   {
//     alert("you have not given any input");
//     return;
//   }

//   else if(isFinite(number1) ||isFinite(number2) )
//   {
//     console.log((+number1)+(+number2));
//     return;
//   }
//   else
//   {
//     alert("please enter a valid no")
//     return;

//   }
// }

// Sum(number1,number2);

// /////////////////////////////////////mult of two/////////////////////////////

// let number1 = prompt("Enter a Number 1 ");
// let number2 = prompt("Enter a Number  2");

// function Mul(number1, number2) {
//   if(number1=="" || number2=="")
//   {
//     alert("you have not given any input");
//     return;
//   }

//   else if(isFinite(number1) ||isFinite(number2) )
//   {
//     console.log((+number1)*(+number2));
//     return;
//   }
//   else
//   {
//     alert("please enter a valid no")
//     return;

//   }
// }

// Mul(number1,number2);

// ///////////////////////////////////min from an array////////////////////////////////

// let arr = [9, 6, 7, 4, 9, 3];
// let min = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (min > arr[i]) {
//     min = arr[i];
//   }
// }

// console.log(min);

// /////////////////////////////////////////lar of array////////////////////////////////

// let arr = [10, null, 7, 4, 9, 3];
// let large = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (large < arr[i]) {
//     large = arr[i];
//   }
// }
// console.log(large);

// //////////////////////////////////////////Find a no////////////////////////////////////
// let number = prompt("Enter a Number to find ");
// function findNumber(number) {
//   let arr = [1, 6, 7, 4.5, 9, 3];

//   if (number == "") {
//     alert("you have not given any input");
//     return;
//   }

//   else if (isFinite(number)) {
//     for (let i = 0; i < arr.length; i++) {
//       if (+number === arr[i]) {
//         console.log(true);
//         return ;
//       }

//     }
//     console.log(false);
//        return;

//   }
//   else {
//     alert("please enter a valid no")
//     return;

//   }

// }

// findNumber(number);

// /////////////////////////////////// reverse arrey of string////////////////////////////////////////////////////////////

// function reverseArray() {
//   let arr = ["a", "b", "c", "d", "e"];
//   let j = arr.length - 1;
//   let tamp;
//   for (let i = 0; i < arr.length / 2; i++) {
//     tamp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = tamp;
//     j--;
//   }

//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
// }
//  reverseArray();
///////////////////////////////////////////Length of string//////////////////////

// function strLength(s) {
//   let length = 0;
//   while (s[length])
//     length++;
//   return length;
// }

//  console.log(strLength("Hello how r u"));

// //////////////////////////////////////////////length of array/////////////////////////////////////
//  function lengthOfArray() {
//   let arr = ["a", "b", "c", "d",  "e", "f"];
//   let i = 0;
//   let count = 0;
//   while (arr[i]!=undefined) {
//     count++;
//     i++;
//   }
//   return count;
// }
// console.log(lengthOfArray());

// ////////////////////////////////////////Area//////////////////////////////////////

// function AreaofTriangle() {
//   let side1 = parseFloat(prompt('Enter side1: '));
//   let side2 = parseFloat(prompt('Enter side2: '));
//   let side3 = parseFloat(prompt('Enter side3: '));
//   if(side1<0 || side2<0 || side3<0) alert('side of triangle cannot be negative');
//   else if((side1+side2)>=side3 || (side2+side3)>=side1 || (side1+side3)>=side2)
//   {
//   const s = (side1 + side2 + side3) / 2;
//   const areaValue = Math.sqrt(
//     s * (s - side1) * (s - side2) * (s - side3)
//   );
//   alert(  `The area of the triangle is ${areaValue}`);
//   }
//   else alert('triangle is not possible');
//   }

//   AreaofTriangle();

// ////////////////////////////////////////////Prime in range//////////////////

// let number = prompt("Enter number:");

// function Prime(number) {

//   if (+number == 1) {
//     alert("1 is prime as well as not prime no");
//     return;
//   }
//   else if (number == "") {
//     alert("you have not given any input");
//     return;
//   }
//   else if (+number <= 0) {
//     alert("plese enter no greater then 0");
//     return;
//   }
// else if(!Number.isInteger(+number))
//   {
//     alert("Enter a proper integer");
//     return;
//   }
//   else if (isFinite(number)) {

//     for (let i = 2; i <= number; i++) {
//       let flag = 0;

//       for (let j = 2; j < i; j++) {
//         if (i % j == 0) {
//           flag = 1;
//           break;
//         }
//       }

//       if (flag == 0) {
//         console.log(i);
//       }
//     }
//   }
//   else {
//     alert("please enter a valid no")
//     return;

//   }
// }

// Prime(number);
// ////////////////////////////////////Sort//////////////////////////////

// let arr = [234, 55, 63, 5, 6, 235, 547];
// function Sort(arr) {

//     let n = arr.length;
//     let temp = 0;
//     for (let i = 0; i < n; i++) {
//         for (let j = 1; j < (n - i); j++) {
//             if (arr[j - 1] > arr[j]) {

//                 temp = arr[j - 1];
//                 arr[j - 1] = arr[j];
//                 arr[j] = temp;
//             }

//         }
//     }
//         console.log(arr);

// }
// Sort(arr);

// ////////////////////////////////////Sqrt///////////////////

// let number = +prompt("enter a number ", " ");

// let Sqrt=(number)=>{
//       return (number**.5);
// }

// console.log(Sqrt(number));

///////////////////////////


