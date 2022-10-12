const modalBtn = document.querySelector('#modalBtn');
const modal = document.querySelector('.modal_background');
const closeBtn = document.querySelector('#closeBtn');
const body = document.querySelector('body');

modalBtn.addEventListener('click', ()=>{
    modal.style.display = 'block';
});


closeBtn.addEventListener('click', ()=>{
    modal.style.display = 'none';
});


// window.addEventListener('click', (e)=>{
//     console.log(e.target);
// })

body.addEventListener('click', (e)=>{
    // console.log(e.target);
    if(e.target.classList.contains('modal_background')){
        modal.style.display = 'none'
    }
})

