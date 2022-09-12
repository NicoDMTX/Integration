let errorAlert = document.querySelector('.false-email');
errorAlert.style.display = 'none'

const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

let emailInput = document.querySelector('.form')
emailInput.addEventListener('change', () => {
    console.log('email name : ' + emailInput.value)
    if (emailInput.value.match(emailPattern)) {
        emailInput.classList.add('valid')
    }
    
})

let submitBtn = document.querySelector('#submit')

submitBtn.addEventListener('click', () => {

})
