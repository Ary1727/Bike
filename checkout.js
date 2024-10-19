document.addEventListener('DOMContentLoaded', () => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const totalPrice = parseFloat(localStorage.getItem('totalPrice')) || 0;
    const orderItemsList = document.getElementById('order-items');
    const orderTotal = document.getElementById('order-total');

    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ₹${item.price.toLocaleString('en-IN')}`;
        orderItemsList.appendChild(li);
    });

    orderTotal.textContent = totalPrice.toLocaleString('en-IN');
    document.getElementById('checkout-form').addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const address = document.getElementById('address').value;
        const city = document.getElementById('city').value;
        const state = document.getElementById('state').value;
        const zip = document.getElementById('zip').value;
        alert(`Thank you for your order, ${name}!\nYour order total is ₹${totalPrice.toLocaleString('en-IN')}.`);
        localStorage.removeItem('cartItems');
        localStorage.removeItem('totalPrice');
        window.location.href = 'bike.html';
    });
});
