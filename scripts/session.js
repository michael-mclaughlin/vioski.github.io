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

        var productImage = $('#product-image-products');

        var retrievedData = JSON.parse(localStorage.getItem("storedData"));
            console.log(retrievedData);

            productImage.attr('src', retrievedData.src);

            productName.html(retrievedData.name);
            productSpan1.html(retrievedData.width);
            productSpan2.html(retrievedData.height);
            productSpan3.html(retrievedData.depth);
            productSpan4.html(retrievedData.fabric);
            productSpan5.html(retrievedData.leather);
            productSpan6.html(retrievedData.woodSpecies);
            productSpan7.html(retrievedData.woodFinish);

    })

});