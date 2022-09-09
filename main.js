$(document).ready(function(){
	$('.header').height($(window).height());
})

var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}
ready(() => {
    document.querySelector(".header").style.height = window.innerHeight + "px";
})

$(document).ready(function(){
	$('.header').height($(window).height());
})

$(document).ready(function(){
	$('.section').height($(window).height());
})

$(document).ready(function (){
    $("#page-content-button").click(function (){
        $('html, body').animate({
            scrollTop: $("#page-contents").offset().top,
        }, 2000);
    });
});

$(document).ready(function (){
    $("#what-is").click(function (){
        $('html, body').animate({
            scrollTop: $("#color-blindness").offset().top,
        }, 1500);
    });
});

$(document).ready(function (){
    $("#student").click(function (){
        $('html, body').animate({
            scrollTop: $("#from-student").offset().top,
        }, 1000);
    });
});

$(document).ready(function (){
    $("#teacher").click(function (){
        $('html, body').animate({
            scrollTop: $("#help").offset().top,
        }, 800);
    });
});