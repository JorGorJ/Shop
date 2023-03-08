const lightBox = document.querySelector('.navbar__lightbox')
const openBtn = document.querySelector('.navbar__elements-burger')
const closeBtn = document.querySelector('.navbar__mobile-close')
const MenuMobile = document.querySelector('.navbar__mobile')

const closeItems = [closeBtn, lightBox]

const openMenuOperation = () => {
	lightBox.classList.add('active')
	setTimeout(() => {
		lightBox.classList.add('show-lightbox')
	}, 50)
	MenuMobile.classList.add('open-menu')
}

const closeMenuOperation = () => {
	lightBox.classList.remove('active')
	setTimeout(() => {
		lightBox.classList.remove('show-lightbox')
	}, 100)
	MenuMobile.classList.remove('open-menu')
}

closeItems.forEach(closeItem => closeItem.addEventListener('click', closeMenuOperation))
openBtn.addEventListener('click', openMenuOperation)
