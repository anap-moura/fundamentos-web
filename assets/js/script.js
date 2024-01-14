let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let elogios = document.querySelector('#elogios')

let nomeOk = false
let emailOk = false
let elogiosOk = false

nome.style.width = '17%'
email.style.width = '17%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'O nome deve conter ao menos 3 caracteres'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = '' // Limpar a mensagem quando o nome for válido
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = "Digite um e-mail válido."
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = '' // Limpar a mensagem quando o email for válido
        emailOk = true
    }
}

function validaElogios() {
    let txtElogios = document.querySelector('#txtElogios')
    if (elogios.value.length >= 100) {
        txtElogios.innerHTML = "O campo Elogios deve conter até 100 caracteres."
        txtElogios.style.color = 'red'
    } else {
        txtElogios.innerHTML = '' // Limpar a mensagem quando o elogio for válido
        elogiosOk = true;
    }
}

function enviar() {
    if (nomeOk && emailOk && elogiosOk) {
        alert('Formulário enviado!')
    } else {
        alert('Verifique se todos os campos estão preenchidos corretamente.')
    }
}
