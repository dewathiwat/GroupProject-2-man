// Form figma
let searchParams = new URLSearchParams(window.location.search).get("id");

// page 1
// Slide Product






// All product
const getProductDetails = async () => {
  try {
    const response = await axios.get(
      "https://6102d7aa79ed680017482359.mockapi.io/productlist"
    );
    document.getElementById("test1").innerHTML = response.data
      .map(
        (product) =>

          `
          <div class="col-3">
                    <div class="card">
                    <img class="card-img-top" src="${product.prdImageUrl}" alt="Card image cap">
                    <div class="card-body">
    <h7 class="card-title">${product.prdname}</h7>
    <li> <h6 class="text-danger">${product.prdPrice} THB</h6><li>
    <button class="btn btn-dark text-white"onclick="location.href = 'index2.html?id=${product.id}';">show detail</button>

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
// // page 3
// const getProductBag = async () => {
//   try {
//     const response = await axios.get(
//       "https://6102d7aa79ed680017482359.mockapi.io/productlist"
//     );
//     document.getElementById("test1").innerHTML = response.data
//       .map(
//         (product) =>
//  `
// <div class="row">
// <div class="col-8">
// <div class="col-4">
// <img src="${product.prdImageUrl}"> </div>
//  </div>
// <div class="col-4">
//  <h4 class="text-danger">${product.prdPrice} THB</h4>
//  <h2>Product name: ${product.prdname}</h2>
//  </div>

// </div>

// <div class="col-4">

// <div class="row">
// <h3>bag</h3><h3>bag</h3><h3>bag</h3><h3>bag</h3><h3>bag</h3>
// </div>
// </div>
// </div>
//         `
//       )
//       .join("");
//   } catch (e) {
//     console.log(e.message);
//   }
// };

// // Run
// getProductDetails();
// getProductBag();

// // version 1
// `<div class="row">
// <div class="col-3">
// <img src="${product.prdImageUrl}"> </div>
// <div class="col-6">

// <h2>Product name: ${product.prdname}</h2>
// <h4 class="text-danger">${product.prdPrice} THB</h4>
// <p class="text-secondary">Size</p>
// <div><select name="size" size="1">
// <option value="default" selected>
// Please Select
// </option>

// //   <option value="Human Resources">
// //     Human Resources
// //   </option>
// //   <option value="Development">
// //     Development
// //   </option>
// //   <option value="Accounting">
// //     Accounting
// //   </option>
// //   <option value="Sales">
// //     Sales
// //   </option>
// </select> </div>
// <button class="btn btn-dark text-white"onclick="location.href = 'index2.html?id=${product.id}';">Add To Bag</button>
// <h2>Product name: ${product.txtDetail}</h2>

// <button class="btn btn-dark text-white"onclick="location.href = 'index2.html?id=${product.id}';">show detail</button>

// </div>
// </div>

// `
