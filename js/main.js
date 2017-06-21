function menuFunction() {
    $('#menu-dishes').slideToggle(200);
    return false;
};

var session = {
  'screens': $('h2#fiesta').html(),
  'state': $('p#fiesta2').html(),
  'sasa': $('input#fiesta3.value').html()
};
sessionStorage.setItem('session', JSON.stringify(session));
var restoredSession = JSON.parse(sessionStorage.getItem('session'));
var id0001 = '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"><div class="item1 salad"><img src="../gallery_img/pasta.png" alt=""><h2 id="fiesta">Фієста</h2><p id="fiesta2">Сир твердий, свіжі печериці, перець болгарський, куряче філе, цибуля, картопля, майонез, оцет бальзамічний</p><form><input id="fiesta3" type="radio" name="size" value="only" checked><span>250</span>гр<div class="button-buy"><input id="fiesta4" type="button" class="buy" value="Замовити"></div></form></div></div>';

$(document).ready(function() {
    $('.buy').click(function() {
        $('.basket').html(+$('.basket').html()+1);
        $('.basket').css('padding', '6px');
        $('.show').html(id0001);
    });
});

//add food into busket