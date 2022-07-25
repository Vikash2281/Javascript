 let age=17;

// let res=(age>18)?true : confirm("did they alow u");
// console.log(res);

// function checkAge(age) {
//     return (age > 18) || confirm('Did parents allow you?');
//   }

//   function min(a, b) {
//     if (a < b) {
//       return a;
//     } else {
//       return b;
//     }
//   }

// let res=  min(2,3);
// alert(res);


function pow(a,b)
{
    let c=1;
    for(let i=1;i<=b;i++)
        c=c*a;
    return c;
}

let res=pow(5,4);
console.log(res)