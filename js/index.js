let btn = document.querySelector('#btn');
let email = document.querySelector('#email');
let errorMessage = document.querySelector('#errorMessage');
let inputError = document.querySelector('.input-border');
let inputErrorIcon = document.querySelector('.error-icon');

btn.addEventListener('click', (e)=>{
    e.preventDefault();
    emailValidation();
})

function resetForm(){
    email.value = "";
}

function success(){
    email.style.borderColor = "hsl(0, 0%, 63%)";
    inputErrorIcon.classList.add('hidden');
    errorMessage.classList.add('hidden');
    return resetForm();
}

function error(){
    email.style.borderColor = "hsl(0, 93%, 68%)";
    inputErrorIcon.classList.remove('hidden');
    errorMessage.classList.remove('hidden');
    errorMessage.innerHTML = "This field must be filled";
}

function emailValidation(){
     if(email.value == ''){
     return error();
     }else{
      return success();
     }
}