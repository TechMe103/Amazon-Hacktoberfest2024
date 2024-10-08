
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        // Get the product details from the respective product card
        const productName = this.parentElement.querySelector('h1').textContent;
        const productPrice = this.parentElement.querySelector('.price').textContent;

        // Create a new list item for the cart
        const cartItem = document.createElement('li');
        cartItem.textContent = `${productName} - ${productPrice}`;

        // Append the new item to the cart
        const cartItems = document.getElementById('cartItems') || document.createElement('ul');
        if (!document.getElementById('cartItems')) {
            cartItems.id = 'cartItems';
            document.getElementById('cart').appendChild(cartItems);
        }

        cartItems.appendChild(cartItem);

        
        alert(`${productName} has been added to your cart!`);
    });
});
