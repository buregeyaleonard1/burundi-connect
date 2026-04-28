function toggleMenu() {
  const menu = document.getElementById("menu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}
function addProduct(e) {
  e.preventDefault();

  const newProduct = {
    seller: document.getElementById("seller").value,
    name: document.getElementById("name").value,
    price: document.getElementById("price").value,
    address: document.getElementById("address").value,
    category: document.getElementById("category").value,
    stock: document.getElementById("stock").value,
    images: [
      document.getElementById("img1").value,
      document.getElementById("img2").value,
      document.getElementById("img3").value,
      document.getElementById("img4").value
    ]
  };

  products.push(newProduct);

  alert("Product added successfully ✅");

  loadProducts();
}
