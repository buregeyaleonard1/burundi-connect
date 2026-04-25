function toggleMenu() {
  const menu = document.getElementById("menu");

  if (menu.style.left === "0px") {
    menu.style.left = "-250px";
  } else {
    menu.style.left = "0px";
  }
}
.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #0a1f44;
  color: white;
  padding: 10px;
}

.icons span {
  font-size: 24px;
  cursor: pointer;
}

.content {
  padding: 10px;
}

.card {
  border: 1px solid #ccc;
  padding: 15px;
  margin: 10px;
}
