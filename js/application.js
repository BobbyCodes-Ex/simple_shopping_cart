var totalCost = 0;

/*$(document).ready(function () {
    $('.item').each(function (i, ele) {
        var priceOfItem = parseFloat($(ele).find('.price').text());
        var quantityOfItem = parseFloat($(ele).find('.qty input').val());
        var totalCostOfItem = priceOfItem * quantityOfItem;
        $(ele).children('.totalCost').html('$' + totalCostOfItem);
        return totalCostOfItem
      });
});*/

var updateItemPrice = function (ele) {
    var priceOfItem = parseFloat($(ele).find('.price').text());
    var quantityOfItem = parseFloat($(ele).find('.qty input').val());
    var totalCostOfItem = priceOfItem * quantityOfItem;
    $(ele).children('.totalCost').html('$' + totalCostOfItem);
    return totalCostOfItem
};

var sum = function (acc, x) { 
    return acc + x; 
};

var updateTotalPrice = function () {
    var totalPrice = [];
    $('.item').each(function (i, ele) {
        var totalCostOfItem = updateItemPrice(ele);
        totalPrice.push(totalCostOfItem);
    });
    var price = totalPrice.reduce(sum);
    $('#totalPrice').text('$' + price);

}
  
$(document).ready(function () {
    $('.item').each(function (i, ele) {
      totalCostOfItem = updateItemPrice(ele);
    });
    $('#total').each(function (i, ele) {
        price = updateTotalPrice(ele);
    });
  });