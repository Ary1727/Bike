const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
let totalPrice = parseFloat(localStorage.getItem('totalPrice')) || 0;
const products = document.querySelectorAll('.add-to-cart');
const cartItemsList = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');
products.forEach(product => {
    product.addEventListener('click', () => {
        const productId = product.getAttribute('data-id');
        const productName = product.closest('.card-body').querySelector('.card-title').textContent;
        const productPrice = parseFloat(product.closest('.card-body').querySelector('.card-text').textContent.replace('Price: ₹', ''));

        const cartItem = {
            id: productId,
            name: productName,
            price: productPrice
        };

        cartItems.push(cartItem);
        totalPrice += productPrice;

        updateCart();
    });
});
function updateCart() {
    cartItemsList.innerHTML = '';
    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ₹${item.price.toLocaleString('en-IN')}`;
        cartItemsList.appendChild(li);
    });

    totalPriceElement.textContent = totalPrice.toLocaleString('en-IN');
    saveCartToLocalStorage();
}
function saveCartToLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    localStorage.setItem('totalPrice', totalPrice.toString());
}
document.addEventListener('DOMContentLoaded', updateCart);
document.getElementById('checkout').addEventListener('click', () => {
    if (cartItems.length === 0) {
        alert('Your cart is empty!');
    } else {
        alert('Proceeding to checkout...');
        localStorage.removeItem('cartItems');
        localStorage.removeItem('totalPrice');
        cartItems.length = 0;
        totalPrice = 0;
        updateCart();
    }
});
document.getElementById('logout-btn').addEventListener('click', function () {
    sessionStorage.removeItem('loggedIn');
    window.location.href = 'login.html';  
});
