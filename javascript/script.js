// ? Form figma


// todo ocalStorage
//! Data Product
const dataJson = [
  {
    id: 1,
    prdname: "Nike Court Royale 2",
    prdPrice: "1900",
    prdImageUrl:
      "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_591,c_limit/c81e539d-03fb-451c-9edc-871c766f60e3/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%9C%E0%B8%B9%E0%B9%89-court-royale-2-W4s7w7.png",
  },
  {
    id: 2,
    prdname: "Nike Court Vision Low Premium",
    prdPrice: "2700",
    prdImageUrl:
      "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_591,c_limit/9ce3296a-ea97-4482-b16a-2c22195eb11d/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%9C%E0%B8%B9%E0%B9%89-court-vision-low-premium-F6vqsg.png",
  },
  {
    id: 3,
    prdname: "Nike Blazer Low '77 PRM",
    prdPrice: "3600",
    prdImageUrl:
      "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_591,c_limit/4d87680e-a278-47e8-b0d4-d6e76f924c4d/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%9C%E0%B8%B9%E0%B9%89-blazer-low-77-prm-pnHzBj.png",
  },
  {
    id: 4,
    prdname: "Nike Air Force 1 '07",
    prdPrice: "3500",
    prdImageUrl:
      "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_591,c_limit/3dec452a-bee1-46f8-be79-07c7d2e02576/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%9C%E0%B8%B9%E0%B9%89-air-force-1-07-Wv2j0C.png",
  },
  {
    id: 5,
    prdname: "Nike Venture Runner",
    prdPrice: "2300",
    prdImageUrl:
      "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_591,c_limit/e344cd6d-e020-4410-85bb-d56e2ef1282c/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%9C%E0%B8%B9%E0%B9%89-venture-runner-FVPSB9.png",
  },
  {
    id: 6,
    prdname: "Nike Air Max 90 SE",
    prdPrice: "5000",
    prdImageUrl:
      "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_591,c_limit/a0b7be44-7135-4303-852c-5830cbb815b0/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%9C%E0%B8%B9%E0%B9%89-air-max-90-se-d72VSR.png",
  },
  {
    id: 7,
    prdname: "Nike Air Force 1 '07 SE",
    prdPrice: "3800",
    prdImageUrl:
      "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_591,c_limit/71552a3c-4e47-4b6e-a835-3a55ef90e377/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%9C%E0%B8%B9%E0%B9%89-air-force-1-07-se-5BT500.png",
  },
  {
    id: 8,
    prdname: "Nike Air Max 90 SE",
    prdPrice: "3500",
    prdImageUrl:
      "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_591,c_limit/da79427b-35b4-4cc4-b2e8-2fbd5ef37779/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%9C%E0%B8%B9%E0%B9%89-air-max-90-se-PwbwNH.png",
  },
  {
    id: 9,
    prdname: "Nike Air Max 96 2 SE",
    prdPrice: "6100",
    prdImageUrl:
      "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_591,c_limit/98411ba5-9b91-47dc-b659-2ff564ce2a6a/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%9C%E0%B8%B9%E0%B9%89-air-max-96-2-se-mf60w3.png",
  },
  {
    id: 10,
    prdname: "Nike Waffle Trainer 2",
    prdPrice: "3600",
    prdImageUrl:
      "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_591,c_limit/ccbdc5da-324e-4b2a-8199-4cf4cd269e0a/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%9C%E0%B8%B9%E0%B9%89-waffle-trainer-2-VlSsZv.png",
  },
];

localStorage.setItem("dataJson", JSON.stringify(dataJson));

// แปลง Json ให้เป็น Text





