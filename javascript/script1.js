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

async function getslid_show(){
  const response = await axios.get("https://6102d7aa79ed680017482359.mockapi.io/slider");
  console.log(response)

  document.getElementById('slid_img1').setAttribute("src", response.data[0].imageUrl)
  document.getElementById('slid_text1').innerHTML = response.data[0].sliderText

  document.getElementById('slid_img2').setAttribute("src", response.data[1].imageUrl)
  document.getElementById('slid_text2').innerHTML = response.data[1].sliderText

  document.getElementById('slid_img3').setAttribute("src", response.data[2].imageUrl)
  document.getElementById('slid_text3').innerHTML = response.data[2].sliderText

  document.getElementById('slid_img4').setAttribute("src", response.data[3].imageUrl)
  document.getElementById('slid_text4').innerHTML = response.data[3].sliderText

}


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
                    <img class="picAll card-img-top" src="${product.prdImageUrl}" alt="Card image cap">
                    <div class="card-body">
    <h6 class="card-title">${product.prdname}</h6>
    <br>
    <div class="row ">

    <div class="col-6 ">

    <p class="fs-5 text-danger">${product.prdPrice} THB</p>
    
    </div> 
    <div class="col-6 align-self-end">
   
    <button type="button" class="btn btn-secondary "  onclick="location.href= 'page2.html?id=${product.id}'";>ADD      </button>
    </div>   
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
getslid_show();









