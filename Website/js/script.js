$(document).ready(function() {
	$('[data-toggle="tooltip"]').tooltip();

	$('.animate__animated').css('opacity', 0.2);

  	$('#WhyUsPhoto').waypoint(function() {
    	$('#WhyUsPhoto').addClass('animate__fadeIn');
  	}, { offset: 'bottom-in-view' });

  	$('#Reason1').waypoint(function() {
    	$('#Reason1').addClass('animate__lightSpeedInLeft');
    	$('#Reason1').css('opacity', 1);
  	}, { offset: 'bottom-in-view' });
  	
  	$('#Reason2').waypoint(function() {
    	$('#Reason2').addClass('animate__lightSpeedInRight');
    	$('#Reason2').css('opacity', 1);
  	}, { offset: 'bottom-in-view' });

  	$('#Reason3').waypoint(function() {
    	$('#Reason3').addClass('animate__lightSpeedInLeft');
    	$('#Reason3').css('opacity', 1);
  	}, { offset: 'bottom-in-view' });

  	/*$('#Footer').waypoint(function() {
    	$('#Footer').addClass('animate__fadeInUp');
    	$('#Footer').css('opacity', 1!important);
  	}, { offset: '0' });*/
});

$('#myCarousel').carousel( {interval: 3000} );

/*if ($('#NavButton').blur() && $('.navbar').blur()) {
	$('#Navbar').collapse('hide');
}*/

/*$('#NavButton').blur(function() {
	$('#Navbar').collapse('hide');
	console.log(this);
});*/