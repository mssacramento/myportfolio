//Declarando Variáveis
let btnContact = document.querySelector('.mss-btn-contact');

//Page Preloader
window.addEventListener('load', function(){
    let pagePreloder = document.querySelector('.mss-preloader');
        pagePreloder.classList.add('mss-fade-out');
        setTimeout(function () {
            pagePreloder.style.display = 'none';
        }, 2000);
    
});


//Abrindo e fechando informações de contato.
btnContact.addEventListener('click', function(){
    let = boxContact = document.querySelector('.mss-contact-info');
    boxContact.classList.toggle('mss-is-open');
    this.classList.toggle('mss-change-icon');
});