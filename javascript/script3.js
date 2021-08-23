// !page 3

// let searchParams = new URLSearchParams(window.location.search).get("id");

// const getProductBag = async () => {
//     try {
//       const response = await axios.get(
//         "https://6102d7aa79ed680017482359.mockapi.io/"
//       );
//       document.getElementById("test1").innerHTML = response.data
//         .map(
//           (product) =>
//    `
//   <div class="row">
//   <div class="col-8">
//   <div class="col-4">
//   <img src="${product.prdImageUrl}"> </div>
//    </div>
//   <div class="col-4">
//    <h4 class="text-danger">${product.prdPrice} THB</h4>
//    <h2>Product name: ${product.prdname}</h2>
//    </div>
  
//   </div>
  
//   <div class="col-4">
  
//   <div class="row">
//   <h3>bag</h3><h3>bag</h3><h3>bag</h3><h3>bag</h3><h3>bag</h3>
//   </div>
//   </div>
//   </div>
//           `
//         )
//         .join("");
//     } catch (e) {
//       console.log(e.message);
//     }
//   };
//   getProductBag();
 output =document.getElementById('output')
const dataJson = localStorage.getItem("dataproduct");
    let obj =JSON.parse(dataJson)
    console.log(obj);
    count(obj)

    
      
    
function count (myObj){
    
    for (let x in myObj) {

      addtext(myObj[x])
    }
    
    }

    function addtext(data) {
        let Allmight = document.createElement('div')
        Allmight.classList.add('row')
        let one = document.createElement('div')
        one.classList.add('col-4')
        let two = document.createElement('div')
        two.classList.add('col-8')
        let img = document.createElement('img')
        img.classList.add("card-img")
        let imgname = data.prdImageUrl
        img.setAttribute('src', imgname)
    
        let inone = document.createElement('div')
        inone.classList.add("card-body")
        let H5 = document.createElement('h5')
        H5.classList.add("card-title")
        let name = data.prdname
        H5.innerHTML = name
        inone.appendChild(H5)   
        one.appendChild(img)
        two.appendChild(inone)
        Allmight.appendChild(one)
        Allmight.appendChild(two)
        output.appendChild(Allmight)
    }
    
   
  