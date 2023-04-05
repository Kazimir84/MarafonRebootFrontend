let emailData = document.querySelector('#email');
let passwordData = document.querySelector('#password');
let inputFieldData = document.querySelector('#inputFieldData')
let clickBtnFb = document.querySelector('#btnFB');
let clickBtnIn = document.querySelector('#btnIN');
let clickBtnLogIn = document.querySelector('#btnLogIn')

function collectFormData () {
    data = {
        email: emailData.value,
        password: passwordData.value,
        inputText: inputFieldData.value
    }       
    // console.log('KKKKK', event)
    if (event.target.innerText == 'Login in with ') {
        console.log('Введені данні через facebook -> ', data)
    } if (event.target.innerText == 'Login in with 2 ') {
        console.log('Введені данні через In -> ', data)
    } if (event.target.innerText == ' Log in') {
        console.log('Введені данні через Log In -> ', data)
    }
}

clickBtnFb.addEventListener('click', collectFormData);
clickBtnIn.addEventListener('click', collectFormData);
clickBtnLogIn.addEventListener('click', collectFormData);