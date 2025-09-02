var select = document.getElementById("categories");

select.addEventListener("change",(event)=>{
     let page = event.target.value;
     window.location.href=page;
})


let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.querySelectorAll(".products .card").forEach((card) => {
    let btn = card.querySelector("button");
    btn.addEventListener("click", () => {
        let img = card.querySelector("img").src;
        let price = card.querySelectorAll(".detail p")[0].innerText.replace("₹", "");
        let weight = card.querySelectorAll(".detail p")[1].innerText;

        let product = {
            image: img,
            price: price,
            weight: weight,
        };
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Product added to cart!");
    });
});

//favourite 

// let favourite = JSON.parse(localStorage.getItem("favourite")) || [];

// document.querySelectorAll(".products .card").forEach((card) => {
//     let btn = card.querySelector(".detail img");
//     btn.addEventListener("click", () => {
//         let img = card.querySelector("img").src;
//         let price = card.querySelectorAll(".detail p")[0].innerText.replace("₹", "");
//         let weight = card.querySelectorAll(".detail p")[1].innerText;
//         let product = {
//             image: img,
//             price: price,
//             weight: weight,
//         };
//         favourite.push(product);
//         localStorage.setItem("cart", JSON.stringify(favourite));
//         alert("Product added to favourite!");
//     });
// });

//


//filter
let allcards = document.querySelectorAll(".products a");
let filter = document.querySelectorAll(".categories select");
let metal="";
let gender="";
let size = "";
filter[0].addEventListener("change",()=>{metal = filter[0].value});
filter[1].addEventListener("change",()=>{gender = filter[1].value});
filter[2].addEventListener("change",()=>{size = filter[2].value});
filter.forEach((filter)=>{
    filter.addEventListener("change",()=>{
        for(let i=0;i<allcards.length;i++){
            let source = allcards[i].querySelector(".card .image img").alt;
            if(source.includes(metal) && source.includes(gender) && source.includes(size)){
                allcards[i].style.display = "flex";
            }else{
                allcards[i].style.display = "none";
            }
        }
    })
})
