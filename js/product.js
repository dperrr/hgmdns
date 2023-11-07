const increaseQuantityButton = document.querySelector('.increase-quantity');
const decreaseQuantityButton = document.querySelector('.decrease-quantity');
const quantityDisplay = document.querySelector('.quantity-display');
const addToCart = document.querySelector('.add-to-cart-btn');

addToCart.addEventListener('click', () => {

});



function addToCartHTML(){
  
}

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


//RETRIEVE THE WISHLISH COUNT
document.addEventListener('DOMContentLoaded', function() {

  const savedHeartCount = JSON.parse(localStorage.getItem('heartCount'));

  
  if (savedHeartCount !== null) {
    heartCount = savedHeartCount;
  }

  const wishlistCount = document.querySelector('.wish-list');
  if(heartCount > 0){
    wishlistCount.classList.add('flex');
    wishlistCount.classList.remove('hidden');
    wishlistCount.textContent = heartCount;
  }else{
    wishlistCount.classList.add('hidden');
  }
});



const cart = document.querySelector('.cart');
const shoppingCartIcon = document.querySelector('.fa-shopping-cart');
const close = document.querySelector(".close-btn");

shoppingCartIcon.addEventListener('click', () => {
  if (cart.style.right === '-150%') {
    cart.style.right = '0';
  } else {
    cart.style.right = '-150%';
  }
});

close.addEventListener('click', () => {
  cart.style.right = '-150%';
});






//FUNCTION FOR SIZES BUTTONS
function setupSizeSelection() {

  const sizeButtons = document.querySelectorAll('.sizes button');

  
  const sizeSelectedElement = document.getElementById('size-selected');

  sizeButtons.forEach(button => {
    button.addEventListener('click', () => {
     
      const selectedSize = button.getAttribute('data-size');

    
      sizeSelectedElement.textContent = selectedSize;
    });
  });
}


setupSizeSelection();
