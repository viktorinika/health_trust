"use strict";


const documentActions = (e) => {
	const targetElement = e.target

	if (targetElement.closest('.icon-menu')) {
		document.documentElement.classList.toggle('menu-open')
	}
}

document.addEventListener('click', documentActions)