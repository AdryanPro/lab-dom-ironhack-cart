// ITERATION 1

const { product } = require("puppeteer");

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  
  const priceValue = product.querySelector('.price span');
  const price = Number(priceValue.innerHTML);
  //console.log(price);

  const quantityValue = product.querySelector('.quantity input');
  const quantity = Number(quantityValue.value);
  //console.log(quantity);

  const subtotal = product.querySelector('.subtotal span');
  const subtotalValues = price * quantity;
  subtotal.innerHTML = subtotalValues;
  //console.log(subtotalValues);
  
  return subtotalValues;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  //console.log('.product');
  // end of test
  // ITERATION 2
  //... your code goes here
  
  const allsubtotal = document.querySelectorAll('.product');
  let finalTotal = 0;
  allproducts.forEach(element => {
    
  });
  console.log(finalTotal);

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
