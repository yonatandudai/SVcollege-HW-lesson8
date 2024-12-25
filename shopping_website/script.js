"use strict";

const products = [
    {
        name: "Milk",
        description: "1 liter of fresh whole milk",
        price: 5.00
    },
    {
        name: "Bread",
        description: "Whole-grain bread loaf",
        price: 3.50
    },
    {
        name: "Eggs",
        description: "Carton of 12 large eggs",
        price: 12.00
    },
    {
        name: "Rice",
        description: "1 kg of white basmati rice",
        price: 10.00
    },
    {
        name: "Apples",
        description: "1 kg of fresh red apples",
        price: 7.00
    }
];

function filterProducts() {
    // Get the maximum price entered by the user
    const maxPrice = document.getElementById('priceInput').value;

    // Check if the product container already exists and fetch it if it does
    let productsContainer = document.getElementById('productsContainer');
    if (!productsContainer) {
        // Create the product container if it doesn't exist
        productsContainer = document.createElement('div');
        productsContainer.id = 'productsContainer';
        document.body.appendChild(productsContainer);
    }

    // Clear previous results
    productsContainer.innerHTML = '';

    // Filter products that are cheaper than the given price
    const cheaperProducts = products.filter(product => product.price <= maxPrice);
    
    // Go over the filtered products and display them
    cheaperProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.textContent = `${product.name}- Description: ${product.description}, Price: $${product.price}`;
        productsContainer.appendChild(productDiv);
    });
}