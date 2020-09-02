$('.head__language-menu').click(function(){
    slideMenu();
});

function slideMenu(){
    $('#arrow').toggleClass('deg0').toggleClass('deg180');
    $('.head__language >a').slideToggle(500); 
}



// $('#arrow').click(function(){
//     $(this).toggleClass('deg0').toggleClass('deg180');
//     $('.head__language >a').slideToggle(500); 
// });


$('.num , .head__button-item2').click(function(){
    $('.info__body-container-margin').offset();
    $('html, body').animate({
    'scrollTop' : $('.info__body-container-margin').offset().top -180},500);  
});


var slide1 = $('.slide1');
var slide1_left = $('.slide1__left-arrow');
var slide1_right = $('.slide1__right-arrow');


var slide2 = $('.slide2');
var slide2_left = $('.slide2__left-arrow');
var slide2_right = $('.slide2__right-arrow');


var slide3 = $('.slide3');
var slide3_left = $('.slide3__left-arrow');
var slide3_right = $('.slide3__right-arrow');

// Стрелки первого слайда.

slide1_left.click(function(){
    slide1.css('display','none');
    slide3.css('display','flex');
});

slide1_right.click(function(){
    slide1.css('display','none');
    slide2.css('display','flex');
});

// Стрелки второго слайда.

slide2_left.click(function(){
    slide2.css('display','none');
    slide1.css('display','flex');
});

slide2_right.click(function(){
    slide2.css('display','none');
    slide3.css('display','flex');
});

// Стрелки третьего слайда

slide3_left.click(function(){
    slide3.css('display','none');
    slide2.css('display','flex');
});

slide3_right.click(function(){
    slide3.css('display','none');
    slide1.css('display','flex');
});