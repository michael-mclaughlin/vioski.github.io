$(document).ready(function(){
    dropDownUl('product-nav-parent-listItem-anchor');
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



var arrayOfHeroImages = function(){

    var imageArray = [];
    var image = $('<img>');
    var hero = $('header');

    imageArray.push(totalImage);
    hero.append(imageArray);

}
