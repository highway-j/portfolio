$(document).ready(function(){

// Function to create new object
function skills(image, details) {
	this.image = image;
	this.details = details;
};

// Create objects here
var coding = new skills('images/coding.png', "<ul class='overview coding'><li>I love coding, but I'm passionate about &nbsp<span class='emphasis'>BRANDING</span></li><li>I learned because it's all about &nbsp<span class='emphasis'>STARTUPS</span></li><li>But the best part is that the possibilites are &nbsp<span class='emphasis'>ENDLESS</span></li><li>This is a showcase of what I can do with &nbsp<span class='emphasis'>HTML & CSS</span></li><li>Check out my projects below to see some &nbsp<span class='emphasis'>JQUERY</span></li><li>But I know you all came to see the &nbsp<span class='emphasis'>JAVASCRIPT</span></li></ul>");
var hobbies = new skills('images/css_skills.png', '<ul class="overview hobbies"><li>I play a lot of &nbsp<span class="emphasis">BASKETBALL & VOLLEYBALL</span></li><li>I follow my &nbsp<span class="emphasis">WARRIORS & 49ERS</span></li><li>I like to spend time with my dog &nbsp<span class="emphasis">DILLA</span></li><li>When I have time, I like to discover new &nbsp<span class="emphasis">MUSIC</span></li><li>Sometimes I even like to &nbsp<span class="emphasis">MAKE MY OWN</span></li><li>I am a sucker for &nbsp<span class="emphasis">HATS AND SNEAKERS</span></li></ul>');
var vision = new skills('images/jquery_skills.png', "<ul class='overview vision'><li>I'm just a &nbsp<span class='emphasis'>SIMPLE MAN</span></li><li>I aspire to &nbsp<span class='emphasis'>INSPIRE</span></li><li>One day I'll start a company and be the &nbsp<span class='emphasis'>CEO</span></li><li>I still haven't decided if it will be in &nbsp<span class='emphasis'>TECH OR LIFESTYLE</span></li><li>But when it's all &nbsp<span class='emphasis'>SAID & DONE</span></li><li>I just want to leave this world &nbsp<span class='emphasis'>A BETTER PLACE</span></li></ul>");
var overview = new skills('images/cp_logo_lrg.png', '<ul class="overview overviewPage"><li>My name is &nbsp<span class="emphasis">JONATHAN KIM</span></li><li>I am a &nbsp<span class="emphasis">FRONT END WEB DEVELOPER</span></li><li>Born and raised in the &nbsp<span class="emphasis">BAY AREA</span></li><li>But now I live in &nbsp<span class="emphasis">ORANGE COUNTY</span></li><li>I graduated from Cal Poly with a degree in &nbsp<span class="emphasis">BUSINESS</span></li><li>With a focus in &nbsp<span class="emphasis">ENTREPRENEURSHIP</span></li></ul>');

$('.overviewLink a').on('click', function(){
	$('div.skillsDetails').html(overview.details);
	$('div.skillsImage img').attr('src', overview.image);
	$('.headshot img').css({'opacity': '1', 'transition': '1s'});
});

$('.codingLink a').on('click', function(){
	$('div.skillsDetails').html(coding.details);
	$('div.skillsImage img').attr('src', coding.image);
});

$('.hobbiesLink a').on('click', function(){
	$('div.skillsDetails').html(hobbies.details);
	$('div.skillsImage img').attr('src', hobbies.image);
});

$('.visionLink a').on('click', function(){
	$('div.skillsDetails').html(vision.details);
	$('div.skillsImage img').attr('src', vision.image);
	$('.headshot img').css({'opacity': '0', 'transition': '1s'});
});

// SMOOTH SCROLL
function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}

$("#downWeGo").click(function() {
   scrollToAnchor('downWeGo');
});


});