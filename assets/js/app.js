;
(function ($) {
	$("#owl-demo").owlCarousel({

		slideSpeed: 300,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:5
			}
		}
	});
	var owl = $('.owl-carousel');

   

	$('.fa-angle-left').click(function() {
		owl.trigger('prev.owl.carousel');
	})
	$('.fa-angle-right').click(function() {
		owl.trigger('next.owl.carousel');
	})

	$("#my-menu").mmenu({
		extensions: ["theme-dark"]
	});

	$(".menu a").click(function() {
		var id=$(this).attr('id');
		$([document.documentElement, document.body]).animate({
			scrollTop: $("."+id).offset().top
		}, 2000);
	});
})(jQuery);