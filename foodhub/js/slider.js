const slider = document.querySelector('.swiper-container');
const slider1 = document.querySelector('.swiper-container-1');

let mySwiper = new Swiper(slider, {
	slidesPerView: 3,
	spaceBetween: 40,
	loop: true,
	pagination: {
		el: '.pag-1',
		clickable: true,
		type: 'bullets',
	},
	autoplay: {
		delay: 2000,
	},
	breakpoints: {
		968: {
			slidesPerView: 3,
		},
		530: {
			slidesPerView: 2,
		},
		320: {
			slidesPerView: 1,
		},
	},
})

let mySwiper1 = new Swiper(slider1, {
	slidesPerView: 3,
	spaceBetween: 30,
	loop: true,
	pagination: {
		el: '.pag-2',
		clickable: true,
		type: 'bullets',
	},
	//autoplay: {
	//	delay: 2000,
	//},
	breakpoints: {
		968: {
			slidesPerView: 3,
		},
		530: {
			slidesPerView: 2,
		},
		320: {
			slidesPerView: 1,
		},
	},
})