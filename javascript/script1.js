myStorage = window.localStorage;
async function getslid_show(){
  const response = await axios.get("https://6102d7aa79ed680017482359.mockapi.io/slider");
  console.log('slide',response)

  let slide = document.getElementById('slideshow').innerHTML = response.data.map((p)=>
    `<div class="carousel-item "id="${p.id}">
      <img src="${p.imageUrl}" class="d-block w-100" >
      <div class="carousel-caption d-none d-md-block">
        <h5></h5>
        <p >${p.sliderText}</p>
      </div>
    </div>`
  ).join("");
   let ac = document.getElementById('1')
   ac.classList.add('active')

}


//todo All product
const getProductDetails = async () => {
  try {
    const response = await axios.get("https://6102d7aa79ed680017482359.mockapi.io/productlist");
    console.log(response)
    document.getElementById("allProduct").innerHTML = response.data.map((product) => 
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









