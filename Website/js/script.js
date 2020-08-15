$(document).ready(function() {
	$('[data-toggle="tooltip"]').tooltip();
});

$('#myCarousel').carousel( {interval: 3000} );

/*if ($('#NavButton').blur() && $('.navbar').blur()) {
	$('#Navbar').collapse('hide');
}*/

$('#NavButton').blur(function() {
	$('#Navbar').collapse('hide');
	console.log(this);
});