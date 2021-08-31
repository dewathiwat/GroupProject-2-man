let searchParams = new URLSearchParams(window.location.search).get("id");
var re = "";

const getProductOneDetail = async () => {
  console.log(searchParams);
  try {
    const response = await axios.get(
      "https://6102d7aa79ed680017482359.mockapi.io/productdetail"
    );
    let resulte = response.data.filter((data) => {
      return data.id == searchParams;
    });
    re = resulte;
    console.log(resulte);
    console.log("re", re);
    for (data of resulte) {
      ShowDetail(data, searchParams);
    }
  } catch (e) {
    console.log(e.message);
  }
};
getProductOneDetail();

async function setlocal(data) {
  const oldProductCart = await JSON.parse(localStorage.getItem("dataproduct"));
  const newProductCart = data;
  if (oldProductCart == null || localStorage.getItem("dataproduct") == [null]) {
    let card = newProductCart;
    localStorage.setItem("dataproduct", JSON.stringify(card));
    alert('addproduct "Success1"');
  } else {
    let card = oldProductCart.concat(newProductCart);
    localStorage.setItem("dataproduct", JSON.stringify(card));
    alert('addproduct "Success2"');
  }
}

async function ShowDetail(data, searchParams) {
  let Size = "<option value=default selected> Please Select </option> "
  function myFunction(item) {
    Size += `<option value="${item}" >
          ${item}
          </option> `;
  }
  console.log("show", data);
  await data.prdSize.map(myFunction);
  
  document.getElementById('prdImg').innerHTML = `<img class="pic_select card-img-top" src="${data.prdImageUrl}" alt="Card image cap">`
  document.getElementById('prdName').innerHTML = data.prdname
  document.getElementById('prdPrice').innerHTML =`${data.prdPrice} THB`
  document.getElementById('prdSize').innerHTML= Size
  document.getElementById('prdDetail').innerHTML=data.txtDetail
  document.getElementById('AddtoBag').onclick=()=>{ setlocal(re) }


}
