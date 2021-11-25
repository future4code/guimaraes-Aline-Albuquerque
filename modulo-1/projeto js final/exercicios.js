// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}


// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
const altura = prompt("Digite a altura")
const largura = prompt("Digite a largura")

console.log(altura * largura)
}
console.log("oi")

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
const anoAtual = prompt("Qual ano nós estamos?")
const anoNascimento = prompt("Que ano você nasceu?")

console.log(anoAtual - anoNascimento )
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
const imc = peso / (altura * altura)
return imc 

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
const seuNome = prompt("Digite seu Nome")
const suaIdade = prompt("Digite sua Idade")
const seuEmail = prompt("Digite seu E-mail")

console.log(`Meu nome é ${seuNome}, tenho ${suaIdade} anos, e o meu email é ${seuEmail}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
const cor1 = prompt("Digite uma cor")
const cor2 = prompt("Digite uma segunda cor")
const cor3 = prompt("Digite uma terceira cor")

const arrayCores = [cor1, cor2, cor3]
console.log(arrayCores)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
const stringMaisculo = string.toUpperCase()
return stringMaisculo

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
const minimoDeIngressos = custo / valorIngresso
return minimoDeIngressos

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
const tamanhoString1 = string1.length 
const tamanhoString2 = string2.length
return tamanhoString1 === tamanhoString2

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
const elemeto = array.length - 1
  return array[elemeto] 

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array, array0) {
  // implemente sua lógica aqui
  array0 = array[0]
  array[0] = array[array.length - 1]
  array[array.length - 1] = array0

  return array
}


// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
const novaString1 = string1.toUpperCase()
const novaString2 = string2.toUpperCase()
  return novaString1 === novaString2


}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
const anoAtual = Number(prompt("Digite o ano atual"))
const anoQueNasceu = Number(prompt("Digite o ano que você nasceu"))
const anoCarteira = Number(prompt("Que ano sua carteira de identidade foi emitida?"))
const idade = anoAtual - anoQueNasceu
const validaCarteira = anoAtual - anoCarteira
if(idade , validaCarteira){
const valida20 = idade<=20 && validaCarteira ===5
console.log(valida20)

}


}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}