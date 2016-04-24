// JavaScript File

$(document).ready(function(){
    $('img').draggable();
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

