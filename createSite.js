'use strict'
window.onload = function() {
	setTimeout(function() {
		document.body.classList.add('loaded')

		if (window.matchMedia('(min-width: 992px)').matches) { // Если не смартфон

			Draggable.create('.gallery', { // Запускаем плагин Draggable
				bounds: 'body',
				inertia: true
			})
			
		}
 
	}, 200)
 
}
