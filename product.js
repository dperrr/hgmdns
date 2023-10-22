const increaseQuantityButton = document.querySelector('.increase-quantity');
const decreaseQuantityButton = document.querySelector('.decrease-quantity');
const quantityDisplay = document.querySelector('.quantity-display');

increaseQuantityButton.addEventListener('click', () => {
  let quantity = parseInt(quantityDisplay.innerHTML);
  quantityDisplay.innerHTML = quantity + 1;
  decreaseQuantityButton.disabled = false; 
});

decreaseQuantityButton.addEventListener('click', () => {
  let quantity = parseInt(quantityDisplay.innerHTML);
  if (quantity > 0) {
    quantityDisplay.innerHTML = quantity - 1;
  }
  if (quantity === 1) {
    decreaseQuantityButton.disabled = true;
  }
});

async function product() {
  const response = await fetch("product.json");
  const productItem = await response.json();

  const productID = new URLSearchParams(location.search).get('product');
  const selectedProduct = productItem[productID];

  displayProduct(selectedProduct);
}

function displayProduct(productItem) {
  const shirtPic = document.getElementById('shirt-pic');
  const shirtName = document.getElementById('shirt-name');
  const shirtPrice = document.getElementById('shirt-price');

  const { name, price, image } = productItem;

  shirtPic.src = image;
  shirtName.innerHTML = name;
  shirtPrice.innerHTML = price;
}

product();



//  QUANTITY INCREAS
const cart = document.querySelector('.cart');
const shoppingCartIcon = document.querySelector('.fa-shopping-cart');
shoppingCartIcon.addEventListener('click', () => {
  cart.classList.toggle('hidden');
});
document.querySelector('.cart').addEventListener('click', () => {
  cart.classList.add('hidden');
});