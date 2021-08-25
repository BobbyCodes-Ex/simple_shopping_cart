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
    $('.btn.remove').on('click', function (event) {
        $(this).closest('.item').remove();
        updateItemPrice();
        updateTotalPrice();
    });
    $('#addItem').on('submit', function (event) {
        event.preventDefault();
        var product = $('.addProduct').val();
        var price = $('.addPrice').val();

        $('#list').append('<div class="row item">' + 
        '<div class="col-xs-3 product">' + product + '</div>'
        + '<div class="col-xs-3 price">' + parseFloat(price).toFixed(2) + '</div>'
        + '<div class ="col-xs-3 qty">' + 'QTY' + '<input type="number" value="1"/>' + '</div>'
        + '<div class ="col-xs-1 delete">' + '<button class="btn btn-light btn-sm remove">' + 'Delete' + '</button>' + '</div>'
        + '<div class="col-xs-2 totalCost">' + '$--.--' + '</div>'
        + '</div>');

        updateItemPrice();
        updateTotalPrice();

        $('.btn.remove').on('click', function (event) {
            $(this).closest('.item').remove();
            updateItemPrice();
            updateTotalPrice();
        });

        $('.addProduct').val('');
        $('.addPrice').val('');
    });
  });