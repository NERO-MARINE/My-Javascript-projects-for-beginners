const smile = document.querySelector('.smile');
const frown = document.querySelector('.frown');

smile.addEventListener('click', ()=>{
    smile.classList.remove('active');
    frown.classList.add('active');
});

frown.addEventListener('click', ()=>{
    frown.classList.remove('active');
   smile.classList.add('active');
});