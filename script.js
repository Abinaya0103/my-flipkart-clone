                                                // Get all "Add to Cart" buttons and the cart count element
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
const cartCountElement = document.getElementById('cart-count');

// Keep track of how many items are in the cart
let cartCount = 0;

// Loop through every Add to Cart button and attach a click listener
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    cartCount++;
    cartCountElement.textContent = cartCount;
  });
});