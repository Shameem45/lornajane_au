(function($, jQuery) {
	$(".lj-gift-sliders").slick({
		arrows: false,
		infinite: false,
		dots:false,
		swipe:false
	});
	$(".lj-category-slider").slick({
		arrows: false,
		infinite: false,
		dots:true,
		fade:true,
		speed: 800,
		waitForAnimate: false,
		pauseOnHover:false,
		autoplay: false,
		//autoplaySpeed: 12000
	});
	$(".lj-hotspot-icon").mouseenter(function(event){
		event.stopPropagation();
		$(".lj-hotspot-icon").removeClass('active');
		$(this).hide();	
		$('.lg-hs-close').hide();

		if($(this).next('.lj-hs-content:visible').length == 0){
			$(".lj-hs-content").hide();
			$(this).next('.lj-hs-content').show();
		}

		$(this).next('.lj-hs-content').find('.lg-hs-close').fadeIn(1000);
		$(this).addClass('active').fadeIn('fast');
		$('.lj-category-article').hide();
		
		if($(this).parents('.lj-category-item').find('.lj-popup-overlay').length == 0){
			$('<div class="lj-popup-overlay"></div>').insertBefore('.lj-hotspot.first');
			$('.lj-popup-overlay').fadeIn('fast');
		}
	});
	
	$('body').on('click', '.lj-category-item, .lg-hs-close', function() {
		$('.lj-popup-overlay').remove();
		$(".lj-hs-content").hide();
		$(".lj-hotspot-icon").show();
		$('.lj-category-article').show();
	});
	$("body").on("click", ".lg-hs-image", function(event){
		event.stopPropagation();
	});
	$(".lj-side-menu li a").click(function(event){
		$('.lj-category-article').show();
		$(".lj-hs-content").hide();
		$(".lj-hotspot-icon").show();
		$(".lj-side-menu li a").removeClass("active");
		$(this).addClass("active");
		var slideIndex = $(this).data("index");
		$('.lj-gift-sliders').slick('slickGoTo',slideIndex);
		$('.lj-category-slider').slick('slickGoTo',0);
		$('.lj-popup-overlay').remove();
	});
	$(".slick-dots li").click(function(event){
		$('.lj-category-article').show();
		$(".lj-hs-content").hide();
		$(".lj-hotspot-icon").show();
		$('.lj-popup-overlay').remove();
	});
	

})(TRM.$, TRM.$);