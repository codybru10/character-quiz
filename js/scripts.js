$(document).ready(function(){

  $("form#quiz").submit(function(event){
    var q1 = parseInt($("#q1").val());
    var q2 = parseInt($("#q2").val());
    var q3 = parseInt($("#q3").val());
    var q4 = parseInt($("#q4").val());
    var result = q1 + q2 + q3 + q4;

    if (result < 7 && result > 3){
      $(".result").hide();
      $("#outputBatman").show();
    } else if (result > 6 && result < 10){
      $(".result").hide();
      $("#outputFez").show();
    } else if (result > 9){
      $(".result").hide();
      $("#outputDexter").show();
    } else {
      $(".result").hide();
    }

    event.preventDefault();

    //Batman 4-6, Fez 7-9, Dexter 10-12
  });

});
