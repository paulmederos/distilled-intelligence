$(document).ready(function() {

	$("#slider").bxSlider({
		auto: true,
		speed:400,
		randomStart: true
	});

  	mixpanel.track("Visited DI Site");

 	$("#become-a-sponsor").click(function() {
	  mixpanel.track("Sponsor was interested");
	});

    $("#main-cta").click(function() {
	  mixpanel.track("Header CTA was clicked");
	});

	$("#why-apply-cta").click(function() {
	  mixpanel.track("'Why Apply?' CTA was clicked");
	});

	$("#why-apply-ticket-interest").click(function() {
	  mixpanel.track("'Why Apply?' purchase ticket was clicked");
	});

	$(".graduate-link").click(function() {
	  mixpanel.track("A graduate was clicked");
	});

	$("#register-now").click(function() {
	  mixpanel.track("Final registration CTA was clicked");
	});

	$(".footer-link").click(function() {
	  mixpanel.track("A footer link was clicked");
	});

});