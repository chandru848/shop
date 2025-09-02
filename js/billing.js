let cart = JSON.parse(localStorage.getItem("cart"))||[]
let order = JSON.parse(localStorage.getItem("order"))||[]
let table = document.querySelector("table")

let td = document.createElement("td");
let productsname = []
cart.forEach((card)=> {
    let metal
    if((card.image).includes("gold")){
        metal = "gold";
    }else{
        metal = "silver";
    }
    let tr = document.createElement("tr");
    let nameArray = ((card.image).split("-")[1]).split("/");
    let name = metal+" "+(nameArray[(nameArray.length)-1]);
    productsname.push(name);
    tr.innerHTML=`
                    <td>${name}</td>
                    <td>${card.weight}</td>
                    <td><input type="number" min="1" id="qnt" value="1"></td>
                    <td>${card.price}</td>
                `
    table.appendChild(tr);
});

let c = 0;

let quantity = document.querySelectorAll("#qnt")
let weightarray = [];
let pricearray = [];
let tr = document.querySelectorAll("tr");
let totalweight = 0;
let totalprice = 0;
let totalqnt = 0
let final = 0;
tr.forEach((e,i)=>{
    if(i!==0){
        weightarray[i-1]= parseInt(((e.children)[1].textContent).replace("g",""));
        pricearray[i-1]= parseInt((e.children)[3].textContent);
    }
})

quantity.forEach((e,i)=>{
    e.addEventListener("change",()=>{
        let weight = (e.parentElement.previousElementSibling.innerHTML).replace("g","");
        let price = (e.parentElement.nextElementSibling.textContent);
        e.parentElement.previousElementSibling.textContent = String(weightarray[i]*(e.value))+"g";
        e.parentElement.nextElementSibling.textContent = pricearray[i]*(e.value);
    })
})

btn = document.getElementById("btn");
btnclicked = false
btn.addEventListener("click",()=>{
    setTimeout(2000);
    tr.forEach((e,i)=>{
        if(i!==0){
            pricearray[i-1]= parseInt((e.children)[3].textContent);
        }
    })
    for(let i=0;i<pricearray.length;i++){
        totalprice = totalprice+ pricearray[i];
    }

    quantity.forEach((e)=>{
        // e.preventDefault();
        e.setAttribute("disabled",true);
    })
    // alert(pricearray)
    // alert(totalprice)
    btnclicked = true;
    final = totalprice
    let tablerow = document.createElement("tr");
    tablerow.innerHTML=`
                <td colspan="3">Total- Price</td>
                <td id="total">${totalprice}</td>
                `
    table.appendChild(tablerow);
    btn.setAttribute("disabled",true)
})





// console.log(weightarray);

// console.log(pricearray);



let name = document.getElementById("name");
let phone = document.getElementById("phone");
let address = document.getElementById("address");

function submit(event){
    if(btnclicked === false){
        return alert("confirm the quantity");
    }
    if((name.value)===""){
        return alert("enter a name");
    }
    if((phone.value) ===""){
        return alert("enter a number")
    }
    let check =/^[0-9]{10}$/
    if(!check.test(phone.value)){
        alert("enter a 10 digit number")
    }

    if ( address.value === ""){
        return alert("enter address");
    }
    
    let orders = {
        Name : name.value,
        phone : phone.value,
        address : address.value,
        Names : [],
        price : totalprice,
        
    }   
    orders.Total=final;
    orders.Names.push(...productsname);
    order.push(orders);
    localStorage.setItem("order", JSON.stringify(order));
    if(event) event.preventDefault();c
    alert("your order is placed soon confirmation call is called")
    window.location.href = "index.html";
}


// console.log(totalprice);




