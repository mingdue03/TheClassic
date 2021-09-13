
    //모바일 크기로 새창 띄우기
    function MobileOpen(){
        window.open('https://mingdue.cafe24.com/01/portfolio/theClassic/','responsible2','width=370; height=640; top=250; left=700');
    };
    // window.open("주소,"팝업이름","속성");
$(document).ready( function(){



    var winH= $(window).height();
    $('section.fullH, #home .bg img').css({'height':winH});

    var homeH =$('#home').offset().top;
    var profileH =$('#profile').offset().top;
    var myWork1H =$('#myWork1').offset().top;
    var myWork2H =$('#myWork2').offset().top;
    var myWork3H =$('#myWork3').offset().top;
    var myWork4H =$('#myWork4').offset().top;
    var myWork5H =$('#myWork5').offset().top;
    
    $(window).scroll(function(i){
        var scroll= $(window).scrollTop();
        if(scroll<=profileH && scroll>homeH+winH/3){
            for(var i =1; i<8 ; i++){
                $('#intro li.moon'+i).delay(i*200).animate({opacity:1});
            }
            $('#intro .desc').delay(1000).animate({opacity:1})
        }else{
            for(var i =8; i>0 ; i--){
                $('#intro li.moon'+i).css({opacity:0});
            }
            $('#intro .desc').css({opacity:0})
        }

        if( scroll<=myWork1H && scroll>profileH+winH/2){
            $('.skill_wrap').animate({opacity:1},400)
            $('.skill_wrap .photoskill').delay(200).animate({width:'88%'},600);
            $('.skill_wrap .xdskill').delay(400).animate({width:'78%'},600);
            $('.skill_wrap .htmlskill').delay(600).animate({width:'92%'},600);
            $('.skill_wrap .javaskill').delay(800).animate({width:'80%'},600);
        }else{
            $('.skill_wrap .photoskill').css({width:'0%'});
            $('.skill_wrap .xdskill').css({width:'0%'});
            $('.skill_wrap .htmlskill').css({width:'0%'});
            $('.skill_wrap .javaskill').css({width:'0%'});
        }
        if( scroll<=myWork3H && scroll>myWork1H+winH/3){
            $('.mockup_img1').animate({opacity:1},1000);
        }else{
            $('.mockup_img1').css({opacity:0});
        }
        if( scroll<=myWork4H&& scroll>myWork2H+winH/3){
            $('.mockup_img2').animate({opacity:1},1000)
        }else{
            $('.mockup_img2').css({opacity:0});
        }
        if( scroll<=myWork5H+winH && scroll>myWork4H+winH/3){
            $('.mockup_img3').animate({opacity:1},1000)
        }else{
            $('.mockup_img3').css({opacity:0});
        }

    });

    $('.main_menu li a').on('click',function(e){
        e.preventDefault();
        targ = this.hash;

        sectionH=($(targ).offset().top)
        $('html,body').animate({scrollTop:sectionH},500)
    });

} );