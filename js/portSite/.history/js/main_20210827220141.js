$(document).ready( function(){
    var winH= $(window).height();
    $('section.fullH, #home .bg img').css({'height':winH});

    var homeH =($('#home').offset().top);
    var introH =($('#intro').offset().top);
    
    $(window).scroll(function(i){
        var scroll= $(window).scrollTop();
        if(scroll>homeH+winH/2){
            for(var i =1; i<8 ; i++){
                $('#intro li .moon'+i).delay(i*1000).animate({opacity:1});
            }
        }
    
    });
} );