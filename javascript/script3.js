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

const dataJson = localStorage.getItem("dataproduct");
    let obj =JSON.parse(dataJson)
    console.log(obj);
    document.getElementById("test1").innerText = obj.map((product) => { product.prdname })
    // obj.map((product) => { product.prdname })
    
    
   
  