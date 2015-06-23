$(document).ready(function(){

var data = [
	{
		name: "SHOPPING LIST",
		description: "Objective: Create a shopping list app where users can enter items they need to purchase, check and uncheck items on the list, and remove items from the list permanently.",
		url: "images/shopping_list.png",
		href: "http://highway-j.github.io/shopping-list/"
	},
	{
		name: "QUIZ APP",
		description: "Objective: Create an interactive quiz that leads the user through a set of questions one at a time. When the user answers the last question, the app must show his or her overall score. Each question must be stored as a Javascript object.",
		url: "images/quiz_app.png",
		href: "http://highway-j.github.io/quizapp/"
	},
	{
		name: "HOT OR COLD GAME",
		description: 'Objective: Javascript should start a new game when the page loads. Users must be able to start a new game when they click the "NEW GAME" button. When the new game starts, a random number between 1 and 100 will be generated that the user has to guess. The game must give feedback based on the last guess, record the previous guesses in a list, and tell the user when they have guessed correctly.',
		url: "images/hot_or_cold.png",
		href: "http://highway-j.github.io/hot-or-cold/"
	},
	{
		name: "STREET FIGHTER JQUERY",
		description: "Objective: The purpose of this project was to learn the basics of jQuery and have fun creating user interactions and animations.",
		url: "images/streetfighter.png",
		href: "http://highway-j.github.io/jquery-streetfigher/main.html"
	}
]	

// function used to create objects
	function item(name, description, url, href) {
	    this.name = name;
	    this.description = description;
	    this.url = url;
	    this.href = href;
	}

// Array for data above
var items = [];

// Loop to add data to items array
for(var i = 0; i < data.length; i++){
	items.push(new item(data[i].name, data[i].description, data[i].url, data[i].href));
};


// Unhides display zone
	function showZone() {
		$('div.thumbnail a img').on('click', function(){
			$('div#display-zone2').addClass('show-zone');
		});
	};

// Loads image thumbnail in display zone on click	
	function loadImage() {
		$('div.thumbnail a img').on('click', function(){
			var image = this.src;
			$('.image-load').html('<img src="' + image + '">');
		});
	};

// Loads name and description associated with thumbnail
	function loadDescription() {
		$('div.thumbnail a img').on('click', function(){
			var id = this.id;
			$('#product-name').text(items[id].name);
			$('#product-description').text(items[id].description);
			$('a.btn').attr('href', items[id].href);

		});
	};

// Close display zone
	function closeZone() {
		$('a#closeThis').on('click', function(){
			$('div#display-zone2').toggleClass('show-zone');
		})
	}

// Call Functions
	loadImage();
	loadDescription();
	showZone();
	closeZone();
});