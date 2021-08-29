

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



  function myFunction(item) {
    text += `<option value="${item}" >
    ${item}
    </option> `
  }


  function count(myObj) {
    for (let x in myObj) {
      if(myObj[x]){
          addtext(myObj[x],x);
      }
      
    }
    addpay()
  }
  async function addtext(data,searchParams) {
  let divAll=document.getElementById("demo")
let divPic=document.createElement("div");
divPic.classList.add("card")
divPic.classList.add("col-lg-7")
divPic.classList.add("col-xs-12")
let imgPrd=document.createElement("img")
imgPrd.setAttribute("src",data.prdImageUrl)
imgPrd.classList.add("pic_select")
imgPrd.classList.add("card-img-top")

divCon=document.createElement("div")
divCon.classList.add("col-lg-4")
divCon.classList.add("col-xs-12")
let prdName=document.createElement("h2")
prdName.textContent= "Product name: "
let prdPrice=document.createElement("h4")
prdPrice.classList.add("text-danger")
let tPrice = "THB";
prdPrice.textContent=tPrice
let pSize = document.createElement("p")
pSize.classList.add("text-secondary")
pSize.textContent="Size"
let optionSize = document.createElement("option")
let selectSize = document.createElement("select")
selectSize.setAttribute("name","size")
selectSize.setAttribute("size","1")


optionSize.setAttribute("value","default")
optionSize.classList.add("selected")
optionSize.textContent="Pleases Select"

let bttAddBag =document.createElement("button")
bttAddBag.classList.add("btn")
bttAddBag.classList.add("btn-dark")
bttAddBag.classList.add("text-white")

bttAddBag.setAttribute("id","addToBag")
bttAddBag.textContent="Add To Bag"
bttAddBag.setAttribute("id","myBtn")
let tPrdDetail =document.createElement("h3")
tPrdDetail.textContent="Product Details";


let bttShowDetai = document.createElement("button")
bttShowDetai.classList.add("btndetail")
bttShowDetai.classList.add("btn")
bttShowDetai.classList.add("btn-secondary")
bttShowDetai.classList.add("text-dark")


bttShowDetai.textContent="Show detail";





divPic.appendChild(imgPrd);
divAll.appendChild(divPic);
divPic.appendChild(imgPrd)
divAll.appendChild(divCon)
divCon.appendChild(prdName)
divCon.appendChild(prdPrice)
divCon.appendChild(pSize)
divCon.appendChild(selectSize)
selectSize.appendChild(optionSize)
divCon.appendChild(bttAddBag)
divCon.appendChild(tPrdDetail)
divCon.appendChild(bttShowDetai)



}
