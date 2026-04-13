let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(title, price) {
    cart.push({ title, price, id: Date.now() });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(title + ' foi adicionado ao carrinho!');
}

function viewCart() {
    if (cart.length === 0) {
        alert('Seu carrinho está vazio');
        return;
    }
    
    let total = cart.reduce((sum, item) => sum + item.price, 0);
    let items = cart.map(item => item.title + ' - R$ ' + item.price.toFixed(2)).join('\n');
    alert('📋 CARRINHO:\n\n' + items + '\n\n💰 Total: R$ ' + total.toFixed(2));
}

function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
}
