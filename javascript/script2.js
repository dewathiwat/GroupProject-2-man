// !page 2
let searchParams = new URLSearchParams(window.location.search).get("id");
const getProductOneDetail = async () => { 
  console.log(searchParams)
  try {
    const response = await axios.get(
      "https://6102d7aa79ed680017482359.mockapi.io/productdetail"
    );
    let resulte = response.data.filter((data) =>{
      return data.id == searchParams
    })
    console.log(resulte)
    for(data of resulte){
        ShowDetail(data)
    }

    
      
      
  } catch (e) {
    console.log(e.message);
  }
};
getProductOneDetail();

function ShowDetail(data){
    document.getElementById("Detail").innerHTML =
          `
      
<div class="col-6">
<img src="${data.prdImageUrl}"> </div>
<div class="col-6">

<h2>Product name: ${data.prdname}</h2>
<h4 class="text-danger">${data.prdPrice} THB</h4>
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
<button class="btn btn-dark text-white"onclick="location.href = 'index2.html?id=${data.id}';">Add To Bag</button>
<h2>Product Details: ${data.txtDetail}</h2>

<button class="btn btn-secondary  text-dark"onclick="">show detail</button>

</div>
</div>


        `
}
