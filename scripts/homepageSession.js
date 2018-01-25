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

            var productData = data.productDetails;

            var retrievedHomepageLinkData = JSON.parse(localStorage.getItem("storedHomeLinkData"));
            var homeLinkdata = retrievedHomepageLinkData;

            switch (homeLinkdata) {
                case 'tuullaChair':
                    productImage.attr('src', productData[12].src);
                    productName.html(productData[12].name);
                    productSpan1.html(productData[12].width);
                    productSpan2.html(productData[12].height);
                    productSpan3.html(productData[12].depth);
                    productSpan4.html(productData[12].seatHeight);
                    productSpan5.html(productData[12].armHeight);
                    productSpan6.html(productData[12].backHeight);
                    productSpan7.html(productData[12].fabric);
                    productSpan8.html(productData[12].leather);
                    productSpan9.html(productData[12].woodSpecies);
                    productSpan10.html(productData[12].woodFinish);
                    productSpan11.html(productData[12].metalFinish);
                    productSpan12.html(productData[12].message);
                    productSpan13.html(productData[12].style);
                    productTearSheetLink.attr('href', productData[12].tear);
                    break;

                case 'tuullaLoveseat':
                    productImage.attr('src', productData[46].src);
                    productName.html(productData[46].name);
                    productSpan1.html(productData[46].width);
                    productSpan2.html(productData[46].height);
                    productSpan3.html(productData[46].depth);
                    productSpan4.html(productData[46].seatHeight);
                    productSpan5.html(productData[46].armHeight);
                    productSpan6.html(productData[46].backHeight);
                    productSpan7.html(productData[46].fabric);
                    productSpan8.html(productData[46].leather);
                    productSpan9.html(productData[46].woodSpecies);
                    productSpan10.html(productData[46].woodFinish);
                    productSpan11.html(productData[46].metalFinish);
                    productSpan12.html(productData[46].message);
                    productSpan13.html(productData[46].style);
                    productTearSheetLink.attr('href', productData[46].tear);
                    break;

                case 'aiden':
                    productImage.attr('src', productData[13].src);
                    productName.html(productData[13].name);
                    productSpan1.html(productData[13].width);
                    productSpan2.html(productData[13].height);
                    productSpan3.html(productData[13].depth);
                    productSpan4.html(productData[13].seatHeight);
                    productSpan5.html(productData[13].armHeight);
                    productSpan6.html(productData[13].backHeight);
                    productSpan7.html(productData[13].fabric);
                    productSpan8.html(productData[13].leather);
                    productSpan9.html(productData[13].woodSpecies);
                    productSpan10.html(productData[13].woodFinish);
                    productSpan11.html(productData[13].metalFinish);
                    productSpan12.html(productData[13].message);
                    productSpan13.html(productData[13].style);
                    productTearSheetLink.attr('href', productData[13].tear);
                    break;

                case 'coppiaLounge':
                    productImage.attr('src', productData[28].src);
                    productName.html(productData[28].name);
                    productSpan1.html(productData[28].width);
                    productSpan2.html(productData[28].height);
                    productSpan3.html(productData[28].depth);
                    productSpan4.html(productData[28].seatHeight);
                    productSpan5.html(productData[28].armHeight);
                    productSpan6.html(productData[28].backHeight);
                    productSpan7.html(productData[28].fabric);
                    productSpan8.html(productData[28].leather);
                    productSpan9.html(productData[28].woodSpecies);
                    productSpan10.html(productData[28].woodFinish);
                    productSpan11.html(productData[28].metalFinish);
                    productSpan12.html(productData[28].message);
                    productSpan13.html(productData[28].style);
                    productTearSheetLink.attr('href', productData[28].tear);
                    break;

                case 'angelesChair':
                    productImage.attr('src', productData[2].src);
                    productName.html(productData[2].name);
                    productSpan1.html(productData[2].width);
                    productSpan2.html(productData[2].height);
                    productSpan3.html(productData[2].depth);
                    productSpan4.html(productData[2].seatHeight);
                    productSpan5.html(productData[2].armHeight);
                    productSpan6.html(productData[2].backHeight);
                    productSpan7.html(productData[2].fabric);
                    productSpan8.html(productData[2].leather);
                    productSpan9.html(productData[2].woodSpecies);
                    productSpan10.html(productData[2].woodFinish);
                    productSpan11.html(productData[2].metalFinish);
                    productSpan12.html(productData[2].message);
                    productSpan13.html(productData[2].style);
                    productTearSheetLink.attr('href', productData[2].tear);
                    break;

                case 'palmsChair':
                    productImage.attr('src', productData[10].src);
                    productName.html(productData[10].name);
                    productSpan1.html(productData[10].width);
                    productSpan2.html(productData[10].height);
                    productSpan3.html(productData[10].depth);
                    productSpan4.html(productData[10].seatHeight);
                    productSpan5.html(productData[10].armHeight);
                    productSpan6.html(productData[10].backHeight);
                    productSpan7.html(productData[10].fabric);
                    productSpan8.html(productData[10].leather);
                    productSpan9.html(productData[10].woodSpecies);
                    productSpan10.html(productData[10].woodFinish);
                    productSpan11.html(productData[10].metalFinish);
                    productSpan12.html(productData[10].message);
                    productSpan13.html(productData[10].style);
                    productTearSheetLink.attr('href', productData[10].tear);
                    break;

                case 'palmsLoveseat':
                    productImage.attr('src', productData[42].src);
                    productName.html(productData[42].name);
                    productSpan1.html(productData[42].width);
                    productSpan2.html(productData[42].height);
                    productSpan3.html(productData[42].depth);
                    productSpan4.html(productData[42].seatHeight);
                    productSpan5.html(productData[42].armHeight);
                    productSpan6.html(productData[42].backHeight);
                    productSpan7.html(productData[42].fabric);
                    productSpan8.html(productData[42].leather);
                    productSpan9.html(productData[42].woodSpecies);
                    productSpan10.html(productData[42].woodFinish);
                    productSpan11.html(productData[42].metalFinish);
                    productSpan12.html(productData[42].message);
                    productSpan13.html(productData[42].style);
                    productTearSheetLink.attr('href', productData[42].tear);
                    break;

                case 'sheaConsole':
                    productImage.attr('src', productData[17].src);
                    productName.html(productData[17].name);
                    productSpan1.html(productData[17].width);
                    productSpan2.html(productData[17].height);
                    productSpan3.html(productData[17].depth);
                    productSpan4.html(productData[17].seatHeight);
                    productSpan5.html(productData[17].armHeight);
                    productSpan6.html(productData[17].backHeight);
                    productSpan7.html(productData[17].fabric);
                    productSpan8.html(productData[17].leather);
                    productSpan9.html(productData[17].woodSpecies);
                    productSpan10.html(productData[17].woodFinish);
                    productSpan11.html(productData[17].metalFinish);
                    productSpan12.html(productData[17].message);
                    productSpan13.html(productData[17].style);
                    productTearSheetLink.attr('href', productData[17].tear);
                    break;

                case 'sheaSectional':
                    productImage.attr('src', productData[36].src);
                    productName.html(productData[36].name);
                    productSpan1.html(productData[36].width);
                    productSpan2.html(productData[36].height);
                    productSpan3.html(productData[36].depth);
                    productSpan4.html(productData[36].seatHeight);
                    productSpan5.html(productData[36].armHeight);
                    productSpan6.html(productData[36].backHeight);
                    productSpan7.html(productData[36].fabric);
                    productSpan8.html(productData[36].leather);
                    productSpan9.html(productData[36].woodSpecies);
                    productSpan10.html(productData[36].woodFinish);
                    productSpan11.html(productData[36].metalFinish);
                    productSpan12.html(productData[36].message);
                    productSpan13.html(productData[36].style);
                    productTearSheetLink.attr('href', productData[36].tear);
                    break;

                case 'nicholasSofa':
                    productImage.attr('src', productData[33].src);
                    productName.html(productData[33].name);
                    productSpan1.html(productData[33].width);
                    productSpan2.html(productData[33].height);
                    productSpan3.html(productData[33].depth);
                    productSpan4.html(productData[33].seatHeight);
                    productSpan5.html(productData[33].armHeight);
                    productSpan6.html(productData[33].backHeight);
                    productSpan7.html(productData[33].fabric);
                    productSpan8.html(productData[33].leather);
                    productSpan9.html(productData[33].woodSpecies);
                    productSpan10.html(productData[33].woodFinish);
                    productSpan11.html(productData[33].metalFinish);
                    productSpan12.html(productData[33].message);
                    productSpan13.html(productData[33].style);
                    productTearSheetLink.attr('href', productData[33].tear);
                    break;

                case 'palmsChair':
                    productImage.attr('src', productData[9].src);
                    productName.html(productData[9].name);
                    productSpan1.html(productData[9].width);
                    productSpan2.html(productData[9].height);
                    productSpan3.html(productData[9].depth);
                    productSpan4.html(productData[9].seatHeight);
                    productSpan5.html(productData[9].armHeight);
                    productSpan6.html(productData[9].backHeight);
                    productSpan7.html(productData[9].fabric);
                    productSpan8.html(productData[9].leather);
                    productSpan9.html(productData[9].woodSpecies);
                    productSpan10.html(productData[9].woodFinish);
                    productSpan11.html(productData[9].metalFinish);
                    productSpan12.html(productData[9].message);
                    productSpan13.html(productData[9].style);
                    productTearSheetLink.attr('href', productData[9].tear);
                    break;

                case 'chicagoChair':
                    productImage.attr('src', productData[3].src);
                    productName.html(productData[3].name);
                    productSpan1.html(productData[3].width);
                    productSpan2.html(productData[3].height);
                    productSpan3.html(productData[3].depth);
                    productSpan4.html(productData[3].seatHeight);
                    productSpan5.html(productData[3].armHeight);
                    productSpan6.html(productData[3].backHeight);
                    productSpan7.html(productData[3].fabric);
                    productSpan8.html(productData[3].leather);
                    productSpan9.html(productData[3].woodSpecies);
                    productSpan10.html(productData[3].woodFinish);
                    productSpan11.html(productData[3].metalFinish);
                    productSpan12.html(productData[3].message);
                    productSpan13.html(productData[3].style);
                    productTearSheetLink.attr('href', productData[3].tear);
                    break;

                case 'sotto':
                    productImage.attr('src', productData[23].src);
                    productName.html(productData[23].name);
                    productSpan1.html(productData[23].width);
                    productSpan2.html(productData[23].height);
                    productSpan3.html(productData[23].depth);
                    productSpan4.html(productData[23].seatHeight);
                    productSpan5.html(productData[23].armHeight);
                    productSpan6.html(productData[23].backHeight);
                    productSpan7.html(productData[23].fabric);
                    productSpan8.html(productData[23].leather);
                    productSpan9.html(productData[23].woodSpecies);
                    productSpan10.html(productData[23].woodFinish);
                    productSpan11.html(productData[23].metalFinish);
                    productSpan12.html(productData[23].message);
                    productSpan13.html(productData[23].style);
                    productTearSheetLink.attr('href', productData[23].tear);
                    break;

                case 'nicholasSectional':
                    productImage.attr('src', productData[33].src);
                    productName.html(productData[33].name);
                    productSpan1.html(productData[33].width);
                    productSpan2.html(productData[33].height);
                    productSpan3.html(productData[33].depth);
                    productSpan4.html(productData[33].seatHeight);
                    productSpan5.html(productData[33].armHeight);
                    productSpan6.html(productData[33].backHeight);
                    productSpan7.html(productData[33].fabric);
                    productSpan8.html(productData[33].leather);
                    productSpan9.html(productData[33].woodSpecies);
                    productSpan10.html(productData[33].woodFinish);
                    productSpan11.html(productData[33].metalFinish);
                    productSpan12.html(productData[33].message);
                    productSpan13.html(productData[33].style);
                    productTearSheetLink.attr('href', productData[33].tear);
                    break;

                case 'traci':
                    productImage.attr('src', productData[11].src);
                    productName.html(productData[11].name);
                    productSpan1.html(productData[11].width);
                    productSpan2.html(productData[11].height);
                    productSpan3.html(productData[11].depth);
                    productSpan4.html(productData[11].seatHeight);
                    productSpan5.html(productData[11].armHeight);
                    productSpan6.html(productData[11].backHeight);
                    productSpan7.html(productData[11].fabric);
                    productSpan8.html(productData[11].leather);
                    productSpan9.html(productData[11].woodSpecies);
                    productSpan10.html(productData[11].woodFinish);
                    productSpan11.html(productData[11].metalFinish);
                    productSpan12.html(productData[11].message);
                    productSpan13.html(productData[11].style);
                    productTearSheetLink.attr('href', productData[11].tear);
                    break;

                case 'williamSofa':
                    productImage.attr('src', productData[47].src);
                    productName.html(productData[47].name);
                    productSpan1.html(productData[47].width);
                    productSpan2.html(productData[47].height);
                    productSpan3.html(productData[47].depth);
                    productSpan4.html(productData[47].seatHeight);
                    productSpan5.html(productData[47].armHeight);
                    productSpan6.html(productData[47].backHeight);
                    productSpan7.html(productData[47].fabric);
                    productSpan8.html(productData[47].leather);
                    productSpan9.html(productData[47].woodSpecies);
                    productSpan10.html(productData[47].woodFinish);
                    productSpan11.html(productData[47].metalFinish);
                    productSpan12.html(productData[47].message);
                    productSpan13.html(productData[47].style);
                    productTearSheetLink.attr('href', productData[47].tear);
                    break;

                case 'brentonRec':
                    productImage.attr('src', productData[19].src);
                    productName.html(productData[19].name);
                    productSpan1.html(productData[19].width);
                    productSpan2.html(productData[19].height);
                    productSpan3.html(productData[19].depth);
                    productSpan4.html(productData[19].seatHeight);
                    productSpan5.html(productData[19].armHeight);
                    productSpan6.html(productData[19].backHeight);
                    productSpan7.html(productData[19].fabric);
                    productSpan8.html(productData[19].leather);
                    productSpan9.html(productData[19].woodSpecies);
                    productSpan10.html(productData[19].woodFinish);
                    productSpan11.html(productData[19].metalFinish);
                    productSpan12.html(productData[19].message);
                    productSpan13.html(productData[19].style);
                    productTearSheetLink.attr('href', productData[19].tear);
                    break;

                case 'milo':
                    productImage.attr('src', productData[8].src);
                    productName.html(productData[8].name);
                    productSpan1.html(productData[8].width);
                    productSpan2.html(productData[8].height);
                    productSpan3.html(productData[8].depth);
                    productSpan4.html(productData[8].seatHeight);
                    productSpan5.html(productData[8].armHeight);
                    productSpan6.html(productData[8].backHeight);
                    productSpan7.html(productData[8].fabric);
                    productSpan8.html(productData[8].leather);
                    productSpan9.html(productData[8].woodSpecies);
                    productSpan10.html(productData[8].woodFinish);
                    productSpan11.html(productData[8].metalFinish);
                    productSpan12.html(productData[8].message);
                    productSpan13.html(productData[8].style);
                    productTearSheetLink.attr('href', productData[8].tear);
                    break;
            }
            return false;
        });
    });





