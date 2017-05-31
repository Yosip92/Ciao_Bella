function menuFunction() {
    $('#menu-dishes').slideToggle(200);
    return false;
};
// function menuFunction1() {
//     $('.menu-drinks').slideToggle(200);
//     return false;
// };
function order() {
    var amount, amount0 = 0;
    amount = amount0 + 1;
    if(amount0 == 0) {
        amount = amount0 + 1;
    } else {
        
    }
    $('.basket').html(amount);
};

// function salads() {
//     var salad;
//     salad = $('.salad');
//     $('.pizza').css('display','none');
//     $('.item-holder').html(salad);
// }
// function pizzas() {
//     var pizza;
//     pizza = $('.pizza');
//     $('.pizza').css('display','block');
//     $('.item-holder').html(pizza);
// }
// function salads() {
//     $('.salad').slideToggle(0);
//     return false;
// };