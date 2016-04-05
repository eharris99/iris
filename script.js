// JavaScript File

$(document).ready(function(){
    $('img').draggable();
});

var Item=new Object();
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

#3A9E1E

