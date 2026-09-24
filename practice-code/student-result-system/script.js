let students=[];
function addStudent(name,age,totalmarks,course){
    let newStudent ={
        name:name,
        age:age,
        course:course,
        totalmarks:totalmarks
    };
    students.push(newStudent);
    console.log('${name} ${age} ${course} ${totalmarks}')
}
function listallStudents(){
    console.log("All Students List");
    students.forEach(function(student){
        console.log(`Name:${student.name}| Age: ${student.age} | Course: ${student.course} | Totalmarks:${student.totalmarks}`);
    });
}
function checkResults(){
    console.log("Result show");
    let passingmarks=40;
    let allpassed=students.every(function(student){
        return students.totalmarks>=passingmarks;
    });
    let anyonefailed=students.some(function(student){
        return student.totalmarks<passingmarks;
    });
    console.log("anyone is fail? : " + anyonefailed);
}
addStudent("Anshika",21,"BtechAI",92);
addStudent("Annie",20,"BtechAI",100);
addStudent("Anshika",22,"BtechAI",78);
addStudent("Anshika",21,"BtechAI",82);
addStudent("Anshika",19,"BtechAI",52);
listallStudents();
checkResults();
