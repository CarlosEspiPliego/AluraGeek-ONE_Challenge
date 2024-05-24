export const displayProducts = (products) => {
    const productsContainer = document.getElementById('products__container');
    productsContainer.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product__card');
        productCard.innerHTML = `
            <div class="card__img-container">
              <img
                src="${product.image_url}"
                alt="Product image: ${product.name}"
              />
            </div>
            <div class="card__body">
              <div class="name__container">
                <p class="name__product">${product.name}</p>
              </div>
              <div class="price__container">
                <p class="price__product"><b>$ ${product.price}</b></p>
                <i class="ti ti-trash icon_trash" id="icon_trash" onclick="onDeleteProduct(${product.id})"></i>
              </div>
            </div>
        `;

        productsContainer.appendChild(productCard);
    });
}