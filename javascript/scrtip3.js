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
           
  
          `
        )
        .join("");
    } catch (e) {
      console.log(e.message);
    }
  };
  getProductDetails();
  getslid_show();
  