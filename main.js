const header = document.querySelector(".header");

window.addEventListener('scroll', function(){
    const scroll = window.pageYOffset > 0;

    if (scroll ==true){
        header.classList.toggle("header-active",true);
    }
    else{
        header.classList.toggle("header-active",false);
    }
})


