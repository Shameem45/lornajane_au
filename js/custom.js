(function($, jQuery) {
	$(".lj-gift-sliders").slick({
		arrows: false,
		infinite: false,
		dots:false,
		swipe:false
	}).on('beforeChange',function(){
		$('.lj-category-article').show();
		$(".lj-hs-content").hide();
		$(".lj-hotspot-icon").show();
		$('.lj-popup-overlay').remove();
		$(".lj-hotspot-icon").removeClass('active');
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
	}).on('beforeChange',function(){
		$('.lj-category-article').show();
		$(".lj-hs-content").hide();
		$(".lj-hotspot-icon").show();
		$('.lj-popup-overlay').remove();
		$(".lj-hotspot-icon").removeClass('active');
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
	
	$('body').on('click', '.lg-hs-close', function() {
		$('.lj-popup-overlay').remove();
		$(".lj-hotspot-icon").removeClass('active');
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
		$(".lj-hotspot-icon").removeClass('active');
	});
	// $(".slick-dots li").click(function(event){
		
	// });

	$(window).on("load", function() {
        var windowWidth = $(window).width();
        if(windowWidth > 768) {
            if(!$(".lj-category-item:first-child").hasClass("filter-first")) {
                $('.lj-category-slider').slick('slickUnfilter');
                
                $(".lj-gift-sliders .lj-gift-item").each(function(){
                	//console.log($(this).length);
                	if($(this).hasClass('lj-limited-collection') == false){
                		//alert('1');
                		$(this).find('.lj-category-item:first-child').addClass("filter-first");
                	}
                });
            	
                $('.lj-category-slider').slick('slickFilter',':not(".filter-first")')
            }
        }else {
        	$('.lj-category-slider').slick('slickUnfilter');
        	$(".lj-category-item:first-child").removeClass("filter-first");
        }      
    });
    $(window).on("resize", function() {
        var windowWidth = $(window).width();
        if(windowWidth > 768) {
            if(!$(".lj-category-item:first-child").hasClass("filter-first")) {
                $('.lj-category-slider').slick('slickUnfilter');
                $(".lj-gift-sliders .lj-gift-item").each(function(){
                    if($(this).hasClass('lj-limited-collection') == false){
                		$(this).find('.lj-category-item:first-child').addClass("filter-first");
                	}                   
                });
                $('.lj-category-slider').slick('slickFilter',':not(".filter-first")')
            }
        }else {
        	$('.lj-category-slider').slick('slickUnfilter');
        	$(".lj-category-item:first-child").removeClass("filter-first");
        }      
    });

})(TRM.$, TRM.$);