//! page 1
//todo Slide Product
// const getProductSlide = async () => {
//   try {
//     const response = await axios.get(
//       "https://6102d7aa79ed680017482359.mockapi.io/slider"
//     );
//     document.getElementById("carouselExampleCaptions").innerHTML = response.data
//       .map(
//         (product) =>
//           `
//           <div class="carousel-indicators">
//           <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
//             aria-current="true" aria-label="Slide 1"></button>
//           <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
//             aria-label="Slide 2"></button>
//           <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
//             aria-label="Slide 3"></button>
//         </div>
       
//           <div class="carousel-item">
//             <img src="${product.prdImageUrl}" class="d-block carouselimg col-md-auto" alt="...">
//             <div class="carousel-caption d-none d-md-block">
//               <h5>Jordan Air NFH</h5>
//               <p>The Jordan Air NFH Lifestyle Shoe Sees A Crisp “Stealth” Colorway.</p>
//             </div>
//           </div>
      
//         <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
//           data-bs-slide="prev">
//           <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span class="visually-hidden">Previous</span>
//         </button>
      
//         <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
//           data-bs-slide="next">
//           <span class="carousel-control-next-icon" aria-hidden="true"></span>
//           <span class="visually-hidden">Next</span>
//         </button>
//         `
//       )
//       .join("");
//   } catch (e) {
//     console.log(e.message);
//   }
// };
// getProductSlide();

//todo All product
const getProductDetails = async () => {
  try {
    const response = await axios.get(
      "https://6102d7aa79ed680017482359.mockapi.io/productlist"
    );
    document.getElementById("allProduct").innerHTML = response.data
      .map(
        (product) =>
          `
          <div class="col-3 mb-4">
                    <div class="card">
                    <img class="card-img-top" src="${product.prdImageUrl}" alt="Card image cap">
                    <div class="card-body">
    <h6 class="card-title">${product.prdname}</h6>
    <div class="price-add">
    
    <li class="card-text text-danger">${product.prdPrice} THB</li>
    <li class="add btn btn-dark " onclick="location.href= 'index2.html?id=${product.id}'";>ADD</li>
    </div>
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



// !page 2
const getProductOneDetail = async () => {
  try {
    const response = await axios.get(
      "https://6102d7aa79ed680017482359.mockapi.io/productdetail"
    );
    document.getElementById("Detail").innerHTML = response.data
      .map(
        (product) =>
          `
      
<div class="col-6">
<img src="${product.prdImageUrl}"> </div>
<div class="col-6">

<h2>Product name: ${product.prdname}</h2>
<h4 class="text-danger">${product.prdPrice} THB</h4>
<p class="text-secondary">Size</p>
<div><select name="size" size="1">
<option value="default" selected>
Please Select
</option>

  <option value="Human Resources">
    Human Resources
  </option>
  <option value="Development">
    Development
  </option>
  <option value="Accounting">
    Accounting
  </option>
  <option value="Sales">
    Sales
  </option>



</select> </div>
<button class="btn btn-dark text-white"onclick="location.href = 'index2.html?id=${product.id}';">Add To Bag</button>
<h2>Product Details: ${product.txtDetail}</h2>

<button class="btn btn-secondary  text-dark"onclick="">show detail</button>

</div>
</div>


        `
      )
      .join("");
  } catch (e) {
    console.log(e.message);
  }
};
getProductOneDetail();





// !page 3

let searchParams = new URLSearchParams(window.location.search).get("id");

const getProductBag = async () => {
  try {
    const response = await axios.get(
      "https://6102d7aa79ed680017482359.mockapi.io/"
    );
    document.getElementById("test1").innerHTML = response.data
      .map(
        (product) =>
 `
<div class="row">
<div class="col-8">
<div class="col-4">
<img src="${product.prdImageUrl}"> </div>
 </div>
<div class="col-4">
 <h4 class="text-danger">${product.prdPrice} THB</h4>
 <h2>Product name: ${product.prdname}</h2>
 </div>

</div>

<div class="col-4">

<div class="row">
<h3>bag</h3><h3>bag</h3><h3>bag</h3><h3>bag</h3><h3>bag</h3>
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
getProductBag();


