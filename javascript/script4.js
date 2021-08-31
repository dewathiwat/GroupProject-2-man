var price = localStorage.getItem('totalprice')
let checkout = document.getElementById('checkout')
checkout.innerHTML =`Confirm Payment: ${price} THB`
checkout.addEventListener('click',()=>{
    alert(`pay ${price} THB`)
    localStorage.removeItem("totalprice");
    localStorage.removeItem("dataproduct");
})




let subtotal =document.getElementById('subtotal')
subtotal.innerHTML =` ${price} THB`;



let totalprice = document.getElementById('totalprice')
totalprice.innerHTML =` ${price} THB`;
let dollarPrd = price/31
let textprice = document.querySelector('.textprice')
textprice.innerHTML =`“I authorise Jersey Shop to charge my card for a total amount of $ ${dollarPrd.toFixed(2)} USD`