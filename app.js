window.addEventListener('load', ()=>{
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('preloader-finish');
    changeTheme();
})

function changeTheme(){
    const buttonChangetheme = document.getElementById('changetheme');

    buttonChangetheme.addEventListener('click', ()=>{
        if(document.querySelector('.fa-solid').classList[1] == 'fa-sun'){
            document.querySelector('.fa-solid').classList.replace('fa-sun','fa-moon');
            document.querySelector('body').classList.replace('light-mode','dark-mode');
            document.querySelector('.tittle').classList.replace('light-mode','dark-mode');
            document.querySelector('.sub-tittle').classList.replace('light-mode','dark-mode');
           
        } else {
            document.querySelector('.fa-solid').classList.replace('fa-moon','fa-sun');
            document.querySelector('body').classList.replace('dark-mode','light-mode');
            document.querySelector('.tittle').classList.replace('dark-mode','light-mode');
            document.querySelector('.sub-tittle').classList.replace('dark-mode','light-mode');
        }

        
    })
}