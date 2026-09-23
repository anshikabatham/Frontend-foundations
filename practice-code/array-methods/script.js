function studentdata(){
    let students =["Anshika","Simran","Annie"];
    console.log("original array:",students);

    students.push("Shreya");
    console.log("push():",students);

    students.pop();
    console.log("pop():",students);

    students.unshift("Mannu");
    console.log("unshift():",students);

    students.shift();
    console.log("shift():",students);

    students.splice(1,2);
    console.log("splice():",students);

    //students.slice(2,3);
    //console.log("slice():",students);
}

studentdata();