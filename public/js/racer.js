$(document).ready(function() {
  $('.winner').hide();

  var count1 = 2;
  var count2 = 2;
  var size1 = $('tr#player1_strip td').size();
  var size2 = $('tr#player2_strip td').size();
  var starttime;
  var endtime;  

  // var start = $('.game').click().timeStamp;

  $(document).on('keyup', function(event) {
    
    if (event.which == 37) 
    {
      if (count1 == 2) {
        var d = new Date();
        starttime1 = d.getTime();
        // console.log(starttime1);
      };
        $("tr#player1_strip td:nth-child(" + count1 + ")").removeClass('active', 5000);
        count1 += 1;
        $("tr#player1_strip td:nth-child(" + count1 + ")").addClass('active', 5000);
      
      if (count1 == size1) 
      {
        $('.winner').prepend('<h1>Player 1 Wins!!</h1>').show("slow");
          // $(this).unbind().timeStamp;
          $(this).unbind();

          var d = new Date();
          endtime1 = d.getTime();
          // console.log(endtime1);

           $('.winner').append("Your game took" + (endtime1 - starttime1)/1000 + "seconds");
      };
    }
    else if (event.which == 39) 
    {
      if (count2 == 2) {
        var d = new Date();
        starttime2 = d.getTime();
        // console.log(starttime2);
      };

        $("tr#player2_strip td:nth-child(" + count2 + ")").removeClass('active', 5000);
        count2 += 1;
        $("tr#player2_strip td:nth-child(" + count2 + ")").addClass('active', 5000);

       if (count2 == size2) {
        $('.winner').prepend('<h1>Player 2 Wins!!</h1>').show("slow");
        $(this).unbind();

          var d = new Date();
          endtime2 = d.getTime();
          // console.log(endtime2);

          // endtime2 - starttime2;
           $('.winner').append("Your game took" + (endtime2 - starttime2)/1000 + "seconds");

      };
    }
    else {
      console.log("Wrong key.")
    };

  });

});