const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const automatic = true;
let in_the_interval;


// function for next button
function nextSlide(){
    // get the current class
    const current = document.querySelector('.current');
    // remove the current class
    current.classList.remove('current');
    // check for next element sibling. if nextElemnentSlibling add the class of current.
    if(current.nextElementSibling){
        current.nextElementSibling.classList.add('current');
    }
    else{
        // add current to the first slide
        slides[0].classList.add('current');
    }
}

nextBtn.addEventListener('click', ()=>{
    nextSlide();
    // clear the setInterval
    clearInterval(in_the_interval);
    // set a fresh interval
    in_the_interval = setInterval(nextSlide, 2000);

})

// function for previous button

function previousSlide(){
    // get the current class
    const current = document.querySelector('.current');
    // remove the current class
    current.classList.remove('current');
    // check for next element sibling. if nextElemnentSlibling add the class of current.
    if(current.previousElementSibling){
        current.previousElementSibling.classList.add('current');
    }
    else{
        // add current to the first slide
        slides[slides.length -1].classList.add('current');
    }
}

prevBtn.addEventListener('click', ()=>{
    previousSlide();
    // clear the setInterval
    clearInterval(in_the_interval);
    // set a fresh interval
    in_the_interval = setInterval(nextSlide, 2000);

})


if(automatic){
    in_the_interval = setInterval(nextSlide, 2000);
}