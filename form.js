const text = document.querySelector('#text');
const textError = document.querySelector('.text-error');
text.addEventListener('input',function(){
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
    if(nameRegex.test(text.value)){
        textError.textContent = "";
    }else{
        textError.textContent = "Name is incorrect";
    }
});

const email = document.querySelector('#email');
const emailError = document.querySelector('.email-error');
email.addEventListener('input',function(){
    let emailRegex = RegExp('^[abc](.+){1}[A-Za-z]*+@{1}[bl](.+)[co](.+)[in]$');
    if(emailRegex.test(email.value)){
        emailError.textContent = "";
    }else{
        emailError.textContent = "email format is incorrect";
    }
});

const number = document.querySelector('#number');
const numberError = document.querySelector('.number-error');
number.addEventListener('input',function(){
    let numberRegex = RegExp('^([0-9]{2}[ ][0-9]{10})$');
    if(numberRegex.test(number.value)){
        numberError.textContent = "";
    }else{
        numberError.textContent = "number is incorrect";
    }
});
const password = document.querySelector('#password');
const passwordError = document.querySelector('.password-error');
password.addEventListener('input',function(){
    let passwordRegex = RegExp('(?=.*[A-Z])(?=.*\\d)((?=.*[@$!%*?&]){1})[A-Za-z0-9@$!%*?&]{8,}');
    if(passwordRegex.test(password.value)){
        passwordError.textContent = "";
    }else{
        passwordError.textContent = "password is incorrect";
    }
});