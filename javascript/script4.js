var price = localStorage.getItem('totalprice')
let checkout = document.getElementById('checkout')
checkout.innerHTML =`Confirm Payment: ${price} THB`
checkout.addEventListener('click',()=>{
    alert(`pay ${price} THB`)
    localStorage.removeItem("totalprice");
    localStorage.removeItem("dataproduct");
})