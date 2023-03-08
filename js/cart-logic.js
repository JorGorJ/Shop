const cartBtn = document.querySelector('.navbar__details-cart')
const cart = document.querySelector('.navbar__cart-container')

const toggleCartview = () => {
	if (cart.classList.contains('active')) {
		cart.classList.remove('view')
		setTimeout(() => {
			cart.classList.remove('active')
		}, 100)
	} else {
		cart.classList.toggle('active')
		setTimeout(() => {
			cart.classList.toggle('view')
		}, 50)
	}
}

cartBtn.addEventListener('click', toggleCartview)


