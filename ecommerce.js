<script>
    // Track cart count
    let cartCount = 0;

    // Get all add-to-cart buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart-button');

    // Get cart count element
    const cartCountElement = document.getElementById('cart-count');

    // Attach click event to each button
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            cartCount++; // Increment cart count
            cartCountElement.textContent = `(${cartCount})`; // Update display
            alert("Item added to cart!"); // Feedback to user
        });
    });
</script>
