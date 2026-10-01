// 1. Form tag create kiya
let form = document.createElement("form");

// Form inputs ka data array me banaya taaki forEach se jaldi ban jaye
let formFields = [
    { type: "text", id: "name", placeholder: "Student Name" },
    { type: "number", id: "age", placeholder: "Student Age" },
    { type: "text", id: "course", placeholder: "Course" },
    { type: "password", id: "password", placeholder: "Password" },
    { type: "password", id: "confirmPassword", placeholder: "Confirm Password" }
];

// 2. Loop lagakar saare inputs banaye aur form me append kiye
formFields.forEach(function(field) {
    let input = document.createElement("input");
    input.type = field.type;
    input.id = field.id;
    input.placeholder = field.placeholder;
    input.required = true;
    
    form.appendChild(input);
    
    // Nayi line ke liye do <br> tags lagaye
    form.appendChild(document.createElement("br"));
    form.appendChild(document.createElement("br"));
});

// 3. Submit button banaya
let submitBtn = document.createElement("button");
submitBtn.type = "submit";
submitBtn.textContent = "Submit Details";
form.appendChild(submitBtn);

// 4. Form ko body me append kiya
document.body.appendChild(form);

// Output dikhane ke liye ek h3 tag banaya
let message = document.createElement("h3");
document.body.appendChild(message);

// 5. Form par Event Listener lagaya
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Page reload rokne ke liye

    // Passwords ki values nikaali
    let pass = document.getElementById("password").value;
    let confPass = document.getElementById("confirmPassword").value;

    // Checks lagaye
    if (pass !== confPass) {
        message.textContent = "Error: Passwords do not match!";
        message.style.color = "red";
    } else {
        message.textContent = "Success: Form submitted!";
        message.style.color = "green";
        
        console.log("--- Form Data ---");
        console.log("Name:", document.getElementById("name").value);
        console.log("Age:", document.getElementById("age").value);
        console.log("Course:", document.getElementById("course").value);
    }
});