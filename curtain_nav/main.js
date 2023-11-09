const hambuger = document.querySelector('.hambuger');
const navbar = document.querySelector('.Navbar');

hambuger.addEventListener('click',()=>{
    navbar.classList.toggle('active')
    hambuger.classList.toggle('active')
    
})
