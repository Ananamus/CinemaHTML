const schemeSvg = document.querySelector(".scheme-svg");
const totalPriceTag = document.querySelector(".price-total");
const menuButton = document.querySelector("m-menu");
const menu = document.querySelector("menu");
let cost = 800;
let totalPrice = 0;
schemeSvg.addEventListener('click',(event)=>{
    if(!event.target.classList.contains("booked") & (!event.target.classList.contains("light"))){
        event.target.classList.toggle("active");
        let totalSeets = schemeSvg.querySelectorAll(".active").length
        totalPrice = totalSeets * cost;
        totalPriceTag.textContent = totalPrice;
    }
});
menuButton.addEventListener("click",()=>{
    menu.style.display = "block"
    menu.classList.toggle("is-open")
});