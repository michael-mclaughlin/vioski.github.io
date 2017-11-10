$(document).ready(function(){
    dropDownUl('product-nav-parent-listItem-anchor');
    leftMenu('menu-button', 'product-nav');
    scrollToId();
});

var dropDownUl = function (className){
    var className = className;
    var link = $("." + className);

    link.on('click', function(){
        $(this).toggleClass('activeUl');
            if($(this).hasClass('activeUl')){
                $(this).next('ul').slideDown('fast');
            }else{
                $(this).next('ul').slideUp('fast');
            };
    });
};

var scrollToId = function(){
     // handle links with @href started with '#' only
     $(document).on('click', 'a[href^="#"]', function(e) {
         var id = $(this).attr('href');
         var $id = $(id);
         if ($id.length === 0) {
             return;
         }
         e.preventDefault();
         var pos = $(id).offset().top;
         var totalPos = pos;
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
                leftNav.animate({'left': 0}, 'fast');
            }else{
                leftNav.animate({'left': '-16rem'}, 'fast');
            };
    });
};


var arrayOfHeroImages = function(){

    var imageArray = [];
    var image = $('<img>');
    var hero = $('header');

    imageArray.push(totalImage);
    hero.append(imageArray);

}
