//Declaração de variáveis
let nome = document.getElementById('idNome')
let email = document.getElementById('idEmail')
let mensagem = document.getElementById('idMensagem')

//Validação do Formulário
function validaForm() {
	validaNome()

	validaEmail()

	validaMensagem()
}

//Não aceita nome vazio
function validaNome() {
	nome.value == '' ? (nome.style.borderColor = 'red') : setGreen(nome)
}

//Não aceita email vazio nem sem o @
function validaEmail() {
	const regExp = /.{1,30}@(.{1,20}(?!\.)){1,7}/;
	email.value == '' || !regExp.test(String(email.value)))
		? (email.style.borderColor = 'red')
		: setGreen(email)
}

//Não aceita mensagem vazia
function validaMensagem() {
	mensagem.value == ''
		? (mensagem.style.borderColor = 'red')
		: setGreen(mensagem)
}

//Setar cor green
function setGreen(element) {
	element.style.borderColor = 'green'
	element.style.borderWidth = '3px'
}

nome.addEventListener('change', validaNome)
email.addEventListener('change', validaEmail)
mensagem.addEventListener('change', validaMensagem)

//chamada da função
validaForm()
