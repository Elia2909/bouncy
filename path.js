$('.man-carysel').slick({
    dots:true,
    arrows:false
});
$('.biography-carousel').slick({
    dots:true,
    arrows:false
});
$('.news-carusel').slick({
    dots:true,
    vertical:true,
    arrows:false,
    verticalSwiping:true
});
let burgerMenu = document.querySelector('.burger-menu'); // BURGER
let topBarNavCol = document.querySelector('.header-menu'); // CONTAINER

burgerMenu.addEventListener('click', ()=>{
    if(!(topBarNavCol.classList.contains('active'))){
        burgerMenu.classList.add('active');
        topBarNavCol.classList.add('active');
    }
    else{
        burgerMenu.classList.remove('active');
        topBarNavCol.classList.remove('active');
    }
})