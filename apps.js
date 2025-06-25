let a=Number(prompt("Enter 1st number:"));
if (a%2==0){
    alert("even");
}
else{
    alert("odd");
}
let today = new Date()
console.log(today);
console.log(today.getDate());
console.log(today.getMonth());
console.log(today.getDay());
console.log(today.getYear());

function login(){
    let username = document.getElementById("uname").value;
    
    let password = document.getElementById("pwd").value;
    if(username==="admin" && password==="admin"){
        alert("success");
    }
    else{
        alert("failed");
    }
}
function getloc(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPos,showerror);
    }else{
        console.log("not supported");

    }
}
function showPos(position){
    let lat=position.coords.latitude;
    let lon=position.coords.longitude;
    document.getElementById("p1").innerText = " latitude = "+lat+" longitude ="+lon;
}

function showerror(error){
    console.log(error);
}   

