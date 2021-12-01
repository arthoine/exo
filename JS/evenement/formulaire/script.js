let email = document.getElementById('email')
let password = document.getElementById('password')
let form = document.querySelector('form')
let error = document.getElementById('error')

var regexEmail = /^([0-9a-zA-Z].*?@([0-9a-zA-Z].*\.\w{2,4}))$/

email.addEventListener('input', (event) => {
    if (!regexEmail.test(event.target.value)) {
        error.innerText = 'Le format de l\'email est incorrect'
    } else {
        error.innerText = ''
    }
})

password.addEventListener('input', (event) => {
    if (event.target.value.length < 8) {
        error.innerText = 'le mot de passe doit contenir au moins 8 caractères'
    } else {
        error.innerText = ''
    }
})

form.addEventListener('submit', (event) => {
    if (error.innerText !== '') {
        event.preventDefault()
    }
})