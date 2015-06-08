(function($) {
"use strict";
 $("#owl-demo").owlCarousel({
 
autoPlay: 3000, //Set AutoPlay to 3 seconds
 
items : 4,
itemsDesktop : [1199,3],
itemsDesktopSmall : [979,3]
 
});
/* -------------------
Parallax Sections
---------------------*/
if(!Modernizr.touch){
$('#home-parallax-fullscreen').parallax("50%", 0.5);
$('#home-parallax-fullwidth').parallax("50%", 0.5);
$('.parallax-section-1').parallax("50%", 0.5);
$('.parallax-section-2').parallax("50%", 0.5);
$('.parallax-section-3').parallax("50%", 0.5);
$('.parallax-section-4').parallax("50%", 0.5);
$('.parallax-section-5').parallax("50%", 0.5);
$('.parallax-section-6').parallax("50%", 0.5);
$('.parallax-section-7').parallax("50%", 0.5);
$('.parallax-section-8').parallax("50%", 0.5);
$('#home-landing').parallax("50%", 0.5)
}

/* -------------------
Animated progress bars
---------------------*/
$('.progress-bars').waypoint(function() {
$('.progress').each(function(){
$(this).find('.progress-bar').animate({
width:$(this).attr('data-percent')
},800);
});
}, { offset: '100%',
triggerOnce: true
});
/* -------------------
Scroll functions
---------------------*/
$(window).scroll(function(){
parallax();
/* -------------------
Header Animation
---------------------*/
if ($(this).scrollTop() > 5){
$('nav').addClass("navbar-small")
}
else{
$('nav').removeClass("navbar-small")
}
/* -------------------
Back to top button popup
---------------------*/
if($(window).scrollTop() > 400){
$("#back-to-top").stop().animate({ bottom:'16px' },300,'easeInOutCubic')
}
else{
$("#back-to-top").stop().animate({ bottom:'-50px' },300,'easeInOutCubic')
}
});

/* -------------------
Page Hero Parallax
---------------------*/
function parallax(){
var scrolled = $(window).scrollTop();
$('.hero').css('top',-(scrolled*0.0515)+'rem');
$('.home-container').css('bottom',-(scrolled*0.0515)+'rem');
$('.op-1,.op-2,.op-3').css('opacity',1-(scrolled*.00110));
};
/* -------------------
Animation.css calling
---------------------*/
new WOW().init();
/* -------------------
Smooth scrolling to anchor
---------------------*/
$('.to-section a,.btn-scroll').bind('click', function(event) {
var $anchor = $(this);
$('html, body').stop().animate({
scrollTop: $($anchor.attr('href')).offset().top - 54
}, 1000, 'easeInOutExpo');
event.preventDefault();
});
/* -------------------
Back to top button function
---------------------*/
$('#back-to-top,.to-top').click(function() {
$('html, body').animate({ scrollTop: 0}, 1000, 'easeInOutExpo');
return false;
});
/* -------------------
Active menu item on page scroll
---------------------*/
var sections = $('section')
, nav = $('nav')
, nav_height = nav.outerHeight();
$(window).on('scroll', function () {
var cur_pos = $(this).scrollTop();
sections.each(function() {
var top = $(this).offset().top - nav_height,
bottom = top + $(this).outerHeight();
if (cur_pos >= top && cur_pos <= bottom) {
nav.find('a').removeClass('current');
sections.removeClass('current');
$(this).addClass('current');
nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('current');
}
});
});
/* -------------------
Auto-close responsive navbar
---------------------*/
function close_toggle() {
if ($(window).width() <= 992) {
$('.navbar-collapse a').on('click', function(){
$('.navbar-collapse').collapse('hide')
});
}
else {
$('.navbar .navbar-default a').off('click')
}
}
close_toggle();
$(window).resize(close_toggle);
$(".navbar-collapse").css({ maxHeight: $(window).height() - $(".navbar-header").height() + "px" });

/* -------------------
Bootstrap Tooltip, Alert, Tabs
---------------------*/
$(function () { $("[data-toggle='tooltip']").tooltip();
$(".alert").alert()
});
$(function () {
var active = true;
$('#collapse-init').click(function () {
if (active) {
active = false;
$('.panel-collapse').collapse('show');
$('.panel-title').attr('data-toggle', '');
$(this).text('Close All');
} else {
active = true;
$('.panel-collapse').collapse('hide');
$('.panel-title').attr('data-toggle', 'collapse');
$(this).text('Open All');
}
});
$('#accordion').on('show.bs.collapse', function () {
if (active) $('#accordion .in').collapse('hide');
});
});

$('#my_Tab > li > a').hover( function(){
      $(this).tab('show');
   });


//portfolio

$('.portfolio-menu li').click(function(){ 
    
  $(".portfolio-menu li").removeClass("active");
  $(this).addClass("active");        

    var selector = $(this).attr('data-filter'); 
    $(".portfolio-items").isotope({ 
        filter: selector, 
        animationOptions: { 
            duration: 750, 
            easing: 'linear', 
            queue: false, 
        } 
    }); 
  return false; 
});  
//Animated Progress
$('.progress-bar').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
	if (visible) {
		$(this).css('width', $(this).data('width') + '%');
		$(this).unbind('inview');
	}
});

//Animated Number
$.fn.animateNumbers = function(stop, commas, duration, ease) {
	return this.each(function() {
		var $this = $(this);
		var start = parseInt($this.text().replace(/,/g, ""));
		commas = (commas === undefined) ? true : commas;
		$({value: start}).animate({value: stop}, {
			duration: duration == undefined ? 1000 : duration,
			easing: ease == undefined ? "swing" : ease,
			step: function() {
				$this.text(Math.floor(this.value));
				if (commas) { $this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); }
			},
			complete: function() {
				if (parseInt($this.text()) !== stop) {
					$this.text(stop);
					if (commas) { $this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); }
				}
			}
		});
	});
};

$('.animated-number').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
	var $this = $(this);
	if (visible) {
		$this.animateNumbers($this.data('digit'), false, $this.data('duration')); 
		$this.unbind('inview');
	}
});
})(jQuery);


$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  $('.man').css({
    'transform' : 'translate(0px, -'+ wScroll /25 +'%)'
  });

});



jQuery(window).load(function(){
     
    // Active isotope in container
    
    $(".portfolio-items").isotope({
        itemSelector: '.single-portfolio',
        layoutMode: 'fitRows',
    });    
    
});