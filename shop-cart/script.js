const btnPlus = document.querySelectorAll(".btn-plus");
const btnMinus = document.querySelectorAll(".btn-moins");
const qte = document.querySelectorAll(".quantity");
const btnDelete = Array.from(document.getElementsByClassName("close"));
const btnLike = document.querySelectorAll(".btn-like");
const like = document.querySelectorAll(".like");
let total = document.querySelector(".total-price")
let totale = document.querySelector(".cart-total-price")

for (let i = 0; i < btnPlus.length; i++) {
  btnPlus[i].addEventListener("click", function () {
    qte[i].innerHTML++;
    updateCartTotal()
  });
  
}
  


for (let i = 0; i <= btnMinus.length - 1; i++) {
  btnMinus[i].addEventListener("click", function () {
    if (qte[i].innerHTML > 0) {
      qte[i].innerHTML--;
      
    }
    updateCartTotal()
  });
  

  

for (let i = 0; i < btnDelete.length; i++) {
  btnDelete[i].addEventListener("click", function () {
    btnDelete[i].parentElement.parentElement.remove();
    updateCartTotal()
  });
  
}
for (let i = 0; i < btnLike.length; i++) {
  btnLike[i].addEventListener("click", function () {
    if (like[i].style.fill === "red") {
      like[i].style.fill = "black";
    } else {
      like[i].style.fill = "red";
    }
    
  });
}
function updateCartTotal() {
    let price = document.querySelectorAll(".cart-price")
    let qte = document.querySelectorAll(".quantity")
    let totale = document.querySelector(".cart-total-price")

    let somme=0
for (let i = 0; i < price.length; i++) {
    somme=somme+price[i].innerHTML*qte[i].innerHTML
}    
total.innerHTML=somme
totale.innerHTML=(somme + 5)
}}