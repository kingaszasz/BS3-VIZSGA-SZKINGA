$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 5) {
            $(".navbar-default").css('background-color', 'white');
            $(".navbar-default .my-nav>li>a").addClass('whith-white');
            $(".navbar-default .my-nav-left>li>a").addClass('whith-white');

        } else {
            $(".navbar-default").css('background-color', 'transparent');
            $(".navbar-default .my-nav>li>a").removeClass('whith-white');
            $(".navbar-default .my-nav-left>li>a").removeClass('whith-white');

        }
    });
});