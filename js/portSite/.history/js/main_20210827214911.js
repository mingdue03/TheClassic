$(document).ready( function(){
    var winH= $(window).height();
    $('section.fullH, #home .bg img').css({'height':winH});

    var homeH =($('#home').offset().top);
    var introH =($('#intro').offset().top);
    var scroll= $(window).scrollTop();
    
    $(window).scroll(function(){

        if(scroll>introH){
            $('#intro li').addClass('fadein')
        }
    
    });
} );