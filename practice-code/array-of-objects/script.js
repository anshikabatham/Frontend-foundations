let Result =[
    {
        Name:"Annie",
        Age:19,
        marks:{
            Math:80,
            Arts:90,
            Science:45
        }
    },
    {
        Name:"Mahir",
        Age:18,
        marks:{
            Math:90,
            Arts:90,
            Science:95
        }
    },
    {
        Name:"sahil",
        Age:21,
        marks:{
            Math:48,
            Arts:70,
            Science:25
        }
    },
    {
        Name:"Ram",
        Age:22,
        marks:{
            Math:40,
            Arts:99,
            Science:75
        }

    }

];
for(let key of Result ){
    let totalmarks=key.marks.Math +key.marks.Arts+key.marks.Science;
    let percentage=(totalmarks/300)*100;
    var grade;
    if(totalmarks>=200){
        grade="A";
    }else if (totalmarks>=60){
        grade="B";
        }
    else if(totalmarks<150){
         grade="C";
    }else{
         grade ="Fail";
        }

    
    console.log("Name:"+ key.Name);
    console.log("Age:"+key.Age);
    console.log("totalmarks:"+totalmarks);
    console.log("Percentage:"+percentage.toFixed()+"%");
    console.log("grade:"+grade);
}
