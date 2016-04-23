// JavaScript File  

$('#button2').click(function(){
    $('#player1_strip').find('td.active').removeClass('active');
    $('#birthplace').addClass('active');
  var birthplace=prompt("Where was Iris born?");
  if (birthplace=="Astoria")  {
   $('#player1_strip').find('td.active').removeClass('active').next().addClass('active');
   var husband=prompt("What was Iris's husband's first name?");
  if (husband=="Carl") {
   $('#player1_strip').find('td.active').removeClass('active').next().addClass('active');
   var caviar=prompt("What is Iris's drug of choice?");
  if (caviar=="Caviar")  {
   $('#player1_strip').find('td.active').removeClass('active').next().addClass('active');
   var job=prompt("What was Iris's profession?");
  if (job=="Interior Decorator")  {
   $('#player1_strip').find('td.active').removeClass('active').next().addClass('active');
   var stark=prompt("Who bought Iris and Carl's company?");
  if (stark=="Stark")  {
   $('#player1_strip').find('td.active').removeClass('active').next().addClass('active');
    var whitehouse=prompt("How many White House administrations did Iris work for?");
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
   } else {
   alert("Wrong answer. Click button to start over.");
   $('#player1_strip').find('td.active').removeClass('active');
   $('#birthplace').addClass('active');
    }
  }
  }
    else  {

alert("Wrong answer. Click button to start over.");
$('#player1_strip').find('td.active').removeClass('active');
$('#birthplace').addClass('active');
    }

});