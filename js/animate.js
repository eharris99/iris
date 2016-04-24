// JavaScript File
// $("#button").click(function(){
//     $("img").animate({
//         left: '250px',
//         height: '+=150px',
//         width: '+=150px'
//     });
// }); 

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
default:
break;
}
});
});