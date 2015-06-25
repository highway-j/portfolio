$(document).ready(function(){

// Function to create new object
function skills(image, details) {
	this.image = image;
	this.details = details;
}

// Create objects here
var coding = new skills('images/coding2.png', "<ul class='overview coding'><li>I love coding, but I'm passionate about <strong>BRANDING</strong></li><li>I learned because it's all about <strong>STARTUPS</strong></li><li>But the best part is that the possibilites are <strong>ENDLESS</strong></li><li>This is a showcase of what I can do with <strong>HTML & CSS</strong></li><li>Check out my projects below to see some <strong>JQUERY</strong></li><li>But I know you all came to see the <strong>JAVASCRIPT</strong></li></ul>");
var hobbies = new skills('images/hobbies.png', '<ul class="overview hobbies"><li>I play a lot of <strong>BASKETBALL & VOLLEYBALL</strong></li><li>I follow my <strong>WARRIORS & 49ERS</strong></li><li>I like to spend time with my dog <strong>DILLA</strong></li><li>When I have time, I like to discover new <strong>MUSIC</strong></li><li>Sometimes I even like to <strong>MAKE MY OWN</strong></li><li>I am a sucker for <strong>HATS AND SNEAKERS</strong></li></ul>');
var vision = new skills('images/vision.png', "<ul class='overview vision'><li>I'm just a <strong>SIMPLE MAN</strong></li><li>I aspire to <strong>INSPIRE</strong></li><li>One day I'll start a company and be the <strong>CEO</strong></li><li>I still haven't decided if it will be in <strong>TECH OR LIFESTYLE</strong></li><li>But when it's all <strong>SAID & DONE</strong></li><li>I just want to leave this world <strong>A BETTER PLACE</strong></li></ul>");
var overview = new skills('images/cp_logo_lrg.png', '<ul class="overview overviewPage"><li>My name is <strong>JONATHAN KIM</strong></li><li>I am a <strong>FRONT END WEB DEVELOPER</strong></li><li>Born and raised in the <strong>BAY AREA</strong></li><li>But now I live in <strong>ORANGE COUNTY</strong></li><li>I graduated from Cal Poly with a degree in <strong>BUSINESS</strong></li><li>With a focus in <strong>ENTREPRENEURSHIP</strong></li></ul>');

$('.overviewLink a').on('click', function(){
	$('a').removeClass('active');
	$(this).addClass('active');
	$('div.skillsDetails').html(overview.details);
	$('div.skillsImage img').attr('src', overview.image);
	$('.headshot img').css({'opacity': '1', 'transition': '1s'});
});

$('.codingLink a').on('click', function(){
	$('a').removeClass('active');
	$(this).addClass('active');
	$('div.skillsDetails').html(coding.details);
	$('div.skillsImage img').attr('src', coding.image);
});

$('.hobbiesLink a').on('click', function(){
	$('a').removeClass('active');
	$(this).addClass('active');
	$('div.skillsDetails').html(hobbies.details);
	$('div.skillsImage img').attr('src', hobbies.image);
});

$('.visionLink a').on('click', function(){
	$('a').removeClass('active');
	$(this).addClass('active');
	$('div.skillsDetails').html(vision.details);
	$('div.skillsImage img').attr('src', vision.image);
	$('.headshot img').css({'opacity': '0', 'transition': '1s'});
});

// SMOOTH SCROLL
function scrollToAnchor(aid){
	var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}

$("#downWeGo").click(function(){
	if ($(window).width() < 1055) {
   		scrollToAnchor('downWeWent');
} else {
   scrollToAnchor('downWeGo');
}
});


});