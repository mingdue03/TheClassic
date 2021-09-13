$(document).ready( function(){
    var winH= $(window).height();
    $('section.fullH, #home .bg img').css({'height':winH});

    var homeH =($('#home').offset().top);
    var introH =($('#intro').offset().top);
    
    $(window).scroll(function(){
        var scroll= $(window).scrollTop();
        if(scroll>homeH+winH/2){
            $('#intro li,#intro .desc').addClass('fadein')
        }
    
    });
} );