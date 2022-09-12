let errorAlert = document.querySelector('.false-email');
errorAlert.style.display = 'none'

function validEmail() {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let emailInput = document.querySelector('.form');
    
    emailInput.addEventListener('change', () => {

        if (!emailInput.value.match(emailPattern)) {
            emailInput.classList.add('valid');

            if (emailInput.value == '') {
                emailInput.classList.remove('valid');
            } else return;
        }   
    })
}

validEmail();