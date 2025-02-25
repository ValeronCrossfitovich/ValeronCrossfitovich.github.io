$(function () {

	//SVG Fallback
	if (!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function () {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function () { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function () {
			alert("Thank you!");
			setTimeout(function () {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if ($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch (err) {

	};

	$("img, a").on("dragstart", function (event) { event.preventDefault(); });

});

$(window).load(function () {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
const burger = document?.querySelector("[data-burger]");
const nav = document?.querySelector("[data-nav]");
const navItems = nav?.querySelectorAll("a");
const body = document.body;
const header = document?.querySelector(".header");
const headerHeight = header.offsetHeight;
console.log(headerHeight);
document.querySelector(":root").style.setProperty("--header-height", `${headerHeight}px`);

burger?.addEventListener("click", () => {
	body.classList.toggle("stop-scroll");
	burger?.classList.toggle("burger--active");
	nav?.classList.toggle("nav--visible");
});

navItems.forEach(el => {
	el.addEventListener("click", () => {
		body.classList.remove("stop-scroll");
		burger?.classList.remove("burger--active");
		nav?.classList.remove("nav--visible");
	});
});
const swiper = new Swiper('.swiper', {
	autoplay: {
		delay: 4000,
	},

	speed: 400,
	spaceBetween: 100,
	loop: true,

	pagination: {
		el: '.swiper-pagination',
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
//tabs
document.addEventListener('DOMContentLoaded', () => {
	const tabs = document.querySelector('.tabs');
	const tabsBtn = document.querySelectorAll('.tabs__btn');
	const tabsContent = document.querySelectorAll('.tabs__content');

	if (tabs) {
		tabs.addEventListener('click', (e) => {
			if (e.target.classList.contains('tabs__btn')) {
				const tabsPath = e.target.dataset.tabsPath;
				tabsBtn.forEach(el => { el.classList.remove('tabs__btn--active') });
				document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('tabs__btn--active');
				tabsHandler(tabsPath);
			}

			if (e.target.classList.contains('tabs__arrow--prev')) {
				let activeBtn = document.querySelector('.tabs__btn--active');
				let activeParent = activeBtn.closest('.tabs__item');
				let previousParent = activeParent.previousElementSibling;

				if (previousParent) {
					let prevActive = previousParent.querySelector('.tabs__btn')
					tabsBtn.forEach(el => { el.classList.remove('tabs__btn--active') });
					prevActive.classList.add('tabs__btn--active');

					let path = prevActive.dataset.tabsPath;
					tabsHandler(path);
				}
			}
		});
	}

	const tabsHandler = (path) => {
		tabsContent.forEach(el => { el.classList.remove('tabs__content--active') });
		document.querySelector(`[data-tabs-target="${path}"]`).classList.add('tabs__content--active');
	};
});
