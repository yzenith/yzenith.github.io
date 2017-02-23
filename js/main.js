
$(function(){
  // JS for Comfortable area
  var c = 0;
  function autoRun(){
    c++;

    (c==8)?c=0:c;

    $('.detail>img').eq(c).fadeIn(800).siblings('img').hide();
  }

  timer = setInterval(autoRun,2500);

  // JS for leaning section
  var b = 0;
  setInterval(function(){
    b++;

    if(b==8){
      $('.learn ul').css({'margin-top':'0px'});
      b = 0;

    };
    var up = b*-128;
    $('.learn ul').animate({'margin-top':up+'px'},1000);
  },1500);

})
