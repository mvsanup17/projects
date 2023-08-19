let a = document.getElementById('imgid');
a.src = 'flow.jpg';
a.style.height="450px";
a.style.width="300px";

let t = document.getElementById('texting');
t.style.border="2px solid red";

let para = document.getElementById('p1');
para.innerHTML = "Please enter your name";
para.style.color = "red";

// let s = document.getElementsByClassName('topic');
// console.log(s);
// s[0].innerHTML = 'Hypertext Markup Language';
// s[1].innerHTML = "Cascading Style Sheets";
// s[2].innerHTML = "Bootstrap";
// s[3].innerHTML = "Javascript";

// let lists = document.getElementsByTagName('li');
// lists[0].innerText = "Aditya Engineering College";
// lists[1].innerText = "Aditya  College of Engineering and Technology";
// lists[2].innerText = "Aditya  College of Engineering";

// let tab = document.getElementsByTagName('td');
let tabe = document.getElementsByTagName('td');
// tab[0].innerText = "1";
// tab[1].innerText = "2";
// tab[2].innerText = "3";
// tab[3].innerText = "4";
// tab[4].innerText = "5";
// tab[5].innerText = "6";
// tab[6].innerText = "7";
// tab[7].innerText = "8";
// tab[8].innerText = "9";

// for(let i=0 ;i<tab.length; i++){
//     tab[i].innerText = i+1;
// }

let b = document.querySelectorAll("div, h4, span");
for(let j=0 ; j < b.length; j++){
    b[j].style.backgroundColor="blue";
}

let ps = document.querySelector('.topic');
ps.innerText = 'HyperText Markup Language';

let lis = document.querySelector('li');
lis.innerText = 'Aditya Engineering College';


for(let i=tabe.length-1 ;i<tabe.length; i--){
    tabe[i].innerText = tabe.length-i;
}





