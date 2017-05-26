function menuFunction() {
    $('#menu-dishes').slideToggle(200);
    return false;
};
// function menuFunction1() {
//     $('.menu-drinks').slideToggle(200);
//     return false;
// };
function order() {
    var amount = 0;
    amount += 1;
    $('.basket').html(amount);
};