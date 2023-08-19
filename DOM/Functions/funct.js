//Function and its syntax 

// function_keyword function_name (parenthesis){
//     code
//     return statement
// }
// function_name() //calling the function 

// function fun (){
//     alert("Hello");
//     // document.write("JS Function");
// }
// fun()

//function with one argument

// var a = prompt("Scan your id")
// function idcard (rollno){
//     document.write(rollno);
// }
// idcard(a)

// document.write("<br>");

// //with arg and ret type 

// function fsd (a,b){
//     return document.write(a+b);
// }
// fsd(4,5)

// var val1 = parseInt(prompt("Enter the value"));
// var val2 = parseInt(prompt("Enter the value"));

// function values(c,d){
//     document.write(c+d);
// }
// values(val1,val2)

// function sum(a=0,b=0){
//     document.write(a+b)
// }
// sum()

// anonymous function is a function without having function name
// var dc = function (va1, va2){
//     return va1 * va2;
// }
// document.write(dc(6,7))

// let cube = prompt("Enter the number");

// function valuee(val){
//     for(let i=0 ;i<10;i++){
//         document.write(val**i);
//         document.write("<br>");
//     }
// }
// valuee(cube)

// es6 arrow function 

// add = (d,c) => {
//     document.write(d+c);
// }
// add(10,20)

// naming = a =>{
//     document.write(a)
// }
// naming('Arjun')


// function vfx (e,f){
//     console.log(e*f);
// }
// vfx(3,19)


//without arguments

//if we are not passing any arguments we can use _ (underscore) / () symbol.

// test = () => {
//     document.write('testing');
// }
// test()

// document.write("<br>");

// test = _ => {
//     document.write('Success');
// }
// test()


//setTimeout function
//callback is a function within as an argument

// setTimeout(function(){
//     document.write("Done!");
// },3000)


// setTimeout(test1 , 2000)
// function test1(){
//     alert("Your response is successfully Sent!");
//     alert("Thank you");
// }

// Topics:
// Basics 
// DOM - id, className, tagName, setAttributes, QuerySelectors
// function with 0,1,2 arguments
// arrow function 
// anonymous function
// callbackfunction

let tabe = [{
    'a': 'HTML',
    'b' : '01',
    'c' : '1000',
    'd' : 'Australia'
},{
    'a': 'CSS',
    'b' : '02',
    'c' : '2000',
    'd' : 'UK'
},{
    'a': 'JS',
    'b' : '03',
    'c' : '3000',
    'd' : 'USA'
}]




let tagg = document.getElementsByTagName('td');

for (let i=0; i<tagg.length; i++){
    tagg[i].innerHTML = prompt("Enter values");
    // tagg[i].innerHTML = document.write(Array.values(tabe));
    // tagg[i].innerHTML = tabe[i][Object.values[i]];
    
}