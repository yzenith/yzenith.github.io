$(function(){
  var c = 0;
  function autoRun(){
    c++;

    (c==8)?c=0:c;

    // show up photos
    $('.detail>img').eq(c).fadeIn(800).siblings('img').hide();
  }

  // set timer
  timer = setInterval(autoRun,2500);

    // $('.detail').mouseover(function(){
    //   clearInterval(timer);
    //
    //   var c = $(this).index();
    //
    //   $('.detail>img').eq(c).show().siblings('img').hide();
    // })

  // })
})
