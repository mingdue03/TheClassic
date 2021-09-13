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
        if(scroll>profileH+winH/3){
            $('.skill_wrap .photoskill').animate({width:'9%'})
        }
    
    });

} );