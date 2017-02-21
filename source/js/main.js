
$(function(){
  var c = 0;

  function autoRun(){
    c++;

    (c==8)?c=0:c;

    // show up photos
    $('.skills>img').eq(c).fadeIn(400).siblings('img').hide()
  }

  // set timer
  timer = setInterval(autoRun,1000);

    $('.skills').mouseover(function(){
    clearInterval(timer);

    var c = $(this).index();

    $('.skills>img').eq(c).show().siblings('.skills>img').hide();
  })

  //鼠标移出的效果，这里面有个效果不对，就是移出时，会从往后的li开始继续轮播，有时又没有
  $('.skills').mouseout(function(){
    timer = setInterval(autoRun,1000);
  })
})
