"use strict"

// ==============================================================================

// Задача №1

// Отримати в константу елемент <body>

// Відповідь: 

const bodyElement = document.body;
console.log(bodyElement);

// ==============================================================================

// Задача №2

// Написати функцію, яка додає в <body> список UL
// з певною кількістю LI (кількість має передаватись як параметр функції, також мати значення за замовченням)

// Відповідь: 

function insertList(count = 5) {
	const listElement = document.createElement('ul')
	for (let i = 1; i <= count; i++) {
		const itemElement = document.createElement('li')
		listElement.append(itemElement);
	}
	bodyElement.insertAdjacentElement("afterbegin", listElement);
}

insertList(3);

// ==============================================================================

// Задача №3

// Додати до елементу <body> класс loaded.
// Потім перевірити чи є клас loaded у елемента <body>
// і, якщо є, додати стиль кольору тексту зелений.


// Відповідь: 

bodyElement.classList.add('loaded');
if (bodyElement.classList.contains('loaded')){
	bodyElement.style.color = "green";
};

// ==============================================================================

// Задача №4

// Дано в html: три елементи з класом item.
// Треба отримати ці елементи в константу, кожному додати клас active, 
// та перезаписати контент всередені кожного елемента на "Елемент №(тут порядковий номер елементу починаючи з 1)".


// Відповідь:

const someElement = document.querySelectorAll('.item');

someElement.forEach((someElement, index) => {
	someElement.classList.add('active');
	someElement.innerHTML = `<span>Елемент №${index + 1}</span>`;
});

console.log(someElement);

// ==============================================================================

// Задача №5

// Дано в html: текст, далі кнопка з класом button.
// Треба прокрутити скрол сторінки до кнопки

//Відповідь: 

const button = document.querySelector('.button');
if (button) {button.scrollIntoView({
		behavior: "smooth"
	});
};



// ==============================================================================


// Задача №6

// Дано в html: посилання з класом link
// Треба додати до посилання дата атрибут зі значенням 100
// Поім отримати значення aтрибуту, та, якщо значення меньше 200
// пофарбувати колір тексту посилання в червоний

// Відповідь:

const link = document.querySelector('.link');
link.setAttribute("data-attr", 100);
const attribute = link.getAttribute("data-attr");
// console.log(attribute);
if (attribute < 200) {
link.style.color = "red";
}

