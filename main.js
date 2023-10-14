async function product() {
    const response = await fetch("product.json");
    const productItem = await response.json();
    displayProduct(productItem);
}


product();

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

        let productItem = ` <div class="shadow-lg">
        <!-- SHIRT IMAGE -->
        <div class="relative">
          <a href="product.html?product=${i}">
            <img src="${image}" alt="TSHIRT-1" class="rounded-tl-lg rounded-tr-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 absolute top-0 right-0 mt-2 mr-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>                
          </a>
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
          <h3 class="font-semibold">${price}</h3>
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
}