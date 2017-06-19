function menuFunction() {
    $('#menu-dishes').slideToggle(200);
    return false;
};

$(document).ready(function() {
    $('.buy').click(function() {
        $('.basket').html(+$('.basket').html()+1);
        $('.basket').css('padding', '6px');
    });
});
