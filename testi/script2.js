//samun slideshow idea//
(function(){	  
    setInterval(function () {
        ('#slider').animate({left: 1}, 500, function () {
            ('#slider img:first-child').appendTo('#slider');
            ('#slider img').css('left', '');
    
        });
     }, 1000);
});