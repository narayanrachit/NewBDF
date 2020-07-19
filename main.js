$(window).scroll(function () {
    if ( $(window).scrollTop() >= 690 && $(window).scrollTop() <= 740) {
    $("#menu").css('background-image','linear-gradient(to right, #cc9966 , white)');
    } else {
    $("#menu").css('background-color','transparent');
    $("#menu").css('background-image','none');
    }
    });

    //linear-gradient(to right, #cc9966 , white)