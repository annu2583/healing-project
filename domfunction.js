document.getElementById("name").innerHTML = "Hello World!";


// let links=document.getElementsByClassName("nav_link")
// let tags=document.getElementsByTagName("p")
// links[0].innerHTML="HOME"
// console.log(links);


let link=document.querySelectorAll(".nav_link")
let btn=document.querySelector(".btn_container")
console.log(link);

console.log(link[0].getAttribute('href')); 
link[0].setAttribute('href','www.google.com')

link[0].style.color="blue"
btn.style.backgroundColor="red"


function handleChange(){
    let emailInput=document.getElementById('email')

    console.log(emailInput.value,"==here value");
}


// document.querySelector('.join').addEventListener('click',displayData)
document.querySelector('.join').addEventListener('mouseover',displayData)
document.querySelector('.join').addEventListener('mouseout',displayData2)

function displayData(){
    alert("I am hovered")
}
function displayData2(){
    alert("I am out")
}