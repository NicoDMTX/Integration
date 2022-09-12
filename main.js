let errorAlert = document.querySelector('.false-email');

function validEmail() {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let emailInput = document.querySelector('.form');
    let iconError = document.querySelector('.icon-error');
    
    emailInput.addEventListener('change', () => {

        if (!emailInput.value.match(emailPattern)) {
            emailInput.classList.add('invalid');
            errorAlert.style.display = 'inherit'
            iconError.style.display = 'inherit'

            if (emailInput.value == '') {
                emailInput.classList.remove('invalid');
                errorAlert.style.display = 'none'
                iconError.style.display = 'none'

            } else return;
        }   
    })
}

validEmail();