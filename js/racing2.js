// JavaScript File  

$('#button2').click(function(){
    $('#player1_strip').find('td.active').removeClass('active');
    $('#birthplace').addClass('active');
  var birthplace=prompt("Where was Iris born?");
  birthplace=birthplace.toUpperCase();
  if (birthplace=="ASTORIA"|| birthplace=="ASTORIA QUEENS"|| birthplace=="QUEENS")  {
   $('#player1_strip').find('td.active').removeClass('active').next().addClass('active');
   var husband=prompt("What was Iris's husband's first name?");
   husband=husband.toUpperCase();
  if (husband=="CARL") {
   $('#player1_strip').find('td.active').removeClass('active').next().addClass('active');
   var caviar=prompt("What does Iris call her drug of choice?");
   caviar=caviar.toUpperCase();
  if (caviar=="CAVIAR")  {
   $('#player1_strip').find('td.active').removeClass('active').next().addClass('active');
   var job=prompt("What was Iris's profession?");
   job=job.toUpperCase();
  if (job=="INTERIOR DECORATOR"|| job=="INTERIOR DESIGNER")  {
   $('#player1_strip').find('td.active').removeClass('active').next().addClass('active');
   var stark=prompt("Who bought Iris and Carl's company?");
   stark=stark.toUpperCase();
  if (stark=="STARK" || stark=="STARK CARPETING" )  {
   $('#player1_strip').find('td.active').removeClass('active').next().addClass('active');
    var whitehouse=prompt("How many White House administrations did Iris work for? Answer with a numeral.");
    whitehouse=whitehouse.toUpperCase();
  if (whitehouse=="9"|| whitehouse=="NINE")  {
   $('#player1_strip').find('td.active').removeClass('active').next().addClass('active');
    alert("Right answer! You won the Borzoi!");
  }
    else {
   alert("Wrong answer. She worked for 9 administrations. Click button to start over.");
   $('#player1_strip').find('td.active').removeClass('active');
   $('#birthplace').addClass('active');
    }
  }
    else {
   alert("Wrong answer. Stark bought Old World Weavers. Click button to start over.");
   $('#player1_strip').find('td.active').removeClass('active');
   $('#birthplace').addClass('active');
    }
    }
    else {
  alert("Wrong answer. She was an interior decorator. Click button to start over.");
  $('#player1_strip').find('td.active').removeClass('active');
  $('#birthplace').addClass('active');
    }
   } 
   else {
   alert("Wrong answer. She claims caviar was her drug of choice. Click button to start over.");
   $('#player1_strip').find('td.active').removeClass('active');
   $('#birthplace').addClass('active');
    }
  }
  
    else  {

alert("Wrong answer. Her husband's name was Carl. Click button to start over.");
$('#player1_strip').find('td.active').removeClass('active');
$('#birthplace').addClass('active');
    }
  }
  else  {

alert("Wrong answer. She grew up in Astoria. Click button to start over.");
$('#player1_strip').find('td.active').removeClass('active');
$('#birthplace').addClass('active');
    }
  

});