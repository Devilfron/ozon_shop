const cart = () => {
    const cartBtn = document.getElementById('cart')
    const cartModal = document.querySelector('.cart')
    const closeCartBtn = cartModal.querySelector('.cart-close')

    const openCart = () => {
        cartModal.style.display = 'flex'
    }

    const closeCart = () => {
        cartModal.style.display = ''
    }

    cartBtn.addEventListener('click', openCart)
    closeCartBtn.addEventListener('click', closeCart)
}

export default cart

// cartBtn.style.width = '10px'
// cartBtn.onclick = function() {
    // console.log('clicked');
    // openCart()
// }

// cartBtn.onclick = openCart



// closeCartBtn.onclick = function() {
//     console.log('first');
// }

// closeCartBtn.onclick = function() {
//     console.log('second');
// }

// closeCartBtn.onclick = function() {
//     console.log('third');
// }

// closeCartBtn.addEventListener('click', () => {
//     console.log('first');
// }

// closeCartBtn.addEventListener('click', () => {
//     console.log('second');
// }
// closeCartBtn.addEventListener('click', () => {
//     console.log('third');
// }

// closeCartBtn.onclick = closeCart
// console.dir(closeCartBtn);