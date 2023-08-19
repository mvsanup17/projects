// document.write("<h1>Introduction to JavaScript </h1>");

// var a = 10;

// confirm("Are you sure to submit your review");
// alert("Thanks for the response");

// document.write("The value of a <br>", a);

// var name = "George Hitler <br>";
// document.write(name.length);
// name += " Micheal Ketan <br>";
// document.write(name);
// document.write(name.length);

// console.log("Java Script");

// var names = "Arjun ";
// names += " Sandeep ";
// names += "& Abhiram";

// document.write(`${names} <br><br>`);
// document.write("Uday "+"Manoj "+"Anwar");

// var val = 17;
//var val = "Anup";
// var val = 10.43 ;
// var val =  true;
// document.write(typeof(val));

// var arr = ['Richard ', ' David ', ' Michael', 'George'];
// document.write(arr[1], arr[3]);

// var arr2 = [1,2,3,4.3,5];
// document.write(arr2)

// var obj = [{
//     'Name' : 'Abhiram',
//     'Rollno' : 16,
//     'College' : 'AEC',
//     'Branch' : 'CSE'
// },{
//     'Name' : 'Arjun',
//     'Rollno' : 17,
//     'College' : 'AEC',
//     'Branch' : 'CSE'
// },{
//     'Name' : 'Sandeep',
//     'Rollno' : 18,
//     'College' : 'AEC',
//     'Branch' : 'CSE'
// }]


// printing the key values of the obj
// for (var i=0;i<obj.length;i++){
//     for (key in obj[i]){
//       document.write(obj[i][key])
//     }
//     document.write('<br>')
// }

// console.log(obj);
// console.log(obj[0].Name);


// for (let i=0 ; i<obj.length; i++){
//     console.log(obj[i]);
// }


// var obj1 = {
//     a : 'Arjun',
//     b : 'Sandeep',
//     c : 'Abhiram',
//     d : 'Sathvik'
// }

// document.write(Object.values(obj1));

// alert("Success");

// let a = confirm("Are you sure");
// document.write(a);

// let b = alert("Hello");
// let c = confirm("Are you sure");
// document.write(c);

// let d = parseInt(prompt("Enter the 1st Value"));
// document.write(d);
// let e = parseInt(prompt("Enter the 2nd Value"));
// document.write(d+e);


//with var re declaration and re initialization is possible. It's global scope

// var a = 10;
// var a = 20;
// document.write(a);

// with let re declaration is not possible but re intialisation is possible. It's block scope


//block variable

// let a = 10;
// a = 20;
// {
//     let a = 30;
      // document.write(a);
// }
// document.write(a);

// const 

// const a = 3.14;
 // const a = 4.27;
// document.write(a);

var a = prompt("Enter Name");
let b = prompt("Enter Name");
const c = prompt("Enter Name");
document.write(a+" "+b+" "+c);










