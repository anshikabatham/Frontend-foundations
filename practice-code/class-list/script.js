// let btn=document.querySelector("button")
// let body=document.querySelector("body")
// btn.addEventListener("click",()=>{
//     body.classList.toggle("theme");
// })
//create element,innertext,append,appendchild
let h2text = document.querySelector("h2");

function addClass() {
    h2text.classList.add("customcss2");
    console.log("Class Added");
}

function removeClass() {
    h2text.classList.remove("customcss2");
    console.log("Class Removed");
}

function toggleClass() {
    h2text.classList.toggle("customcss2");
    console.log("Class Toggled");
}

function checkClass() {
    let result = h2text.classList.contains("customcss2");
    console.log("Kis h2 is customcss?:", result); 
}