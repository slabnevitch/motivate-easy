// jQuery(function() {

// 	// ibg class
// 		if('objectFit' in document.documentElement.style === false){
// 		  Array.prototype.forEach.call(document.querySelectorAll('._fit'), function(el){

// 		    var image = el.querySelector('img');
// 		    el.style.backgroundImage = 'url("'+image.src+'")';
// 		    el.classList.add('ibg');
// 		    el.classList.remove('_fit');
//  		 });
// 		}
// 	// End ibg class

// $(document).on('click', function(e) {
	// var $target = $(e.target);
// });// $(document).on('click')

	// jQuery(document).ready(function() {
	// 	console.log('jQuery document ready');
	// });

// 	//SVG Fallback
// 	// if(!Modernizr.svg) {
// 	// 	$("img[src*='svg']").attr("src", function() {
// 	// 		return $(this).attr("src").replace(".svg", ".png");
// 	// 	});
// 	// };

// 	//E-mail Ajax Send
// 	//Documentation & Example: https://github.com/agragregra/uniMail
// 	$("form").submit(function() { //Change
// 		var th = $(this);
// 		$.ajax({
// 			type: "POST",
// 			url: "mail.php", //Change
// 			data: th.serialize()
// 		}).done(function() {
// 			alert("Thank you!");
// 			setTimeout(function() {
// 				// Done Functions
// 				th.trigger("reset");
// 			}, 1000);
// 		});
// 		return false;
// 	});

// 	//Chrome Smooth Scroll
// 	try {
// 		$.browserSelector();
// 		if($("html").hasClass("chrome")) {
// 			$.smoothScroll();
// 		}
// 	} catch(err) {

// 	};

// 	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
// });

// $(window).on('load', function() {

// 	$(".loader_inner").fadeOut();
// 	$(".loader").delay(400).fadeOut("slow");

// });

(function() {
	// ibg class
	// if('objectFit' in document.documentElement.style === false){
	//   Array.prototype.forEach.call(document.querySelectorAll('._fit'), function(el){

	//     var image = el.querySelector('img');
	//     el.style.backgroundImage = 'url("'+image.src+'")';
	//     el.classList.add('ibg');
	//     el.classList.remove('_fit');
	// 	 });
	// }
	// End ibg class


	document.addEventListener('DOMContentLoaded', function() {
		console.log('DOMContentLoaded!');



		// открытие/закрытие моб. меню
		document.querySelector('.toggle-mnu').onclick = function(e) {
			this.classList.toggle('on');
			document.documentElement.classList.toggle('menu-opened');
			document.documentElement.classList.toggle('lock');
		}
		//END открытие/закрытие моб. меню
		
		//serch-results toggle 
		if(document.querySelector('.admin-search__form') !== null){
			var serchInput = document.getElementById('search-input');
			
			serchInput.onfocus = function(e) {
				console.log('focus')
				this.closest('.admin-search__form').classList.add('search-visible');
			}
			serchInput.onblur = function(e) {
				console.log('blur')
				this.closest('.admin-search__form').classList.remove('search-visible');
			}
		}
		//END serch-results toggle 

		// micromodal

	// добавление value в модалку редактирования товара
	if(document.querySelector('[data-micromodal-open="product-edit"]') !== null){
		Array.prototype.slice.call(document.querySelectorAll('[data-micromodal-open="product-edit"]')).forEach(function(button) {
			button.onclick = function(e) {
				console.log(e.target);
				var row = this.closest('.body-table__row'),
					fields = row.querySelectorAll('[data-field]'),
					targetModal = document.getElementById('product-edit'),
					inputs = targetModal.querySelectorAll('form .form__input');

				Array.prototype.slice.call(fields).forEach(function(field, i) {
					Array.prototype.slice.call(inputs).forEach(function(input, i) {

						if(field.dataset.field === input.name){
							input.value = field.textContent;
						}
					});
				});
			}
		});

	}
	//END добавление value в модалку редактирования товара

	// micromodal
	if(document.querySelector('.modal') !== null){
		MicroModal.init({
			openTrigger: 'data-micromodal-open', 
			closeTrigger: 'data-micromodal-close',
			openClass: 'is-open', 
			disableFocus: true, 
			awaitOpenAnimation: true,
			awaitCloseAnimation: true,
			// disableScroll: true,
			onShow: function(modal, trigger, event){
				// при disableScroll: true для компенсации ширины скроллбара (фикс "прыгания" страницы влево)
				// document.querySelector('#wrapper-for-scroll-fix').classList.add('modal-open');

			},
			onClose: function(modal) {
				// при disableScroll: true для компенсации ширины скроллбара (фикс "прыгания" страницы влево)
				// document.querySelector('#wrapper-for-scroll-fix').classList.remove('modal-open');
			}
		});		
	
		// показ/скрытие инфомодалок
		document.getElementById('infomodal-success-toggle').onclick = function() {
			MicroModal.show('modal-inform-succes');
			// MicroModal.close('modal-inform-error');
		}
		document.getElementById('infomodal-error-toggle').onclick = function() {
			MicroModal.show('modal-inform-error');
			// MicroModal.close('modal-inform-succes');
		}

		//END показ/скрытие инфомодалок
	}
	// END micromodal
	});
})();