"use strict"

// ==============================================================================

// Задача №1

// Дано в html: три елементи з класом item.
// При кліку на кожен з елементів додати клас active,
// при повторному кліку прибрати клас 

// Відповідь: 

document.addEventListener("click", documentAction);
function documentAction(event) {
	const targetElement = event.target;
	if (targetElement.classList.contains('item')){
		targetElement.classList.toggle('active');
	}
}

// ==============================================================================

// Задача №2

// Дано в css/scss: body прозорий
// При повному завантаженню сторінки додати клас до body який прибирає прозорість.

// Відповідь: 

window.addEventListener("load", pageLoaded);
function pageLoaded() {
	document.body.classList.add('loaded')
};

// ==============================================================================

// Задача №3

// Дано в html: header main footer
// При наведенні курсору на header змінювати колір фону у footer.
// Коли курсор йде з header повертати початковий фон для footer.

// Відповідь: 

const header = document.querySelector('.header');
const footer = document.querySelector('.footer');

header.addEventListener("mouseenter", hover);
function hover() {
	footer.style.backgroundColor = "red";
};

header.addEventListener("mouseleave", unhover);
function unhover() {
	footer.style.backgroundColor = "brown";
};

// ==============================================================================

// Задача №4

// Дано в html: текст, елемент з класом item, текст. Так, що елемент з класом item за межами в'юпотрта.
// Створити функцію яка будує інтервал який буде змінювати контент в елементі item виводячи цифру яка збільшується на одиницю: 1 2 3 ... і т.д.
// Затримка між зміною числа, та до якого числа має працювати інтервал має задаватись в дата атрибутах елемента item.
// Функція має запускатиcь коли ми доскролюємо до елементу item (його видно), і не запускатись повторно.

// Відповідь:

const item = document.querySelector('.item-new');

function interval(item) {
	const stop = parseInt(item.dataset.stop);
	const delay = parseInt(item.dataset.delay);
	let count = 1;
	const intervalFunc = setInterval(() => {
		item.textContent = count;
		if (count == stop) {
			clearInterval(intervalFunc);
		} else {
			count++;
		}
	}, delay)
};

const obsever = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			interval(entry.target);
			obsever.unobserve(entry.target);
		}
	})
})
obsever.observe(item);
// ==============================================================================
