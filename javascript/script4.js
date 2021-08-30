var price = localStorage.getItem('totalprice')
document.getElementById('checkout').innerHTML =`Confirm Payment:$${price}`