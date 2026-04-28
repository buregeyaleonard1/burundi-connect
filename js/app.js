function addProduct() {
  let name = document.getElementById("name").value;
  let price = document.getElementById("price").value;

  let img1 = document.getElementById("img1").files[0];

  if (!img1) {
    alert("Shiramwo ifoto!");
    return;
  }

  let reader = new FileReader();

  reader.onload = function(e) {
    let product = {
      name: name,
      price: price,
      image: e.target.result
    };

    let products = JSON.parse(localStorage.getItem("products")) || [];
    products.push(product);

    localStorage.setItem("products", JSON.stringify(products));

    alert("Product added!");
  };

  reader.readAsDataURL(img1);
}
