$(document).ready(function(e) {

    var items = 0;

    /**
     * Subscribe button submit.
     */
    $('#buttonSubscribe').click(function() {
        var sEmail = $('#txtEmail').val();
        if ($.trim(sEmail).length == 0) {
            alert('Please, enter valid email address');
            e.preventDefault();
        }
        if (validateEmail(sEmail)) {
            alert('Thanks for subscribing!');
        }
        else {
            alert('Invalid Email Address');
            e.preventDefault();
        }
    });

    
    /**
     * Update the cart icon in the top-right corner of the header 
     * every time the user clicks the “Add to Cart” button for a product
     */
    $("#addToCart_1, #addToCart_2, #addToCart_3, #addToCart_4, #addToCart_5, #addToCart_6, #addToCart_7, #addToCart_8").click(function(){                
        items = items + 1;
        if (items != 0) {                        
            $(".shoppingbasket").append("<div class=\"basketitems\">" + items + "</div>");
          }          
    });
});


/**
 * Validate email format.
 * @param {} sEmail 
 */
function validateEmail(sEmail) {
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (filter.test(sEmail)) {
        return true;
    }
    else {
        return false;
    }
}