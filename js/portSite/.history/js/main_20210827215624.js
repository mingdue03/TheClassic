$(document).ready( function(){
    var winH= $(window).height();
    $('section.fullH, #home .bg img').css({'height':winH});

    var homeH =($('#home').offset().top);
    var introH =($('#intro').offset().top);
    
    $(window).scroll(function(){
        var scroll= $(window).scrollTop();
        if(scroll>homeH+winH/2){
            $('#intro li,#intro .desc').addClass('fadein')
            for(var i =1; i<8 ; i++){
                $('#intro li .moon'+i).delay(index*i)
            }
        }
    
    });
} );