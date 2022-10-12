const btn = document.querySelector('#btn');
let colors = ['red', 'purple', 'white', 'black', 'green'];
let i = 0;

function changeBackground(){
    document.querySelector('body').style.backgroundColor = colors[i];
    if(i < colors.length -1){
        i++;
    }
    else{
        i = 0;
    }
     setTimeout(changeBackground, 2000)
}
window.onload = changeBackground;
// btn.addEventListener('click', changeBackground)


// assignment--- randomize the Changing of the colors.

