// Let's make our page responsive

// Phone settings
if ($(window).width() < 768) {
	$(".intro").css('font-size', '24px');
	$(".title").css('text-align', 'left');
	$(".bio").css("font-size", "18px");
	$(".push").css("padding-left", "15px");
	$(".shadpicture").css("padding-left", "45px");
}

// Tablet settings
else if ($(window).width() < 1024) {
	$(".title").css('text-align', 'left');
	$(".push").css("padding-left", "30px");
	$(".down2").css("padding-top", "0%");
	$(".shadpicture").css("padding-left", "250px");
}