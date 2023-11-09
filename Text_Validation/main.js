// regex means regular expression.

//  Regular expressions are patterns used to match character combinations in strings.  

// These expressions are used to validate strings/texts or search through texts/strings

// methods of regex includes: match(), test(), search, replace() e.t.c

const emailField = document.querySelector('.form_field');
const error = document.querySelector('.error')

const emailRegex = /^([A-Za-z\d\.-]+)@([A-Za-z\d-]+)\.([A-Za-z]{2,6})(\.[A-Za-z]{2,6})?$/

// john@gmail.com

// john@gmail.co.uk

//  johnAlfred-.yellow@gmail.com

emailField.addEventListener('keyup', (e)=>{
    // console.log(e.target.value)
    if(emailRegex.test(e.target.value)){
        emailField.parentElement.classList.add('valid')
        // reset error field
        error.innerHTML = '';
    }else{
        emailField.parentElement.classList.remove('valid')
        error.innerHTML = 'Email not vaild'
    }
})