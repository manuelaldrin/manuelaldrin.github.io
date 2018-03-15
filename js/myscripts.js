$(document).ready(function(){

    if($(window).width() < 992){
    	$('.fp-item-2 canvas').detach().prependTo('.fp-item-2');
    }

    $(window).resize(function(){
    	if($(window).width() > 991){
	    	$('.fp-item-2 .fp-info').detach().prependTo('.fp-item-2');
	    }else{
	    	$('.fp-item-2 canvas').detach().prependTo('.fp-item-2');
	    }
    });

});