$(document).ready(function() {
	setTimeout(firstImage, 1500);
	setTimeout(secondImage, 2400);
	setTimeout(thirdImage, 3400);
	menuOpen();
	icon();
	
	$('.i2').click(function() {
		setTimeout(menuClose, 300);
		$('.asd').css({
			'margin-top': '-50px',
			opacity: '0',
			transition: '.2s'
		});
	});

	var overlay = document.getElementById("overlay");

	window.addEventListener('load', function(){
  		overlay.style.display = 'none';
	})
});

function firstImage(){
	$('.first').css('width', '50%');
	$('.second').css({
		left: '50%',
		width: '50%'
	});
}

function secondImage(){
	$('.second').css('height', '50%');
	$('.third').css({
		height: '50%',
		top: '50%'
	});
	$('.fourth').css('top', '100%');
}

function thirdImage(){
	$('.second').css('height', '33.3%');
	$('.third').css({
		height: '33.3%',
		top: '33.3%'
	});
	$('.fourth').css({
		top: '66.6%',
		height: '33.35%'
	});
}

function icon(){
	$('.i1').click(function() {
		$(this).css({
			opacity: '0',
			'z-index': '0'
		});
		$('.i2').css('opacity', '1');
	});

	$('.i2').click(function() {
		$(this).css('opacity', '0');
		$('.i1').css({
			opacity: '1',
			'z-index': '1'
		});
	});
}

function menuOpen (){
	$('.i1').click(function() {
		$('.menu').css({
			'z-index': '0',
			opacity: '0.9',
			transition: '.6s'
		});

		$('.asd').css({
			'margin-top': '0px',
			opacity: '1',
			transition: '.7s'
		});
	});
}

function menuClose (){
	$('.menu').css({
		'z-index': '-1',
		opacity: '0',
		transition: '.6s'
	});
}
