// let signin = document.getElementById("signin");
let signup = document.querySelectorAll(".signup");
document.getElementById("btn1").addEventListener("click",()=>{
    // alert(signup_input);
    signup[0].style.display = "none";
    signup[1].style.display = "flex";
});

document.getElementById("btn2").addEventListener("click",()=>{
    signup[1].style.display = "none";
    signup[0].style.display = "flex";
});


// verification

let log = JSON.parse(localStorage.getItem("log"))||[];

let name = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");

let email_in = document.getElementById("email1");
let password_in = document.getElementById("password1");


function submit_in(){
    if((email_in.value)===""){
        return alert("enter a email");
    }
    if((password_in.value) ===""){
        return alert("enter password")
    }
    if ( !(email_in.value).includes("@gmail.com")){
        return alert("enter valid email");
    }
    let ans = 0;
    log.forEach(values => {
        if(email_in.value === values.Email && password_in.value === values.Password){
           ans = 1;
        }
    });
    if(ans){
        window.location.href = "index.html"
    }else{
        alert("invalid email or password");
    }
}

function submit_up(event){
    if((email.value)===""){
        return alert("enter a email");
    }
    if((password.value) ===""){
        return alert("enter password")
    }
    if ( !(email.value).includes("@gmail.com")){
        return alert("enter valid email");
    }

    let profile = {
        Name : name.value,
        Email : email.value,
        Password : password.value,
    }

    log.push(profile);
    localStorage.setItem("log", JSON.stringify(log));
    if(event) event.preventDefault();
    window.location.href = "index.html";
}

