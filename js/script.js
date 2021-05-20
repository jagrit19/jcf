$(document).ready(function() {
  
	$('[data-toggle="tooltip"]').tooltip();

	$('.animate__animated').css('opacity', 0.2);

  	/*$('#WhyUsPhoto').waypoint(function() {
    	$('#WhyUsPhoto').css('opacity', 1);
  	}, { offset: 'bottom-in-view' });*/

    $('#Section1Heading').waypoint(function() {
      $('#Section1').addClass('animate__fadeInUp');
      $('#Section1').css('opacity', 1);
    }, { offset: 'bottom-in-view' });

  	$('#Reason1Heading').waypoint(function() {
    	$('#Reason1').addClass('animate__zoomInDown');
    	$('#Reason1').css('opacity', 1);
  	}, { offset: 'bottom-in-view' });
  	
  	$('#Reason2Heading').waypoint(function() {
    	$('#Reason2').addClass('animate__zoomInDown');
    	$('#Reason2').css('opacity', 1);
  	}, { offset: 'bottom-in-view' });

  	$('#Reason3Heading').waypoint(function() {
    	$('#Reason3').addClass('animate__zoomInDown');
    	$('#Reason3').css('opacity', 1);
  	}, { offset: 'bottom-in-view' });

    $('#Section2Heading').waypoint(function() {
      $('#Section2').addClass('animate__fadeInUp');
      $('#Section2').css('opacity', 1);
    }, { offset: 'bottom-in-view' });

    $('#Section3Heading').waypoint(function() {
      $('#Section3').addClass('animate__fadeInUp');
      $('#Section3').css('opacity', 1);
    }, { offset: 'bottom-in-view' });

    $('#Footer1Heading').waypoint(function() {
      $('#Footer1').addClass('animate__fadeInUp');
      $('#Footer1').css('opacity', 1);
    }, { offset: 'bottom-in-view' });

    $('#AboutUsHeading').waypoint(function() {
      $('#AboutUsHeading').addClass('animate__fadeInDown');
      $('#AboutUsHeading').css('opacity', 1);
    }, { offset: 'bottom-in-view' });

});

$('#myCarousel').carousel( {interval: 3000} );

/*if ($('#NavButton').blur() && $('.navbar').blur()) {
	$('#Navbar').collapse('hide');
}*/

/*$('#NavButton').blur(function() {
	$('#Navbar').collapse('hide');
	console.log(this);
});*/