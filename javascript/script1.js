// ? Form figma


// todo ocalStorage
//! Data Product









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
    console.log(response)
    document.getElementById("allProduct").innerHTML = response.data
      .map(
        (product) =>
          `
          <div class=" col-6 col-lg-4 col-xxl-3 mb-4">
                    <div class="card">
                    <img class="card-img-top" src="${product.prdImageUrl}" alt="Card image cap">
                    <div class="card-body">
    <h6 class="card-title">${product.prdname}</h6>
    <div class="price-add ">
    
    
    <li class="card-text text-danger">${product.prdPrice} THB</li>
    <li class="add btn btn-dark " onclick="location.href= 'page2.html?id=${product.id}'";>ADD</li>
    
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










