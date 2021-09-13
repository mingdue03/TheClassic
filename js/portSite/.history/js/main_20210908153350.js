$(document).ready( function(){
    var winH= $(window).height();
    $('section.fullH, #home .bg img').css({'height':winH});

    var homeH =($('#home').offset().top);
    var profileH =($('#profile').offset().top);
    
    $(window).scroll(function(i){
        var scroll= $(window).scrollTop();
        if(scroll>homeH+winH/3){
            for(var i =1; i<8 ; i++){
                $('#intro li.moon'+i).delay(i*200).animate({opacity:1});
            }
            $('#intro .desc').delay(1000).animate({opacity:1})
        }
        
        if(scroll>profileH+winH/2){
            $('.skill_wrap').animate({opacity:1},400)
            $('.skill_wrap .photoskill').delay(200).animate({width:'88%'},600);
            $('.skill_wrap .xdskill').delay(400).animate({width:'78%'},600);
            $('.skill_wrap .htmlskill').delay(600).animate({width:'92%'},600);
            $('.skill_wrap .javaskill').delay(800).animate({width:'80%'},600);
        }
    });

    $('.main_menu li a').on('click',function(e){
        e.preventDefault();
        targ = this.hash;

        sectionH=($(targ).offset().top)
        $('html,body').animate({scrollTop:sectionH-100},500)
    });

} );