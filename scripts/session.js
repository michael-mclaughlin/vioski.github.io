$(document).ready(function(){
    $(function(){

        var productName = $('#product-details-header-h1');
        var productSpan1 = $('#product-details-header-span1');
        var productSpan2 = $('#product-details-header-span2');
        var productSpan3 = $('#product-details-header-span3');
        var productSpan4 = $('#product-details-header-span4');
        var productSpan5 = $('#product-details-header-span5');
        var productSpan6 = $('#product-details-header-span6');
        var productSpan7 = $('#product-details-header-span7');
        var productSpan8 = $('#product-details-header-span8');
        var productSpan9 = $('#product-details-header-span9');
        var productSpan10 = $('#product-details-header-span10');
        var productSpan11 = $('#product-details-header-span11');
        var productSpan12 = $('#product-details-header-span12');
        var productSpan13 = $('#product-details-header-span13');
        var productTearSheetLink = $('#product-detailed-card-details-share-tear');
        var productImage = $('#product-image-products');

        var retrievedData = JSON.parse(localStorage.getItem("storedData"));
            console.log(retrievedData);

            productImage.attr('src', retrievedData.src);

            productName.html(retrievedData.name);
            productSpan1.html(retrievedData.width);
            productSpan2.html(retrievedData.height);
            productSpan3.html(retrievedData.depth);
            productSpan4.html(retrievedData.seatHeight);
            productSpan5.html(retrievedData.armHeight);
            productSpan6.html(retrievedData.backHeight);
            productSpan7.html(retrievedData.fabric);
            productSpan8.html(retrievedData.leather);
            productSpan9.html(retrievedData.woodSpecies);
            productSpan10.html(retrievedData.woodFinish);
            productSpan11.html(retrievedData.metalFinish);
            productSpan12.html(retrievedData.message);
            productSpan13.html(retrievedData.style);

            productTearSheetLink.attr('href', retrievedData.tear);
    });

    $('.header-h1-anchor').on('click', function(){
        localStorage.clear();
    })

});







