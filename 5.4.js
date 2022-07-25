// let styles=["Jazz", "Blyes"];
// styles.push("Rock and roll");
// console.log(styles);
// styles[Math.floor((styles.length - 1) / 2)] = "Classics";
// //alert( styles.shift() );
// //styles.unshift("Rap", "Reggae");
// console.log(styles);





// function inputArray()
// {
//     let arr=[];
//     let i=0;
//     count=0;
//     while(true)
//     {
//         let number=prompt("enter no", " ");
//         if (number==" " || number==null)
//         {
//             break;
//         }
        
//         else if(isFinite(number))
//         {
//             arr[i]=+number;
//             count+=arr[i];
//             i++;
//         }
//         else 
//             break;

           
        
//     }
//     return count; 
// }

// alert(inputArray());

// let arr =[ 1, 2, 15 ];
// for(let i of arr){
//     i=parseInt(i);
// }

// // the method reorders the content of arr
// arr.sort(compareNumeric);

// console.log( arr );  // 1, 15, 2

// let a=10000000000000000000000000
// let b=10000000000000000000000000001

// if(a.length >= b.length){
//     console.log(findSum(a, b));
// }
// else{
//    console.log(findSum(b, a));
// }

// var first = '111';
// var second = '999';

// if (first.length >= second.length) {
// 	console.log(findSum(first, second));
// } else {
// 	findSum(second, first);
// }

// function findSum(first, second) {
// 	var sum = '';
// 	var carry = 0;
// 	var diff = second.length - first.length;
// 	for (i = first.length - 1; i >= 0; i--) {
// 		var temp =
// 			(Number(first.charAt(i)) % 10) +
// 			(Number(second.charAt(i + diff)) % 10) +
// 			carry;
// 		if (temp >= 10) {
// 			sum = (temp % 10) + sum;
// 			carry = Math.floor(temp / 10);
// 		} else {
// 			sum = temp + sum;
// 			carry = 0;
// 		}
// 	}
// 	if (carry) {
// 		sum = carry + sum;
// 	}
// 	return sum;
// }

// console.log(first);

let a = 10000000000000000000000099n;
let b = 10000000000000000000000099n;
console.log(a+b);