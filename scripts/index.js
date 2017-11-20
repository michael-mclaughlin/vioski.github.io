$(document).ready(function(){
    dropDownUl('product-nav-parent-listItem-anchor');
    leftMenu('menu-button', 'product-nav');
    scrollToId();
    swapHeaderImages();
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
     var nav = $('nav');
     var navHeight = nav.height();

     $(document).on('click', 'a[href^="#"]', function(e) {
         var id = $(this).attr('href');
         var $id = $(id);
         if ($id.length === 0) {
             return;
         }
         e.preventDefault();
         var pos = $(id).offset().top;
         var totalPos = pos - navHeight;
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
    var timer = 4000;
    var fadeTimer = 1000;
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

