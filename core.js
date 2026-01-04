function getCart() {
    return JSON.parse(localStorage.getItem("cart") || "[]");
}

function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(product) {
    let cart = getCart();
    const found = cart.find(item => item.name === product.name);
    if (found) {
        found.qty = Number(found.qty) + Number(product.qty);
    } else {
        product.qty = Number(product.qty);
        cart.push(product);
    }
    saveCart(cart);
}

function isLogin() {
    return localStorage.getItem("isLogin") === "true";
}

function saveOrder(order) {
    let orders = JSON.parse(localStorage.getItem("orders") || "[]");
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));
}