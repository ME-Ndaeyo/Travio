const navSlide = (() =>{
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.navbar');
    const close = document.querySelector('.close');

    menu.addEventListener('click', function(){
        if(menu.style.display = 'block'){
            nav.classList.toggle('show');
            menu.style.display = "none";
            close.style.display = "block"
        }
    });
    close.addEventListener('click', function(){
        if(close.style.display = 'block'){
            nav.classList.toggle('show');
            close.style.display = "none";
            menu.style.display = "block"
        }
    });
});
navSlide();