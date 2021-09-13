$(document).ready( function(){
    var winH= $(window).height();
    $('section.fullH, #home .bg img').css({'height':winH});

    
    var pos=[];
    for(var i=1 ; i<7 ; i++){
        pos.push(($('#section'+i).offset().top));
    };

    if(scroll>pos[1]){
        $('.img > li')
    }

} );