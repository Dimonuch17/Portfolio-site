$(document).ready(function() {

	 $(".popup").magnificPopup({type:"image"}); //Респонсив попап менеджер

	 //Анимация header
	$(".top_text h1").animated("fadeInDown", "fadeOutUp");
	$(".top_text p, .section_header").animated("fadeInUp", "fadeOutDown");	

	//Блок Обо мне
	$(".animation_1").animated("fadeInLeft", "fadeOutLeft"); // Левый блок
	$(".animation_2").animated("flipInY", "flipOutY"); // Центральный блок
	$(".animation_3").animated("fadeInRight", "fadeOutRight"); // Правый блок

	//Блок Резюме
	$(".left .resume_item").animated("fadeInLeft", "fadeOutLeft"); // Левый блок
	$(".right .resume_item").animated("fadeInRight", "fadeOutRight"); // Правый блок

	// Высота блока по высоте экрана и (resize)
	function heightDetect() {
		$(".main_head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

	// Сэндвич-меню
	$(".toggle_menu").click(function() {
  	$(".sandwich").toggleClass("active");
	});

	$(".top_menu li a").click(function() {
		$(".top_menu").fadeOut(600);
		$(".sandwich").toggleClass("active");
		$(".top_text").css("opacity", "1");
	})
	
	// Click-меню ul li
	$(".toggle_menu").click(function() {
		if ($(".top_menu").is(":visible")) {
			$(".top_text").css("opacity", "1");
			$(".top_menu").fadeOut(600);
			$(".top_menu li a").removeClass("fadeInUp animated");
		} else {
			$(".top_text").css("opacity", "1");
			$(".top_menu").fadeIn(600);
			$(".top_menu li a").addClass("fadeInUp animated");
		};
	});
	
});

	// Прелоадер
$(window).load(function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});