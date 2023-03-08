const sliderBtns = document.querySelectorAll('.arrows-btn')
const images = document.querySelectorAll('.product-img')
const slider = document.querySelector('.images-product')

let imagesAmount = []
let currentImage = 0

for (let i = 0; i < images.length; i++) {
	imagesAmount.push(`${i}`)
}

const sliderNavigation = button => {
	if (button.target.classList.contains('arrow-next')) {
		currentImage < 3 ? currentImage++ : (currentImage = 0)
		slider.style.transform = `translateX(-${imagesAmount[currentImage]}00%)`
	} else if (button.target.classList.contains('arrow-previous')) {
		currentImage > 0 ? currentImage-- : (currentImage = imagesAmount.length - 1)
		slider.style.transform = `translateX(-${imagesAmount[currentImage]}00%)`
	}
}

sliderBtns.forEach(btn => btn.addEventListener('click', sliderNavigation))
