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

var c = document.getElementById("myCanvas");
var icon = document.getElementById("mobile");
var ctx = c.getContext("2d");


ctx.font = "30px Verdana";
// Create gradient
var gradient = ctx.createLinearGradient(0, 0, c.width, 0);
gradient.addColorStop("0", "magenta");
gradient.addColorStop("0.5", "blue");
gradient.addColorStop("1.0", "red");
// Fill with gradient
ctx.fillStyle = gradient;
ctx.fillText(icon, 10, 90);