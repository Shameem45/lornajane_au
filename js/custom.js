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
		speed: 2000,
		waitForAnimate: false,
		pauseOnHover:false,
		autoplay: true,
		autoplaySpeed: 12000
	});
	$(".lj-hotspot-icon").click(function(event){
		event.stopPropagation();
		$(".lj-hotspot-icon").show();
		$(this).hide();
		$(".lj-hs-content").hide();
		$(this).next('.lj-hs-content').show();
		$('.lj-category-article').hide();
	});
	
	$('body').on('click', '.lj-category-item, .lg-hs-close', function() {
		$(".lj-hs-content").hide();
		$(".lj-hotspot-icon").show();
		$('.lj-category-article').show();
	});
	$("body").on("click", ".lg-hs-image", function(event){
		event.stopPropagation();
	});
	$(".lj-side-menu li a").click(function(event){
		$('.lj-category-article').show();
		$(".lj-side-menu li a").removeClass("active");
		$(this).addClass("active");
		var slideIndex = $(this).data("index");
		$('.lj-gift-sliders').slick('slickGoTo',slideIndex);
		$('.lj-category-slider').slick('slickGoTo',0)
	});
	

})(TRM.$, TRM.$);