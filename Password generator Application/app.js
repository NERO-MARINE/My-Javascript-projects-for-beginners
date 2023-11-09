const pwEl = document.querySelector('#pw');
const copyEl = document.querySelector('#copy');
const lenEl = document.querySelector('#len');
const upperEl = document.querySelector('#upper');
const lowerEl = document.querySelector('#lower');
const numberEl = document.querySelector('#number');
const symbolEl = document.querySelector('#symbol');
const generateEl = document.querySelector('#generate');

const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_-+=';


function getUpperCase(){
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}


function getlowerase(){
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}


function getNumber(){
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbols(){
    return symbols[Math.floor(Math.random() * symbols.length)];
}

generateEl.addEventListener('click',  generatePassword);


function generatePassword(){
    const len = lenEl.value;
    // console.log(len);
    let password = '';
    if(upperEl.checked){
        password += getUpperCase();
    }

    if( lowerEl.checked){
        password += getlowerase();
    }

    if( numberEl.checked){
        password += getNumber();
    }

    if( symbolEl.checked){
        password += getSymbols();
    }

    // let i = password.length;
    // console.log(i)

    for(let i = password.length; i < len; i++){
         password += generateP()
    }
    
    // console.log(password);
    pwEl.innerHTML = password;
}

function generateP(){
    const pwArray = [];
    if(upperEl.checked){
       pwArray.push(getUpperCase());
    }

     if(lowerEl.checked){
        pwArray.push(getlowerase());
     }

     if(numberEl.checked){
     pwArray.push(getNumber())
    }

    if(symbolEl.checked){
       pwArray.push(getSymbols())
    }

    if(pwArray.length === 0){
        return '';
    } else{
        return pwArray[Math.floor(Math.random() * pwArray.length)];
    }
}

copyEl.addEventListener('click',  ()=>{
    const bdy = document.querySelector('body');
    const textArea = document.createElement('textarea');
        const OurPassword = pwEl.innerHTML;
        textArea.value = OurPassword;
        bdy.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
        alert('password copied');
        
});


// const car = [];
// car.push('toyota', 'limo');
// console.log(car);