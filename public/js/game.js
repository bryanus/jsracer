function race() {
  $('.winner').hide();
  var count1 = 2;
  var count2 = 2;
  var size1 = $('tr#player1_strip td').size();
  var size2 = $('tr#player2_strip td').size();
  
  var d = new Date();
  var time = d.getTime();

  $(document).on('keyup', function(event) {

    var start = event.timeStamp;
// one issue is that when the othe player starts, their starting position is at the current count value, which is not the start of the board. We need to somehow keep the counts separate. - fixed it by setting diff vars for each count, and the keys work simultaneously now! yay.

// need to figure out winner now. Maybe when player reaches last td (or count = 20), we alert with "winner?"

    if (event.which == 37) 
    {

        console.log("player1");
        $("tr#player1_strip td:nth-child(" + count1 + ")").removeClass('active', 5000);
        count1 += 1;
        $("tr#player1_strip td:nth-child(" + count1 + ")").addClass('active', 5000);

        // need to figure out winner now. Maybe when player reaches last td (or count = 20), we alert with "winner?"
      
      if (count1 == size1) 
      {
        $('.winner').prepend('<h1>Player 1 Wins!!</h1>').show("slow");
        $(this).unbind(); 
        

      };

    }
    else if (event.which == 39) 
    {
        console.log("player2");
        $("tr#player2_strip td:nth-child(" + count2 + ")").removeClass('active', 5000);
        count2 += 1;
        $("tr#player2_strip td:nth-child(" + count2 + ")").addClass('active', 5000);

       if (count2 == size2) {
        $('.winner').prepend('<h1>Player 2 Wins!!</h1>').show("slow");
        $(this).unbind();
      };
    }
    else {
      console.log("Wrong key.")
    };
    var time = (finish - start);
    console.log(time);
  });
}