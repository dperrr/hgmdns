async function product() {
  
  const response = await fetch("product.json");
  const productItem = await response.json();
  displayProduct(productItem);
}



product();


// NEW ARRIVALS RENDERING
function displayProduct(product) {

  let productHtml = "";

  for(let i = 0; i < product.length; i++){
      
      const {
          name,
          productID,
          price,
          image,
          color,
          image_gallery

      } = product[i];

      let productItem = ` <div class="shadow-lg style-product">
      <!-- SHIRT IMAGE -->
      <div class="relative">
        <a href="product.html?product=${i}">
          <img src="${image}" alt="TSHIRT-1" class="rounded-tl-lg rounded-tr-lg">
         
        </a>
         
        <button class="w-7 h-7 absolute top-0 right-0 mt-2 mr-2 text-1xl lg:text-2xl ">
        <i class="far fa-heart wishlist"></i>
        </button>              
      </div>

      <!-- SHIRT COLOR -->
      <div class="p-3 mt-3 flex flex-row space-x-3">
          ${
              color.map(index => `<div class="w-4 h-4 ${index}"></div>`).join("")
          }
          
      </div>

      <!-- SHIRT DETAILS -->
      <div class="mt-2 p-3 space-y-3">
        <h3><a href="" class="text-gray-500">Men</a></h3>
        <h2 class="lg:text-3xl text-sm md:text-2xl">${name}</h2>
        <h3 class="font-semibold"><i class="fa-solid fa-peso-sign">${price}</i></h3>
      </div>
      <!-- RATINGS -->
      <div class="p-3 flex flex-row space-x-2">
        <i class="fa-solid fa-star text-yellow-300"></i>
        <i class="fa-solid fa-star text-yellow-300"></i>
        <i class="fa-solid fa-star text-yellow-300"></i>
        <i class="fa-solid fa-star text-yellow-300"></i>
        <i class="fa-regular fa-star text-yellow-300"></i>
        <span>(804)</span>
      </div>
    </div>`

    productHtml += productItem;

    
  };

  document.getElementById('new-arrivals').innerHTML = productHtml;
  
    const wishlist = document.querySelectorAll('.wishlist');
  wishlist.forEach(button => {
    button.addEventListener('click', () => {
      if (button.classList.contains('far')) {
        button.classList.remove('far');
        button.classList.add('fas');
        button.classList.toggle('wishlist-active');
      }else{
        button.classList.add('far');
        button.classList.remove('fas');
        button.classList.toggle('wishlist-active');
      }
    });
  });



}

const cart = document.querySelector('.cart');


const shoppingCartIcon = document.querySelector('.fa-shopping-cart');


shoppingCartIcon.addEventListener('click', () => {
  
  cart.classList.toggle('hidden');
});


