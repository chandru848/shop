var select = document.getElementById("categories");

select.addEventListener("change",(event)=>{
     let page = event.target.value;
     window.location.href  =page;
})

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let productsContainer = document.querySelector(".products");
var total = 0;
if (cart.length === 0) {
    productsContainer.innerHTML = "<p>Your cart is empty.</p>";
} else {
    productsContainer.innerHTML = "";
    cart.forEach((item) => {
        let card = document.createElement("a");
        card.classList.add("card");
        card.innerHTML = `
            <div class="card">
                <div class="image">
                    <img src="${"."+(item.image).slice(32)}" alt="product">
                </div>
                <div class="detail">
                    <p>₹${item.price}</p>
                    <button class="rebtn">Remove</button>
                    <p>${item.weight}</p>
                </div>
            </div>`
        ;
        productsContainer.appendChild(card);
        
    });
}

let cards = document.querySelectorAll(".products a");
let cartprice;
cards.forEach((card,index)=>{
    let btn = card.querySelector(".rebtn");
    btn.addEventListener("click",()=>{
        card.remove();
        cart.splice(index,1);
        localStorage.setItem("cart", JSON.stringify(cart));        
    })
})

cards.forEach((card)=>{
    totalcard = card.querySelectorAll(".card .detail p")[0].textContent;
    console.log(totalcard)
    total = total + parseInt(totalcard.replace("₹",""));

})
let buy = document.getElementById("buy")
buy.addEventListener("click",()=>{
    window.location.href = "billing.html";
})
document.querySelector("#price").innerHTML = total;





