// let a=Number(prompt("Enter 1st number:"));
// if (a%2==0){
//     alert("even");
// }
// else{
//     aert("odd");
// }
// let today = new Date()
// console.log(today);
// console.log(today.getDate());
// console.log(today.getMonth());
// console.log(today.getDay());
// console.log(today.getYear());

// function login(){
//     let username = document.getElementById("uname").value;
    
//     let password = document.getElementById("pwd").value;
//     if(username==="admin" && password==="admin"){
//         alert("success");
//     }
//     else{
//         alert("failed");
//     }
// }
// function getloc(){
//     if(navigator.geolocation){
//         navigator.geolocation.getCurrentPosition(showPos,showerror);
//     }else{
//         console.log("not supported");

//     }
// }
// function showPos(position){
//     let lat=position.coords.latitude;
//     let lon=position.coords.longitude;
//     document.getElementById("p1").innerText = " latitude = "+lat+" longitude ="+lon;
// }

// function showerror(error){
//     console.log(error);
// }   

// class Student {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greet() {
//         console.log(this.name);
//     }
// }

// const C = new Student("Bob", 28);
// C.greet(); 

function change() {
    document.getElementById("p1").innerText = "hello";
    document.querySelector(".h1").innerHTML += "<button>h1</button>";
}

function show() {
    let uname = document.getElementById("uname").value;
    document.getElementById("un").innerText = uname;
}