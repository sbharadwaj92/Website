// Smooth scrolling 
$(document).ready(function() {
	$("a.smooth").click(function() {
	$("html, body").animate({
		scrollTop: $($(this).attr("href")).offset().top + "px"
		}, {
		duration: 350,
		easing: "swing"
	});
		return false;
	});
});

// Fixed the right panel on scrolling

function testScroll(ev){
	if(window.pageYOffset>50)$("#sideBar").addClass("fixedPanel");
	if(window.pageYOffset<50)$("#sideBar").removeClass("fixedPanel");
}

window.onscroll=testScroll;
