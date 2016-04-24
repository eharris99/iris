  $('#button2').click(function(){
    $('#player1_strip').find('td.active').removeClass('active');
    $('#birthplace').addClass('active');
  var birthplace=prompt("Where was Iris born?");
  if (birthplace==="Astoria")  {
   $('#player1_strip').find('td.active').removeClass('active').next().addClass('active');
   alert("Click the blue square for your next question.");
   }
   else {
   alert("Wrong answer. Click button to start over.");
   }
   
  });
  
  $('#husband').click(function(){
   
  var husband=prompt("What was Iris's husband's first name?");
  if (husband=="Carl") {
   $('#player1_strip').find('td.active').removeClass('active').next().addClass('active');
   alert("Right answer! Click the blue square for your next question.");
  }
    else  {

alert("Wrong answer. Click button to start over.");
$(this).addClass('active');
    }
  });
  
  $('#caviar').click(function(){
  
   var caviar=prompt("What is Iris's drug of choice?");
  if (caviar=="Caviar")  {
   $('#player1_strip').find('td.active').removeClass('active').next().addClass('active');
   alert("Right answer! Click the blue square for your next question.");
   } else {
   alert("Wrong answer. Click button to start over.");
   
    }
    });
    
    $('#job').click(function(){
   
   var job=prompt("What was Iris's profession?");
  if (job=="Interior Decorator")  {
   $('#player1_strip').find('td.active').removeClass('active').next().addClass('active');
   alert("Right answer! Click the blue square for your next question.");
    }
    else {
  alert("Wrong answer. Click button to start over.");
    }
  
  });
  
  $('#stark').click(function(){
   
   var stark=prompt("Who bought Iris and Carl's company?");
  if (stark=="Stark")  {
   $('#player1_strip').find('td.active').removeClass('active').next().addClass('active');
    alert("Right answer! Click the blue square for your next question.");
  }
    else {
   alert("Wrong answer. Click button to start over.");
    }
  });
  
  $('#whitehouse').click(function(){
   
   var whitehouse=prompt("How many White House administrations did Iris work for?");
  if (whitehouse=="9")  {
   $('#player1_strip').find('td.active').removeClass('active').next().addClass('active');
    alert("Right answer! You won the sideboard!");
  }
    else {
   alert("Wrong answer. Click button to start over.");
    }
  });