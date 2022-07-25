// let age =25;
// if (age >= 14 && age <= 90)
//     console.log("you can do this");
// else
//     console.log("u are not in age range");


let login = prompt();

if (login == "admin") {
  if (pass === 'TheMaster') {

    alert('Welcome!');
  }
  else if (pass === '' || pass === null) {
    alert('Canceled');
  }
  else {

    alert('Wrong password');
  }
}
  else if (login === '' || login === null) {
    alert('Canceled');
  }
  else {
    alert("I don't know you");
  }