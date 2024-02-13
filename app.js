window.addEventListener('load', ()=>{
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('preloader-finish');
    changeTheme();
    scrollToTop();
    window.scrollTo(0,0);
})
window.addEventListener('scroll',()=>{
    if(window.scrollY >= 10){
        document.querySelector('.scrollarrow').style.opacity = 1;
    }else{
        document.querySelector('.scrollarrow').style.opacity = 0;
    }
})

function changeTheme(){
    const buttonChangetheme = document.getElementById('changetheme');

    buttonChangetheme.addEventListener('click', ()=>{
        if(document.querySelector('.theme').classList[1] == 'fa-moon'){
            document.querySelector('.theme').classList.replace('fa-moon','fa-sun');
            document.querySelector('body').classList.replace('light-mode','dark-mode');
            document.querySelector('.tittle').classList.replace('light-mode','dark-mode');
            document.querySelector('.sub-tittle').classList.replace('light-mode','dark-mode');
           
        } else {
            document.querySelector('.theme').classList.replace('fa-sun','fa-moon');
            document.querySelector('body').classList.replace('dark-mode','light-mode');
            document.querySelector('.tittle').classList.replace('dark-mode','light-mode');
            document.querySelector('.sub-tittle').classList.replace('dark-mode','light-mode');
        }
    })
}

/* Scroll smooth*/

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);

    if (section) {
        window.scrollTo({
            top: section.offsetTop,
            behavior: "smooth"
        });
    }

}

document.querySelector('nav a[href="#portifolio"]').addEventListener('click', function (event) {
    event.preventDefault(); 

    scrollToSection('portifolio');
});

document.querySelector('nav a[href="#sobre"]').addEventListener('click', function (event) {
    event.preventDefault(); 
    
    scrollToSection('sobre');
});

function scrollToTop(){
    const buttonChangeScroll = document.getElementById('changescroll');
    
    buttonChangeScroll.addEventListener('click',()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
    });
}

