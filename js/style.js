
$(function () {
    $('a.popup').click(function () {
        $('div.' + $(this).attr("rel")).fadeIn(300);
        $("body").append("<div id='overlay'></div>");
        $('#overlay').show().css({'filter': 'alpha(opacity=80)'});
        return false;
    });
    $('div.exit').click(function () {
        $(this).parent().fadeOut(100);
        $('#overlay').remove('#overlay');
        return false;
    });
});

$(document).ready(function(){
    $('.inner #slides .slide .inner__info span').click(function() {
        $('.inner #slides .slide .inner__info span').removeClass('active');
        $(this).addClass('active');
    });
});
