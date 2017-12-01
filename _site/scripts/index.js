$(document).ready(function(){
    dropDownUl('product-nav-parent-listItem-anchor');
    leftMenu('menu-button', 'product-nav');
    scrollToId();
    swapHeaderImages();
    filterProducts();
//    arrayOfHeroImages();
});

var dropDownUl = function (className){
    var className = className;
    var link = $("." + className);

    link.on('click', function(event){
        event.preventDefault();
        $(this).toggleClass('activeUl');
            if($(this).hasClass('activeUl')){
                $(this).next('ul').slideDown('fast');
                $(this).find('span').addClass('activeDots');
            }else{
                $(this).next('ul').slideUp('fast');
                $(this).find('span').removeClass('activeDots');
            };
    });
};

var scrollToId = function(){
     // handle links with @href started with '#' only
     var nav = $('#main-navigation');
     var navHeight = nav.height();
     var minusHeight = 2;

     $(document).on('click', 'a[href^="#"]', function(e) {
         var id = $(this).attr('href');
         var $id = $(id);
         if ($id.length === 0) {
             return;
         }
         e.preventDefault();
         var pos = $(id).offset().top;
         var totalPos = pos - (navHeight - minusHeight);
     $('body, html').animate({scrollTop: totalPos});
     });
};

var leftMenu = function(className, elementClassName) {
    var className = className;
    var menuButton = $('.' + className);
    var elementClassName = elementClassName;
    var leftNav = $('.' + elementClassName);

    menuButton.on('click', function(){
        $(this).toggleClass('activeMenu');
            if($(this).hasClass('activeMenu')){
                leftNav.animate({'left': 0}, 500);
            }else{
                leftNav.animate({'left': '-17rem'}, 500);
            };
    });
};

var swapHeaderImages = function(){
    var image = $('#header-background-images');
    var imagesArray = [
        { name: 'fratelli chairs',
          src: 'assets/fratelliGrayShadowCropped.png',
        },
        { name: 'chicago sofa',
          src: 'assets/chicagoSofaShadowCropped.png',
        },
        { name: 'william sofa',
          src: 'assets/williamShadowCropped.png',
        },
    ];
    var i = 1;
    var timer = 6000;
    var fadeTimer = 1000;

    image.attr('src', imagesArray[0].src);
    image.attr('alt', imagesArray[0].name);
    var rotateImage = function() {
        image.fadeOut(fadeTimer, function(){
            var that = $(this);
            that.attr('src', imagesArray[i].src);
            that.attr('alt', imagesArray[i].name);

            that.fadeIn(fadeTimer, function(){
                if (i === imagesArray.length - 1) {
                    i = 0;
                } else {
                    i++;
                };
            });
        });
    }
    setInterval (rotateImage, timer);
};

var filterProducts = function () {
    var filters = $('.nav-filter-links');


    filters.on('click', function(){
        var that = $(this);
        var data = that.attr('data-products');
        var collection = $('div');
        switch (data) {
            case 'all':
                collection.filter("[class~='collection-cards']").fadeIn('500');
                break;

            case 'beds':
                collection.filter(":not([class~='beds'])").fadeOut('500');
                collection.filter("[class~='beds']").fadeIn('500');

                break;

            case 'benches':
                collection.filter(":not([class~='benches'])").fadeOut('500');
                collection.filter("[class~='benches']").fadeIn('500');
                break;

            case 'chairs':
                collection.filter(":not([class~='chairs'])").fadeOut('500');
                collection.filter("[class~='chairs']").fadeIn('500');
                break;

            case 'consoles':
                collection.filter(":not([class~='consoles'])").fadeOut('500');
                collection.filter("[class~='consoles']").fadeIn('500');
                break;

            case 'desks':
                collection.filter(":not([class~='desks'])").fadeOut('500');
                collection.filter("[class~='desks']").fadeIn('500');
                break;

            case 'lounges':
                collection.filter(":not([class~='lounges'])").fadeOut('500');
                collection.filter("[class~='lounges']").fadeIn('500');
                break;

            case 'tables':
                collection.filter(":not([class~='tables'])").fadeOut('500');
                collection.filter("[class~='tables']").fadeIn('500');
                break;

            case 'sectionals':
                collection.filter(":not([class~='sectionals'])").fadeOut('500');
                collection.filter("[class~='sectionals']").fadeIn('500');
                break;

            case 'sofas':
                collection.filter(":not([class~='sofas'])").fadeOut('500');
                collection.filter("[class~='sofas']").fadeIn('500');
                break;
        }
        return false;
    })
};

