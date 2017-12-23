$(document).ready(function(){
        $(function(){
            var retrievedLinkData = JSON.parse(localStorage.getItem("storedLinkData"));
            var data = retrievedLinkData;
            var navFilterLinks = $('.nav-filter-links');
            var navFilterLinksData = navFilterLinks.attr('data-products');
            var collection = $('div');
            switch (data) {
                case 'all':
                    collection.filter("[class~='collection-cards']").fadeIn('500');
                    $('.nav-filter-links[data-products="all"]').addClass('nav-filter-links-active');
                    break;

                case 'benches':
                    collection.filter("[class~='benches']").fadeIn('500');
                    $('.nav-filter-links[data-products="benches"]').addClass('nav-filter-links-active');
                    break;

                case 'chairs':
                    collection.filter("[class~='chairs']").fadeIn('500');
                    $('.nav-filter-links[data-products="chairs"]').addClass('nav-filter-links-active');
                    break;

                case 'consoles':
                    collection.filter("[class~='consoles']").fadeIn('500');
                    $('.nav-filter-links[data-products="consoles"]').addClass('nav-filter-links-active');
                    break;

                case 'desks':
                    collection.filter("[class~='desks']").fadeIn('500');
                    $('.nav-filter-links[data-products="desks"]').addClass('nav-filter-links-active');
                    break;

                case 'lounges':
                    collection.filter("[class~='lounges']").fadeIn('500');
                    $('.nav-filter-links[data-products="lounges"]').addClass('nav-filter-links-active');
                    break;

                case 'tables':
                    collection.filter("[class~='tables']").fadeIn('500');
                    $('.nav-filter-links[data-products="tables"]').addClass('nav-filter-links-active');
                    break;

                case 'sectionals':
                    collection.filter("[class~='sectionals']").fadeIn('500');
                    $('.nav-filter-links[data-products="sectionals"]').addClass('nav-filter-links-active');
                    break;

                case 'sofas':
                    collection.filter("[class~='sofas']").fadeIn('500');
                    $('.nav-filter-links[data-products="sofas"]').addClass('nav-filter-links-active');
                    break;
            }
            return false;
        });
});