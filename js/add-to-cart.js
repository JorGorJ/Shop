const quantityBtns = document.querySelectorAll('.quantity-btn')
const productsQuantity = document.querySelector('.quantity__number-amount')
const productPrice = document.querySelector('.price')
const productName = document.querySelector('.product-title')
const cartContents = document.querySelector('.cart__contents')
const thumbnail = document.querySelector('.first-thumbnail')
const btnAddToCart = document.querySelector('.product-add')

let amountProduct = 1

const amountMenage = btns => {
	let amountProduct = Number(productsQuantity.textContent)
	if (btns.target.classList.contains('quantity__more')) {
		amountProduct++
		productsQuantity.textContent = amountProduct
	} else if (btns.target.classList.contains('quantity__less') && amountProduct != 0) {
		amountProduct--
		productsQuantity.textContent = amountProduct
	}
}

const productDetails = {
	img: thumbnail.src,
	name: productName.textContent,
	price: Number(productPrice.firstChild.textContent.replace('$', '').trim()),
	amount: amountProduct,
	trashIcon: './images/icon-delete.svg',
	id: 1,
}

const productClass = {
	mainContainer: 'product',
	textContainer: 'product__text',
	image: 'product__img',
	name: 'product__text-name',
	price: 'product__text-price',
	fullPrice: 'full-amount',
	trashBtn: 'product__remove',
	trashIcon: 'product__remove-trash-icon',
}

const addToCart = (item, classes) => {
	const mainContainer = document.createElement('div')
	mainContainer.classList.add(classes.mainContainer)

	const containerImage = document.createElement('div')
	containerImage.classList.add(classes.image)

	const image = document.createElement('img')
	image.src = item.img

	containerImage.appendChild(image)
	mainContainer.appendChild(containerImage)

	const textContainer = document.createElement('div')
	textContainer.classList.add(classes.textContainer)

	const productName = document.createElement('p')
	productName.classList.add(classes.name)
	productName.textContent = item.name

	const price = document.createElement('p')
	price.classList.add(classes.price)
	price.textContent = '$' + item.price + '.00 ' + 'x ' + item.amount + ' '

	const fullPrice = document.createElement('strong')
	fullPrice.classList.add(classes.fullPrice)
	fullPrice.textContent = '$' + item.price * item.amount + '.00'

	textContainer.appendChild(productName)
	price.appendChild(fullPrice)
	textContainer.appendChild(price)
	mainContainer.appendChild(textContainer)

	const trashBtn = document.createElement('button')
	trashBtn.classList.add(classes.trashBtn)

	const trashImg = document.createElement('img')
	trashImg.classList.add(classes.trashIcon)
	trashImg.src = item.trashIcon

	trashBtn.appendChild(trashImg)
	mainContainer.appendChild(trashBtn)

	cartContents.append(mainContainer)

	console.log('test')
}

btnAddToCart.addEventListener('click', addToCart(productDetails, productClass))

quantityBtns.forEach(btn => btn.addEventListener('click', amountMenage))
