function toggleMenu() {
  document.getElementById("sidebar").classList.toggle("active");
}

function go(page) {
  window.location.href = page;
}

// LOAD PRODUCTS
let list = document.getElementById("products");

if (list) {
  let products = JSON.parse(localStorage.getItem("products")) || [];

  products.forEach(p => {
    list.innerHTML += `
      <div class="product">
        <img src="${p.image}">
        <h4>${p.name}</h4>
        <p>${p.price} PI COIN</p>
      </div>
    `;
  });
}
function addProduct() {
  let name = document.getElementById("name").value;
  let price = document.getElementById("price").value;
  let img = document.getElementById("img").files[0];

  let reader = new FileReader();

  reader.onload = function(e) {
    let product = {
      name: name,
      price: price,
      image: e.target.result
    };

    let data = JSON.parse(localStorage.getItem("products")) || [];
    data.push(product);

    localStorage.setItem("products", JSON.stringify(data));
    alert("Saved!");
  };

  reader.readAsDataURL(img);
}
