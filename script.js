
const cart = [];

function renderProducts() {
  const container = document.getElementById("product-list");
  products.forEach(product => {
    const el = document.createElement("div");
    el.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p><strong>${product.price.toFixed(2)} zł</strong></p>
      <button onclick='addToCart(${JSON.stringify(product)})'>Dodaj do koszyka</button>
    `;
    container.appendChild(el);
  });
}

function addToCart(product) {
  cart.push(product);
  renderCart();
}

function renderCart() {
  const container = document.getElementById("cart-items");
  container.innerHTML = "";
  cart.forEach(item => {
    container.innerHTML += `<div>${item.name} - ${item.price.toFixed(2)} zł</div>`;
  });
  updateTotal();
}

function updateTotal() {
  const shipping = parseFloat(document.getElementById("shipping").value);
  const total = cart.reduce((sum, item) => sum + item.price, 0) + shipping;
  document.getElementById("total-price").textContent = `${total.toFixed(2)} zł`;
}

renderProducts();
