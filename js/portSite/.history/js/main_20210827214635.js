$(document).ready( function(){
    var winH= $(window).height();
    $('section.fullH, #home .bg img').css({'height':winH});

    
    var pos=[];
    pos.push(($('#home').offset().top));
    pos.push(($('#intro').offset().top));
    console.log(pos);

    if(scroll>pos[2]){
        $('#intro li').addClass('fadein')
    }

} );