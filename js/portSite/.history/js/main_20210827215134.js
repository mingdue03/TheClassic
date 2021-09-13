$(document).ready( function(){
    var winH= $(window).height();
    $('section.fullH, #home .bg img').css({'height':winH});

    var homeH =($('#home').offset().top);
    var introH =($('#intro').offset().top);
    
    $(window).scroll(function(){
        var scroll= $(window).scrollTop();
        if(scroll>introH){
            $('#intro li,#intro .desc').addClass('fadein')
        }
    
    });
} );