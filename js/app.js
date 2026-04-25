function toggleMenu() {
  const menu = document.getElementById("menu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}
const products = [
  {
    seller: "Jean",
    name: "Toyota Car",
    price: "5000$",
    address: "Bujumbura",
    category: "Imodoka",
    stock: 3,
    images: [
      "img/car1.jpg",
      "img/car2.jpg",
      "img/car3.jpg",
      "img/car4.jpg"
    ]
  },
  {
    seller: "Amina",
    name: "Nike Shoes",
    price: "50$",
    address: "Gitega",
    category: "Ibirato",
    stock: 10,
    images: [
      "img/shoes1.jpg",
      "img/shoes2.jpg",
      "img/shoes3.jpg",
      "img/shoes4.jpg"
    ]
  }
];const partners = [
  { name: "Yego Transport", type: "Transport" },
  { name: "Quick Delivery", type: "Delivery" }
];function loadProducts() {
  const container = document.getElementById("products");

  let html = "<h2>Products</h2>";

  products.forEach(p => {
    html += `
      <div style="border:1px solid #ccc; margin:10px; padding:10px;">
        <h3>${p.name}</h3>
        <p>Seller: ${p.seller}</p>
        <p>Price: ${p.price}</p>
        <p>Location: ${p.address}</p>
        <p>Category: ${p.category}</p>
        <p>Stock: ${p.stock}</p>

        <img src="${p.images[0]}" width="100"/>

        <br><br>
        <button onclick="order('${p.name}')">Order</button>
      </div>
    `;
  });

  container.innerHTML = html;
}function order(productName) {
  const partner = partners[Math.floor(Math.random() * partners.length)];

  alert(
    "Commande yawe ya " + productName +
    " iriko irategurwa 🚚\n" +
    "Izoshikirizwa na: " + partner.name
  );
}
