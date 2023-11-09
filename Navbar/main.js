const hambuger = document.querySelector('.hambuger');
const navLinks = document.querySelector('.navbar_links');

hambuger.addEventListener('click', ()=>{
    navLinks.classList.toggle('active')
})