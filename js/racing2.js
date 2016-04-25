// JavaScript File  

$('#button2').click(function(){
    $('#player1_strip').find('td.active').removeClass('active');
    $('#birthplace').addClass('active');
  var birthplace=prompt("Where was Iris born?");
  birthplace=birthplace.toUpperCase();
  if (birthplace=="ASTORIA")  {
   $('#player1_strip').find('td.active').removeClass('active').next().addClass('active');
   var husband=prompt("What was Iris's husband's first name?");
   husband=husband.toUpperCase();
  if (husband=="CARL") {
   $('#player1_strip').find('td.active').removeClass('active').next().addClass('active');
   var caviar=prompt("What is Iris's drug of choice?");
   caviar=caviar.toUpperCase();
  if (caviar=="CAVIAR")  {
   $('#player1_strip').find('td.active').removeClass('active').next().addClass('active');
   var job=prompt("What was Iris's profession?");
   job=job.toUpperCase();
  if (job=="INTERIOR DECORATOR")  {
   $('#player1_strip').find('td.active').removeClass('active').next().addClass('active');
   var stark=prompt("Who bought Iris and Carl's company?");
   stark=stark.toUpperCase();
  if (stark=="STARK")  {
   $('#player1_strip').find('td.active').removeClass('active').next().addClass('active');
    var whitehouse=prompt("How many White House administrations did Iris work for? Answer with a numeral.");
  if (whitehouse=="9")  {
   $('#player1_strip').find('td.active').removeClass('active').next().addClass('active');
    alert("Right answer! You won the sideboard!");
  }
    else {
   alert("Wrong answer. Click button to start over.");
   $('#player1_strip').find('td.active').removeClass('active');
   $('#birthplace').addClass('active');
    }
  }
    else {
   alert("Wrong answer. Click button to start over.");
   $('#player1_strip').find('td.active').removeClass('active');
   $('#birthplace').addClass('active');
    }
    }
    else {
  alert("Wrong answer. Click button to start over.");
  $('#player1_strip').find('td.active').removeClass('active');
  $('#birthplace').addClass('active');
    }
   } 
   else {
   alert("Wrong answer. Click button to start over.");
   $('#player1_strip').find('td.active').removeClass('active');
   $('#birthplace').addClass('active');
    }
  }
  
    else  {

alert("Wrong answer. Click button to start over.");
$('#player1_strip').find('td.active').removeClass('active');
$('#birthplace').addClass('active');
    }
  }
  else  {

alert("Wrong answer. Click button to start over.");
$('#player1_strip').find('td.active').removeClass('active');
$('#birthplace').addClass('active');
    }
  

});