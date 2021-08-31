// !page 3

output = document.getElementById("output");
const dataJson = localStorage.getItem("dataproduct");
let obj = JSON.parse(dataJson);
var totalprice = 0;
var total = 0;
console.log(obj);
count(obj);
var totalPrice = 0;
function count(myObj) {
  totalPrice = 0;
  for (let x in myObj) {
    if (myObj[x]) {
      addtext(myObj[x], x);
    }
  }
  addpay();
}






// function updateCartTotal(input,price) {
//   var quantity = input;
//   console.log(quantity,price);
//   total = total + price * quantity;
//   document.getElementsByClassName('ttp').textContent= total
//   console.log(total);
// }
