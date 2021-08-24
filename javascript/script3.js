// !page 3

// let searchParams = new URLSearchParams(window.location.search).get("id");



const dataJson = localStorage.getItem("dataproduct");

const array1 =[{
     "id": 1,
      "prdname": "Nike Court Royale 2",
      "prdPrice": "1900",
      "prdSize": [
          "S",
          "M",
          "L",
          "XL"
      ],
      "prdImageUrl": "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_591,c_limit/c81e539d-03fb-451c-9edc-871c766f60e3/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%9C%E0%B8%B9%E0%B9%89-court-royale-2-W4s7w7.png",
      "txtDetail": "Nike Court Royale 2 ส่งตรงมาจากอดีต เฉลิมฉลอง Swoosh ครบรอบ 50 ปีปรับโฉมให้กับสตรีทแวร์คู่เก่งจากปลายยุค 70 ที่พิสูจน์แล้วว่าดีจริง โดยรุ่นในวันนี้โดดเด่นด้วยป้ายลิ้นรองเท้าย้อนยุค พร้อม Swoosh และลายตัวอักษร Nike แบบออริจินัลที่ด้านข้างประดับ Swoosh ขนาดใหญ่เสริมลุคคลาสสิก ขณะที่พื้นรองเท้าลายก้างปลาก็เพิ่มการยึดเกาะ"
  }
]



    // console.log(`datajson`, dataJson);
    // document.getElementById("test1").innerHTML = JSON.stringify(dataJson);

   var x= JSON.stringify(dataJson);

   var y= JSON.parse(x);

   console.log(y);
   console.log(x);

   let text = localStorage.getItem('dataproduct');


   var m= JSON.stringify(text);

  
array1.forEach(element => console.log(element));



  //  alert(localStorage.getItem('dataproduct'));

//    for(let i=0; i<localStorage.length; i++) {
//     let key = localStorage.key(i);

// alert(key)
//     // alert(`${key}: ${localStorage.getItem('dataproduct')}`);





//   }




   let obj = JSON.parse(text);
  //  document.getElementById("demo").innerHTML = text;
   document.getElementById("demo").innerHTML = text;
   document.getElementById("demo2").innerHTML = m;

  






  var result =obj.map(p =>({text:p.prdname}))
  console.log(result);
let test1 =  document.getElementById("test1");


// console.log(x);
// console.log(`xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`);
// console.log(y);



// function bag(data) {
    
//    test1.innerHTML = x.map(
//         (product) =>
//           `
//           <div class=" col-6 col-lg-4 col-xxl-3 mb-4">
//                     <div class="card">
//                     <img class="card-img-top" src="${product.prdImageUrl}" alt="Card image cap">
//                     <div class="card-body">
//     <h6 class="card-title">${product.prdname}</h6>
//     <div class="price-add ">
    
    
//     <li class="card-text text-danger">${product.prdPrice} THB</li>
//     <li class="add btn btn-dark " onclick="location.href= 'page2.html?id=${product.id}'";>ADD</li>
    
//     </div>  
//   </div>  
// </div>
// </div>
//         `
//       )
//       .join("");

// }



  


  

    