$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 5) {
            $(".navbar-default").css('background-color', 'white');
            $(".navbar-default li>a").addClass('whith-white');
        } else {
            $(".navbar-default").css('background-color', 'transparent');
            $(".navbar-default li>a").removeClass('whith-white');
        }
    });


});