let myForm=document.createElement("form");
let nameinput=document.createElement("input");
nameinput.id="name";
nameinput.placeholder="Name";
nameinput.required=true;

let ageInput=document.createElement("input");
ageInput.type="number";
ageInput.id="age";
ageInput.placeholder="Age";
ageInput.required=true;

let courseInput=document.createElement("input");
courseInput.id="course";
courseInput.placeholder="Course";
courseInput.required=true;

let btn=document.createElement("button");
btn.textContent="Submit";
btn.type="submit";

myForm.append(nameinput,ageInput,courseInput,btn);
document.body.appendChild(myForm);
let msg=document.createElement("h3");
document.body.appendChild(msg);

myForm.addEventListener("submit",function(e){
    e.preventDefault();
    let age=document.getElementById("age").value;
    if(age<18){
        msg.textContent="Error:Age is not right";
        msg.style.color="red";
    }else{
        msg.textContent="Success";
        msg.style.color="green";
    }
});