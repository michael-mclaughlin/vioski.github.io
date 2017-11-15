$(document).ready(function(){
    dropDownUl('product-nav-parent-listItem-anchor');
    leftMenu('menu-button', 'product-nav');
    scrollToId();
    arrayOfHeroImages();
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

var arrayOfHeroImages = function(){
    var i = 0;
    var limit = 0;
    var limitCount = 0;
    var interval = 1;
    var header = $('header');
    var imageArray = [
        "assets/fratelliGrayShadowCropped.png",
        "assets/chicagoSofaShadowCropped.png",
        "assets/williamShadowCropped.png"
    ];
    header.css({ "background-image":"url(" + imageArray[0]+ ")" });
    var myInterval = setInterval(function() {
       if (limit && limitCount >= limit-1) clearTimeout(myInterval);
       if (i >= imageArray.length) i = 0;
        header.css({ "background-image":"url(" + imageArray[i]+ ")"});
       i++;
       limitCount++;
    }, interval*5000);

}
