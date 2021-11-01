$('.slider-advertising-banners__body').slick({
	infinite: true,
	slidesToShow: 5,
	slidesToScroll: 1,
	// autoplay: true,
	// autoplaySpeed: 3000,
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
			breakpoint: 1250,
			settings: {
				slidesToShow: 4,
				arrows: false,
				dots: true
			}
		},
		{
			breakpoint: 1000,
			settings: {
				slidesToShow: 3,
				arrows: false,
				dots: true
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				arrows: false,
				dots: true
			}
		},
		{
			breakpoint: 565,
			settings: {
				slidesToShow: 1,
				arrows: false,
				dots: true
			}
		},
	]
});

// =============  adaptive img   ==========================================================
function ibg() {
	let ibg = document.querySelectorAll("._ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}
ibg();


// ============  tab to accordion  ========================================================
$(".requisites__tab-accordion").click(function () {
	if ($(this).hasClass("d_active")) {
		var d_activeTab = $(this).attr("rel");
		$("#" + d_activeTab).removeClass("active show");
		$(this).removeClass("d_active");
	} else {
		$(".tab-pane").removeClass("active show");
		$(".requisites__tab-accordion").removeClass("d_active");
		var d_activeTab = $(this).attr("rel");
		$("#" + d_activeTab).addClass("active show");
		$(this).addClass("d_active");
	}
});

// ==================   Change src banner   =============================================
const imgBanner = document.querySelector(".banner__img")
if (imgBanner) {
	if($(window).width() < 768) {
		imgBanner.src = "./img/link-banner-mobile.jpg"
	} else {
		imgBanner.src = "./img/link-banner.png"
	}
}
