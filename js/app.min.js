$('.slider-advertising-banners__body').slick({
	infinite: true,
	slidesToShow: 5,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 3000,
	dots: false,
	responsive: [
		{
			breakpoint: 1350,
			settings: {
				arrows: false,
				dots: true
			}
		},
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 4,
				arrows: false,
				dots: true
			}
		},
		{
			breakpoint: 765,
			settings: {
				slidesToShow: 3,
				arrows: false,
				dots: true
			}
		},
		{
			breakpoint: 565,
			settings: {
				slidesToShow: 2,
				arrows: false,
				dots: true
			}
		},
		{
			breakpoint: 400,
			settings: {
				slidesToShow: 1,
				arrows: false,
				dots: true
			}
		},
	]
});

// $(".tab-pane").hide();
// $(".tab-pane:first").show();
/* в режиме вкладок */
// $("ul.tabs li").click(function () {
// 	$(".tab_content").hide();
// 	var activeTab = $(this).attr("rel");
// 	$("#" + activeTab).fadeIn();
// 	$("ul.tabs li").removeClass("active");
// 	$(this).addClass("active");
// 	$(".tab_accordion").removeClass("d_active");
// 	$(".tab_accordion[rel^='" + activeTab + "']").addClass("d_active");
// });
/* в режиме аккордеона */
$(".requisites__tab-accordion").click(function () {
	$(".tab-pane").removeClass("active show");
	$(".requisites__tab-accordion").removeClass("d_active");
	var d_activeTab = $(this).attr("rel");
	$("#" + d_activeTab).addClass("active show");
	$(this).addClass("d_active");
});
