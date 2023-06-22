const sellers = [
    {
        name: "Big Cockenson",
        products: [
            {
                name: "Burritos",
                description: "Descripción de los burricos",
                price: 10.99,
                image: "burrito.jpeg"
            },
        ]
    },

];

function generateSellerList() {
    const sellerList = document.getElementById('seller-items');

    sellers.forEach(seller => {
        const sellerItem = document.createElement('li');
        sellerItem.classList.add('seller-item');

        const sellerName = document.createElement('h3');
        sellerName.textContent = seller.name;

        const productContainer = document.createElement('div');
        seller.products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h4>${product.name}</h4>
                <p>${product.description}</p>
                <p>Precio: $${product.price}</p>
            `;
            productContainer.appendChild(productItem);
        });

        sellerItem.appendChild(sellerName);
        sellerItem.appendChild(productContainer);
        sellerList.appendChild(sellerItem);
    });
}

// Generar la lista de vendedores y productos al cargar la página
window.addEventListener('load', generateSellerList);
