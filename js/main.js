$(document).ready( function(){

//MENU BUTTON
    var open = true;
    $('.button').click(function(){
        if(open == true){
            $('.header_wrap').css('height','100%');
            $('.menu_wrap').slideDown(500);
            $('.button').addClass('on');
            open=false;
        }else{
            $('.menu_wrap').slideUp(500);
            $('.button').removeClass('on');
            $('.header_wrap').css('height','10%');
            open=true;
        }
    });    

//SUB MENU
    $('.right_menu li a').click(function(){
        if($(this).parents('li').hasClass('on')){
            $('.sub_menu').stop().animate({right:'-60%'},500,'swing');
            $(this).parents('li').removeClass('on');
        }else{
            $('.sub_menu').animate({right:'-60%'});
            $(this).siblings('.sub_menu').stop().animate({right:0},500);
            $(this).parents('li').addClass('on');
        }
    });




//VISUAL
    $('.visual').slick({
        dots: true,
        autoplay:true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

//CONTENT3
    $('.card_wrap li a').mouseover(function(){
        $('card_wrap div').css({'background':'rgba(255,255,255,0.4)'});
    });






//ROOM_LIST
$('.room_listWrap').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });



//TOUR INDICATOR
  $('.indicator li a').on('click',function(e){
    e.preventDefault();
    targ = this.hash;

    sectionH=($(targ).offset().top)
    $('html,body').animate({scrollTop:sectionH-100},500)

    $('.indicator li').removeClass('on');
    $(this).parent('li').addClass('on')
  });


  var pos=[];

  $(window).scroll(function(){
    var scroll= $(window).scrollTop();
    for(var i=1 ; i<14 ; i++){
      pos.push(($('#section'+i).offset().top)-100);
      if(scroll>=pos[i-1]&&scroll<pos[i]){
        $('.indicator li').removeClass('on');
        $('.indicator li').eq(i).addClass('on');      
      };

    };
  });



    
} );