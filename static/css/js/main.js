$(window).scroll(function() {
    if ($(this).scrollTop() > 1){
        $('.main_menu').addClass("sticky");
    }
    else{
        $('.main_menu').removeClass("sticky");
    }
});

$(document).ready(function() {


    $("a.topLink").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 1000,
            easing: "swing"
        });
        return false;
    });
});

idleTimer = null;
idleState = false;
idleWait = 10000; // ms

$(function ($) {
    $('#dialogSleep').dialog({
        autoOpen: false
    });
    $(document).ready(function () {
        $('*').bind('mousemove keydown scroll', function () {
            clearTimeout(idleTimer);
            if (idleState == true) {

                $("#dialogSleep").dialog("close");

            }

            idleState = false;
            idleTimer = setTimeout(function () {
                $("#dialogSleep").dialog("open");

                idleState = true;
            }, idleWait);
        });

        $("body").trigger("mousemove");

    });
});


const sleep = ms => new Promise(r => setTimeout(r, ms));

