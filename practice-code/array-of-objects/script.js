// let Result =[
//     {
//         Name:"Annie",
//         Age:19,
//         marks:{
//             Math:80,
//             Arts:90,
//             Science:45
//         }
//     },
//     {
//         Name:"Mahir",
//         Age:18,
//         marks:{
//             Math:90,
//             Arts:90,
//             Science:95
//         }
//     },
//     {
//         Name:"sahil",
//         Age:21,
//         marks:{
//             Math:48,
//             Arts:70,
//             Science:25
//         }
//     },
//     {
//         Name:"Ram",
//         Age:22,
//         marks:{
//             Math:40,
//             Arts:99,
//             Science:75
//         }

//     }

// ];
// for(let key of Result ){
//     let totalmarks=key.marks.Math +key.marks.Arts+key.marks.Science;
//     let percentage=(totalmarks/300)*100;
//     var grade;
//     if(totalmarks>=200){
//         grade="A";
//     }else if (totalmarks>=60){
//         grade="B";
//         }
//     else if(totalmarks<150){
//          grade="C";
//     }else{
//          grade ="Fail";
//         }

    
//     console.log("Name:"+ key.Name);
//     console.log("Age:"+key.Age);
//     console.log("totalmarks:"+totalmarks);
//     console.log("Percentage:"+percentage.toFixed()+"%");
//     console.log("grade:"+grade);
// }


// // let name="Anshika"
// // let age=20
// // let course="B.tech Ai"
// // //console.log('${name}')
// // let obj ={
// //     name: "Anshika",
// //     age:20,
// //     course:"B.tech Ai"
   
// // }
// // //dot notation
// // console.log(obj.name,obj.age);

// // //bracket notations $ ternary operator
// // //in bracket notations 
// // let  bracket ="name";
// // //console.log(obj["name"])
// // console.log('using bracket notations: ${obj[bracket]}')
// // //destructure of the obj-important
// // let{name,age}=obj;
// // console.log(name,age)
//  let obj={
//     Name:"Anshika",
//     Age:20,
//  }
// console.log(obj.Name);

//constructor
//function constructor khud se he initialize hota h
// function funcons(name,age,marks){
//    this.name=name;
//    this.age=age;
//    this.marks=marks;//this refer to new object
// }
// let s1=new funcons("anshika",20,97);
// let s2=new funcons("anshi",22,78);

// console.log(s1);
// console.log(s2);

// class main{
//    constructor(){
//       console.log("Class Constructor called");
//    }
// }
// //let s3=new main();
// //deep and shallow
// //oops extend keyword
// class child extends main{
//    constructor(){
//       super();
//       console.log("child also constructor called");
//    }
// }
// let s3=new child();
//length,toUppercase,lowercase,charAt,includes,
// startwith,endwith,,replace,split,concat,indexof

let str="HELL0 WORLD! I am Anshika Batham."


console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.charAt(6));
console.log(str.includes("welcome"));
console.log(str.startsWith("Hello"));
console.log(str.endsWith("AI!"));
console.log(str.replace("Hello", "Hi"));
console.log(str.split(" "));

console.log(str.indexOf("I"));
