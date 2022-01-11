//burger===================================================
$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__nav').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

//login-form===============================================
let formBtn = document.querySelector('.login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');

formBtn.addEventListener('click', () =>{
	loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
	loginForm.classList.remove('active');
});

//counter=======================================================
const counter = function () {
	const btns = document.querySelectorAll(".counter__btn");
 
	btns.forEach((btn) => {
	  btn.addEventListener("click", function () {
		 const direction = this.dataset.direction;
		 const inp = this.parentElement.querySelector(".counter__value");
		 const currentValue = +inp.value;
		 let newValue;
 
		 if (direction === "plus") {
			newValue = currentValue + 1;
		 } else {
			newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
		 }
 
		 inp.value = newValue;
	  });
	});
 };
 
 counter();
//==========================================================
