// const header = document.getElementById('header');
//   console.log(header);
//     header.style.color = 'blue';
//     header.style.background = 'red';

//const classSelector = document.getElementsByClassName('classSelector');
//console.log(classSelector);
// classSelector[0].style.color = 'blue';
// classSelector[1].style.color = 'blue';
//classSelector[2].style.color = 'blue';
//const arr = Array.from(classSelector);
//console.log(classSelector);
//for(let i=0; i<arr.length; i++){
//arr[i].style.color = 'blue';
//}
//const h3Selector = document.getElementsByTagName('h3');
//arr.forEach((element) => {
// element.style.Color = 'blue';
//element.style.background = 'red';
//});

//    const classSelector=document.querySelector('.classSelector');
//     console.log(classSelector);
//     classSelector.style.color ="blue"

//     const h3=document.querySelector('h3')
//     console.log(h3)
//     h3.style.color="blue"

// const classSelector=document.querySelectorAll('.classSelector');
// console.log(classSelector)

// classSelector.forEach((ele )=> {
// ele.style.color = 'blue'
// })
// const h3=document.querySelectorAll('h3')
// h3.forEach((ele )=> {
//      ele.style.color = 'blue'
// 
// const darkButton = document.getElementById("darkBtn");
// const lightButton = document.getElementById("lightBtn");

// darkButton.addEventListener("click", function(){
//     document.body.style.backgroundColor = "pink";
//     document.body.style.color = "pink";
// });

// lightButton.addEventListener("click", function(){
//     document.body.style.backgroundColor = "blue";
//     document.body.style.color = "pink";
// });
// const btn = document.getElementById("btn");
// const outer = document.getElementById("outer");

// btn.addEventListener("click", () => {
//     outer.innerHTML = "<div>Inner</div>";
// // });
// const btn = document.getElementById("btn");
// const outer = document.getElementById("outer");

// btn.addEventListener("click", () => {
//     outer.innerHTML += "<div>Inner</div>";
// })
const submitBtn=document.getElementById("submitBtn");
const output = document.getElementById("output");
console.log(userName)

submitBtn.addEventListener("click",(e)=>{
    const userName = document.getElementById("userName").value;
    e.preventDefault();
    output.innerHTML=userName
})