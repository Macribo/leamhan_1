//jshint esversion:6 
$(document).ready(function () {
    $('span').hover(function () {
        $('.bearla').text($(this).attr('id'));
        $(this).css('color', '#e35ee5');
    }
    );
    $('span').mouseout(function () {
        $('.bearla').text('');
        $(this).css('color', '#730a0a');
    });

});

