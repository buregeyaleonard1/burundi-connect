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
        <p>${p.price} BIF</p>
      </div>
    `;
  });
}
