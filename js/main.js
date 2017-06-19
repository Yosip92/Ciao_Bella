function menuFunction() {
    $('#menu-dishes').slideToggle(200);
    return false;
};

var session = {
  'screens': $('h2#fiesta').html(),
  'state': $('p#fiesta2').html(),
  'sasa': $('input#fiesta3').html()
};
sessionStorage.setItem('session', JSON.stringify(session));
var restoredSession = JSON.parse(sessionStorage.getItem('session'));

$(document).ready(function() {
    $('.buy').click(function() {
        $('.basket').html(+$('.basket').html()+1);
        $('.basket').css('padding', '6px');
        $('.show').html(restoredSession);        
    });
});

//add food into busket