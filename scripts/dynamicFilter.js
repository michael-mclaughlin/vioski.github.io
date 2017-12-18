$(document).ready(function(){
        $(function(){
            var retrievedLinkData = JSON.parse(localStorage.getItem("storedLinkData"));
            var data = retrievedLinkData;
            var navFilterLinks = $('.nav-filter-links');
            var collection = $('div');
            switch (data) {
                case 'all':
                    collection.filter("[class~='collection-cards']").fadeIn('500');
                    localStorage.clear();
                    break;

                case 'beds':
                    collection.filter(":not([class~='beds'])").fadeOut('500');
                    collection.filter("[class~='beds']").fadeIn('500');
                    localStorage.clear();
                    break;

                case 'benches':
                    collection.filter(":not([class~='benches'])").fadeOut('500');
                    collection.filter("[class~='benches']").fadeIn('500');
                    localStorage.clear();
                    break;

                case 'chairs':
                    collection.filter(":not([class~='chairs'])").fadeOut('500');
                    collection.filter("[class~='chairs']").fadeIn('500');
                    localStorage.clear();
                    break;

                case 'consoles':
                    collection.filter(":not([class~='consoles'])").fadeOut('500');
                    collection.filter("[class~='consoles']").fadeIn('500');
                    localStorage.clear();
                    break;

                case 'desks':
                    collection.filter(":not([class~='desks'])").fadeOut('500');
                    collection.filter("[class~='desks']").fadeIn('500');
                    localStorage.clear();
                    break;

                case 'lounges':
                    collection.filter(":not([class~='lounges'])").fadeOut('500');
                    collection.filter("[class~='lounges']").fadeIn('500');
                    localStorage.clear();
                    break;

                case 'tables':
                    collection.filter(":not([class~='tables'])").fadeOut('500');
                    collection.filter("[class~='tables']").fadeIn('500');
                    localStorage.clear();
                    break;

                case 'sectionals':
                    collection.filter(":not([class~='sectionals'])").fadeOut('500');
                    collection.filter("[class~='sectionals']").fadeIn('500');
                    localStorage.clear();
                    break;

                case 'sofas':
                    collection.filter(":not([class~='sofas'])").fadeOut('500');
                    collection.filter("[class~='sofas']").fadeIn('500');
                    localStorage.clear();
                    break;
            }
            return false;
        });
});