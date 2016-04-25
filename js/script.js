// JavaScript File

$(document).ready(function(){
    $('img').draggable();
});

 (function() {

    var quotes = $(".quotes");
    var quoteIndex = -1;
    
    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(2000)
            .delay(2000)
            .fadeOut(2000, showNextQuote);
    }
    
    showNextQuote();
    
})();


function Quote() {
	
	
	
	var irisquotes =["When you don't dress like everyone else, you don't have to think like everyone else.", "If you make a mistake in what you put together, the fashion police are not going to haul you into jail.", "I don't see anything so wrong with a wrinkle. It's kind of a badge of courage", "Fashion you can buy, but style you possess.", "To lead the good life in New York, the two most important things for a woman are a chauffeur and a fur-lined raincoat.", "I don't expect to find inspiration. It just sort of comes.", "If your hair is done properly and you are wearing good shoes, you can get away with anything.", "There's no how-to roadmap to style. It's about self-expression and, above all, attitude.", "I don't dress to be stared at. I dress for myself.", "If you're not interested, you're not interesting.", "You have to try it. You only have one trip, you've got to remember that.","You don't find out who you are unless you work at it.", "More is more and less is a bore","I think you have to be true to yourself, and not try to be six different people because that’s the look that’s on-trend now","Another mad outfit","I'm not pretty and I'll never be pretty but it doesn't matter. I have something much better, I have style.","It's better to be happy than well-dressed", "I hate it when it looks put-together", "Color can raise the dead"];
	var randomirisquote = irisquotes[Math.round(Math.random()*(irisquotes.length-1))];
	document.getElementById('quotes').innerHTML = '<div>' + " " +  randomirisquote + " "  + '</div>';
}


$(document).ready(function() {
$(document).keydown(function(key) {
switch(parseInt(key.which,10)) {
case 65://a
$('#bill').animate({left: "-=10px"}, 'fast');
break;
case 83://s
$('#bill').animate({top: "+=10px"}, 'fast');
break;
case 87://w
$('#bill').animate({top: "-=10px"}, 'fast');
break;
case 68://d
$('#bill').animate({left: "+=10px"}, 'fast');
break;
}
});
});

$(document).ready(function() {
    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
			// Left arrow key pressed
			case 37:
				$('#iris').animate({left: "-=10px"}, 'fast');
				break;
			// Up Arrow Pressed
			case 38:
				$('#iris').animate({top: "-=10px"}, 'fast');
				break;
			// Right Arrow Pressed
			case 39:
			$('#iris').animate({left: "+=10px"}, 'fast');
				break;
			// Down Array Pressed
			case 40:
				$('#iris').animate({top: "+=10px"}, 'fast');
				break;
		}
	});
});


$('#buttonsubway').click(function(){
  var places=["Met Museum Costume Institute 82nd and Fifth", "Astoria, Queens, Iris' birthplace", "New York Times Building, 43rd and 8th", "7th Avenue Garment District", "Kate Spade Store, Broome & Mercer", "JFK Airport","Armory, Park Avenue and 64th","Bryant Park Fashion Tents"];
var randplace=places[Math.round(Math.random()*(places.length-1))];
  alert(randplace);
});



// $(".nav a").on("click", function(){
//   $(".nav").find(".active").removeClass("active");
//   $(this).parent().addClass("active");
// });



/*var Item=new Object();
var redHat=new Item();

var glasses = document.getElementById("glasses");
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
var originalPixels = null;
var currentPixels = null;

function getPixels(img)
{
    canvas.width = img.width;
    canvas.height = img.height;

    ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, 0, 0, img.width, img.height);
    originalPixels = ctx.getImageData(0, 0, img.width, img.height);
    currentPixels = ctx.getImageData(0, 0, img.width, img.height);

    img.onload = null;
}

#3A9E1E*/

/* blog plugin js*/

$('#blogcontainer').pinto();
$('#blogcontainer').pinto({

// a block identification key
itemSelector: "> div", 

// a class of items that will be skipped and not layouted
itemSkipClass: "pinto-skip", 

// the width of one grid block in pixels
itemWidth: 220, 

// the width spacing between blocks in pixels
gapX: 10, 

// the height spacing between blocks in pixels
gapY: 10, 

// a blocks alignment ("left", "right", "center")
align: "left", 

// adjust the block width to create optimal layout based on container size
fitWidth: true, 

// up<a href="http://www.jqueryscript.net/time-clock/">date</a> layout after browser is resized
autoResize: true, 

// time in milliseconds between browser resize and layout update
resizeDelay: 50, 

// fire after item layout complete
onItemLayout: function($item, column, position) {}, 
  
});

/* end of blog js */

