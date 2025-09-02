var select = document.getElementById("categories");

select.addEventListener("change",(event)=>{
     let page = event.target.value;
     window.location.href=page;
})


let Name = document.getElementById("name");
let email = document.getElementById("email");
let message = document.getElementById("message");

let btn =document.getElementById("btn");

btn.addEventListener("click",(e)=>{
     // if(e) event.preventDefault();
     if((Name.value) === ""){
        return alert("enter a name");
     }
     
     if((email.value)===""){
        return alert("enter a email");
     }
     if ( !(email.value).includes("@gmail.com")){
        return alert("enter valid email");
     }
     if(message.value === " "){
          return alert("enter a message");
     }
     return alert("message send successfully")

})
