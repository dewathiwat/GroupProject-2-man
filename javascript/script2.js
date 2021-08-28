// !page 2
let searchParams = new URLSearchParams(window.location.search).get("id");
var re = "";



const getProductOneDetail = async () => {
  console.log(searchParams);
  try {
    const response = await axios.get("https://6102d7aa79ed680017482359.mockapi.io/productdetail");
    let resulte = response.data.filter((data) => {
      return data.id == searchParams;
    });
     re = resulte;
    console.log(resulte);
    console.log('re',re)
    for (data of resulte) {
      ShowDetail(data,searchParams);
    }
  } catch (e) {
    console.log(e.message);
  }
};

getProductOneDetail();
let text = "";

async function ShowDetail(data,searchParams) {
  console.log("show", data);

  data.prdSize.forEach(myFunction);

  document.getElementById("Detail").innerHTML = `
<div class="card col-lg-7 col-xs-12">
<img class="pic_select card-img-top" src="${data.prdImageUrl}" alt="Card image cap">
</div>
</div>
<div class=" col-lg-4 col-xs-12">
<h2>Product name: ${data.prdname}</h2>
<h4 class="text-danger">${data.prdPrice} THB</h4>
<p class="text-secondary">Size</p>
<div><select name="size" size="1">
<option value="default" selected>
Please Select
</option>
${text}
</select> </div>
<br>
<button class="btn btn-dark text-white"  id="demo" onclick =${ await setlocal(re)}>Add To Bag</button>
<br>
<br>
<h3>Product Details</h3>
<h5>${data.txtDetail}</h5>
<button class="btndetail btn btn-secondary  text-dark" id="myBtn"> show detail</button>
</div>
</div>
</div>
        `
}







function myFunction(item) {
  text += `<option value="${item}" >
  ${item}
  </option> `
}

async function setlocal(data) {
  const oldProductCart = await JSON.parse(localStorage.getItem("dataproduct"))
  const newProductCart = data
  if(oldProductCart==null || localStorage.getItem("dataproduct")==null){
  let card=newProductCart;
  localStorage.setItem("dataproduct", JSON.stringify(card))
  alert('addproduct "Success1"')
  }else{
  let card=oldProductCart.concat(newProductCart)
  localStorage.setItem("dataproduct", JSON.stringify(card))
  alert('addproduct "Success2"')
}


  };
