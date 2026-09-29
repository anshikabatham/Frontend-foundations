// const div = document.createElement("div");
// div.textContent = "Hello";
// document.body.appendChild(div);

// const p = document.createElement("p");
// p.textContent = "Hello World";
// document.body.appendChild(p);

// //createElement, append ,appendChild ,remove.
// console.log(removeone.parentElement)
// //console.log(document.querySelector("span").parentElement);
// console.log(document.querySelector("div").firstElementChild);
// console.log(document.querySelector("h2").parentElement);


//parentElement
//firstElementChild
//nextElementSibling
//previousElementSibling

// let obj={
//     Name:"Anshika",
//     Course:"btech ai" 
// }
// ArrayObject.forEach(data)=>{

// let newTag=document.createElement("h2");//create tag name,method name
// newTag.innerText=`${obj.Name},${obj.Course}`; //inner menas input that show on browser
// console.log(newTag);
// document.body.append(newTag,"this is AB");
// });

//arr of obj- use of for each laganyenge the parameters pass kr deyenge and create new tag then do append 
let studentsData=[
    {name:"Anshika", marks:100},
    {name:"Annie", marks:92},
    {name:"Shanaya", marks:90}

];
studentsData.forEach(function(student){
    let newTag=document.createElement("h3");
    newTag.textContent=`${student.name},${student.marks} marks`;
    document.body.appendChild(newTag);
});

//parentelement,firstElement,firstelementchild,parentelement,nextelementsibling,previouselementsibling

let firstHeading = document.querySelector("h3");
console.log(firstHeading);
console.log(firstHeading.parentElement);
console.log(firstHeading.nextElementSibling);
console.log(firstHeading.previousElementSibling);
console.log(document.body.firstElementChild);
console.log(document.body.lastElementChild);