(function ($, jQuery) {
	$(".lj-gift-sliders").slick({
		arrows: false,
		infinite: false,
		dots: false,
		swipe: false,
	}).on('beforeChange', function () {
		reset();
	});

	$(".lj-category-slider").slick({
		arrows: false,
		infinite: false,
		dots: true,
		fade: true,
		speed: 800,
		waitForAnimate: false,
		pauseOnHover: false,
		autoplay: true
		//autoplaySpeed: 12000
	}).on('beforeChange', function () {
		reset();
	});

	function reset(){
		$('.lj-category-article').show();
		$(".lj-hs-content").hide();
		$(".lj-hotspot-icon").show();
		$('.lj-popup-overlay').remove();
		$(".lj-hotspot-icon").removeClass('active');
		$('.lj-category-slider').slick('slickPlay');
	}


	// function mouseclick(element){
	// 	event.stopPropagation();
	// 	$(".lj-hotspot-icon").removeClass('active');
	// 	element.hide();	
	// 	$('.lg-hs-close').hide();

	// 	if(element.next('.lj-hs-content:visible').length == 0){
	// 		$(".lj-hs-content").hide();
	// 		element.next('.lj-hs-content').show();
	// 	}

	// 	element.next('.lj-hs-content').find('.lg-hs-close').fadeIn(1000);
	// 	element.addClass('active').fadeIn('fast');
	// 	$('.lj-category-article').hide();

	// 	if(element.parents('.lj-category-item').find('.lj-popup-overlay').length == 0){
	// 		$('<div class="lj-popup-overlay"></div>').insertBefore('.lj-hotspot.first');
	// 		$('.lj-popup-overlay').fadeIn('fast');
	// 	}
	// }

	// $(window).on("load", function() {
	// 	var windowWidth = $(window).width();
	//     if(windowWidth > 1024) {
	// 		$(".lj-hotspot-icon").mouseenter(function(event){
	// 			event.stopPropagation();
	// 			mouseclick($(this));
	// 		});
	// 	}
	// 	else{
	// 		$(".lj-hotspot-icon").click(function(event){
	// 			mouseclick($(this));
	// 		});
	// 	}
	// });

	// $('.lj-category-item').click(function(event){
	// 	event.stopPropagation();
	// 	console.log("click");
	// 	var windowWidth = $(window).width();
	// 	if(windowWidth > 1024){
	// 		$('.lj-popup-overlay').remove();
	// 		$(".lj-hotspot-icon").removeClass('active');
	// 		$(".lj-hs-content").hide();
	// 		$(".lj-hotspot-icon").show();
	// 		$('.lj-category-article').show();
	// 	}
	// 	else{
	// 		var visiblitiy = $('.lj-hs-content').is(':visible');
	// 		console.log(visiblitiy);
	// 		if(visiblitiy==true){
	// 			$('.lj-popup-overlay').remove();
	// 			$(".lj-hotspot-icon").removeClass('active');
	// 			$(".lj-hs-content").hide();
	// 			$(".lj-hotspot-icon").show();
	// 			$('.lj-category-article').show();
	// 		}
	// 	}

	// });


	$('body').on('click', '.lg-hs-close', function () {
		reset();
	});

	$("body").on("click", ".lg-hs-image", function (event) {
		event.stopPropagation();
	});

	

	$('.lj-category-item').click(function (event) {
		console.log("click");
		reset();
	});

	$(".lj-side-menu li a").click(function () {		
		$(".lj-side-menu li a").removeClass("active");
		$(this).addClass("active");
		var slideIndex = $(this).data("index");
		$('.lj-gift-sliders').slick('slickGoTo', slideIndex);
		$('.lj-category-slider').slick('slickGoTo', 0);
		reset();
	});

	$(".lj-hotspot-icon").on('mouseenter', function (event) {
		event.stopPropagation();
		console.log("hover");
		var element = $(this);
		
		$(".lj-hotspot-icon").removeClass('active');
		element.hide();
		$('.lg-hs-close').hide();

		if (element.next('.lj-hs-content:visible').length == 0) {
			$(".lj-hs-content").hide();
			element.next('.lj-hs-content').show();
		}

		element.next('.lj-hs-content').find('.lg-hs-close').fadeIn(1000);
		element.addClass('active').fadeIn('fast');
		$('.lj-category-article').hide();

		if (element.parents('.lj-category-item').find('.lj-popup-overlay').length == 0) {
			$('<div class="lj-popup-overlay"></div>').insertBefore('.lj-hotspot.first');
			$('.lj-popup-overlay').fadeIn('fast');
		}

		$(".lj-category-slider").slick('slickPause');
	});

	$(window).on("load", function () {
		var windowWidth = $(window).width();
		if (windowWidth > 768) {
			if (!$(".lj-category-item:first-child").hasClass("filter-first")) {
				$('.lj-category-slider').slick('slickUnfilter');

				$(".lj-gift-sliders .lj-gift-item").each(function () {
					//console.log($(this).length);
					if ($(this).hasClass('lj-limited-collection') == false) {
						//alert('1');
						$(this).find('.lj-category-item:first-child').addClass("filter-first");
					}
				});

				$('.lj-category-slider').slick('slickFilter', ':not(".filter-first")')
			}
		} else {
			$('.lj-category-slider').slick('slickUnfilter');
			$(".lj-category-item:first-child").removeClass("filter-first");
		}
	});

	$(window).on("resize", function () {
		var windowWidth = $(window).width();
		if (windowWidth > 768) {
			if (!$(".lj-category-item:first-child").hasClass("filter-first")) {
				$('.lj-category-slider').slick('slickUnfilter');
				$(".lj-gift-sliders .lj-gift-item").each(function () {
					if ($(this).hasClass('lj-limited-collection') == false) {
						$(this).find('.lj-category-item:first-child').addClass("filter-first");
					}
				});
				$('.lj-category-slider').slick('slickFilter', ':not(".filter-first")')
			}
		} else {
			$('.lj-category-slider').slick('slickUnfilter');
			$(".lj-category-item:first-child").removeClass("filter-first");
		}
	});

})(TRM.$, TRM.$);