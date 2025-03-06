$(document).ready(function () {
    $(function () {
        const dataProductsMap = data.productDetails.map(function (index) {
            localStorage.setItem('indexData', JSON.stringify(index)) || {};
            return index;
        });

        const changeImageOnClick = function () {
            const imageContainer = $('#product-detailed-card-details-gallery');
            const productImage = $('#gallery-grid-image');
            const activeLinkId = localStorage.getItem('activeLinkId');
            const theItem = JSON.parse(localStorage.getItem('item'));
            console.log('item', theItem);
            $.each(dataProductsMap, function (index, item) {
                let imgElement = $("<img>");
                const anchor = $("<a></a>").attr({ class: "thumbnailAnchor", id: item.name + index, href: 'gallery.html' });
                const thumbnail = imgElement.attr({ src: item.src, alt: item.alt, class: "thumbnailImage ", id: item.name + index });
                anchor.append(thumbnail);
                imageContainer.append(anchor);
                $('.thumbnailAnchor').first().addClass('active');
                anchor.on('click', function () {
                    $('.thumbnailAnchor').first().removeClass('active');
                    localStorage.setItem('activeLinkId', item.name + index);
                    localStorage.setItem('item', JSON.stringify(item));
                    $(this).addClass('active');
                    productImage.attr('src', theItem.src);
                });
                
                productImage.attr('src', theItem.src);
                console.log('theItem', theItem);
                if (activeLinkId) {
                    // $('.thumbnailAnchor').first().addClass('active');
                    $('a[id="' + activeLinkId + '"]').addClass('active');
                    // $('.thumbnailAnchor').first().removeClass('active');
                    // $('a[id="' + activeLinkId + '"]').addClass('active');
                    $('.thumbnailAnchor').first().removeClass('active');
                    $('a[id="' + activeLinkId + '"]').addClass('active');
                    productImage.attr('src', theItem.src);
                }
            });

        };
        changeImageOnClick();

        const displayDynamicGalleryImage = function () {
            const galleryImage = $('#gallery-grid-image');
            const retrievedGalleryData = JSON.parse(localStorage.getItem("item"));
            galleryImage.attr({ src: retrievedGalleryData.src, alt: retrievedGalleryData.alt });
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
    
                productName.html(retrievedGalleryData.name);
                productSpan1.html(retrievedGalleryData.width);
                productSpan2.html(retrievedGalleryData.height);
                productSpan3.html(retrievedGalleryData.depth);
                productSpan4.html(retrievedGalleryData.seatHeight);
                productSpan5.html(retrievedGalleryData.armHeight);
                productSpan6.html(retrievedGalleryData.backHeight);
                productSpan7.html(retrievedGalleryData.fabric);
                productSpan8.html(retrievedGalleryData.leather);
                productSpan9.html(retrievedGalleryData.woodSpecies);
                productSpan10.html(retrievedGalleryData.woodFinish);
                productSpan11.html(retrievedGalleryData.metalFinish);
                productSpan12.html(retrievedGalleryData.message);
                productSpan13.html(retrievedGalleryData.style);
    
                productTearSheetLink.attr('href', retrievedGalleryData.tear);
        };
        displayDynamicGalleryImage();
    });
});
