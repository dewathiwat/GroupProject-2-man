// !page 3
output = document.getElementById("output");
var dataJson = localStorage.getItem("dataproduct");
let obj = JSON.parse(dataJson);
var totalprice = 0;
var total = 0;
// console.log(obj);
// count(obj);
var totalPrice = 0;
var i = 0;
const getProductDetails = async () => {
  try {
    document.getElementById("allProduct").innerHTML = obj
      .map(
        (product) =>
          ` 
        
          <div class="displayNone"> ${(i += 1)} </div>
          <div class="displayNone"> ${console.log(i)} </div>

          
          
          

          <div class="contentPrd row">
        
    
            <div class="col-4 "  id="prdImg">
              <img class="card-img-top" src="${product.prdImageUrl}">
            </div>
    
            <div class="col-8">
              <h3 id="prdName">${product.prdname}</h3>
              <h2  id="prdPrice" style="color: red;">${
                product.prdPrice
              } THB</h2>
              <div class="row">
                <div class="col-6">
                  <p>Size</p>
                  <select name="size" size="1" id="prdSize">
                    <option value="${product.prdSize}" selected>
                    ${product.prdSize}
                    </option>
                  </select>
                </div>
    
                <div class="col-6">
                  <p>Qty</p>
                  <input class="cart-quantity-input" type="number" value="1">
                </div>
              </div>
              <a href="page3.html" style="color: red; id="pRemove">Remove this item</a>
            </div>
          </div> 
       
        </div> 

        


     

        `
      )
      .join("");
  } catch (e) {
    console.log(e.message);
  }
};
getProductDetails();
// getslid_show();

// function updateCartTotal(input,price) {
//   var quantity = input;
//   console.log(quantity,price);
//   total = total + price * quantity;
//   document.getElementsByClassName('ttp').textContent= total
//   console.log(total);
// }
document.getElementById("pRemove").onclick = () => {
  delete obj[x];
  localStorage.setItem("dataproduct", JSON.stringify(obj));
  console.log("", x);
  alert("re");
}
