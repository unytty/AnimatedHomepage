const navItems = document.querySelector('#nav__items');
const openNavBtn = document.querySelector('#open_nav-btn');
const closeNavBtn = document.querySelector('#close__nav-btn');

openNavBtn.addEventListener('click',() => {
    navItems.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
});

const closeNav = () => {
    navItems.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none'
};

closeNavBtn.addEventListener('click', closeNav);

//close nav menu when a menu item is clicked
if(window.innerWidth < 1080) {
    document.querySelectorAll('#nav__items li a').forEach(navItem => {      
        navItem.addEventListener('click', () => {
            closeNav();
        });

    });
};

//change nav style on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY > 0)
});

//

$(document).ready(function(){

    AOS.init();

    luxy.init({
        wrapper:'#luxy',
        targets: '.luxy-el',
        wrapperSpeed:0.08
        });

    $(".sec5 video").on('click', function(){
        $(this).get(0).play();
    });



    $(".image_slider").slick({
        centerMode: true,
        autoplay: true,
        autiplaySpeed: 1000,
        speed: 3000,
        slidesToShow:3,
        slidesToScroll:1,
    });

});




//CONTACT BUTTONS (circular text buttons)
const textButtons = document.querySelectorAll('.contact__btn');

textButtons.forEach(textButton => {
    let text = textButton.querySelector('p');

    text.innerHTML = text.innerHTML.split('').map((character, index) => `<span style="transform:rotate(${index * 12}deg)">${character}</span>`).join('')
});