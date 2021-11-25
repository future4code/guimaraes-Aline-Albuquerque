// EXERCÍCIO 1 A:


// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0]) // Será imprenso "Matheus Nachtergaele" que ocupa a posição 0 de elenco, dentro do objeto "filme."
// console.log(filme.elenco[filme.elenco.length - 1]) // Será impreso "Virginia Cavendish" que ocupa a última posição do array. que é a que ele está acessando.
// console.log(filme.transmissoesHoje[2]) // Será impresso o segundo elemento do array "canal: "Globo", horario: "14h" que está sendo acessado.



// EXERCÍCIO 2 A:

// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro) // Será impresso o Objeto cachorro com suas informações: nome, idade e raça.
// console.log(gato) // Será impresso o objeto cachorro através do espelhamento porém, com a alteração de nome que agora é "juba".
// console.log(tartaruga) // Será impresso o objeto "cachorro" com a alterção anterior de nome para "Juba" e com o comando de replaceAll substituindo as letras "a" pela letra "o", ficando: Jubo', idade: 3, raca: 'SRD.
 

// EXERCÍCIO 2 B:
// A sintaxe de três pontos (...) antes do objeto realiza a cópia do objeto (ou array) inteiro, e é chamada de espelhamento e/ou spread. Onde conseguimos manipulá-lo (array ou objeto) alterarando ou adicionando propriedades.


// EXERCÍCIO 3 A: 

// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender")) // Retornará "False".
// console.log(minhaFuncao(pessoa, "altura")) // Retornará undefined.


// EXERCÍCIO 3 B:
// O console retornou false pois é o elemento que está declarado na função, e que foi chamado.
// O console retorna undefined pois não foi declaro "altura", logo ele não reconhece.


// EXERCÍCIO ESCRITA DE CÓDIGO:
//1 A:

// const pessoa = {
//     nome: "Aline" ,
//     apelidos: ["line","li","alanis"]
// }

// const frase = `Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos}`
// console.log(frase)

// //1 B:

// const pessoa1 = {
//     ...pessoa,
//     apelidos: ["lindeza", "lindoca", "ali babá"]
// }

// const frase1 = `Eu sou ${pessoa1.nome}, mas pode me chamar de: ${pessoa1.apelidos}`
// console.log(frase1)


// EXERCÍCIO 2 A:

// const objeto1 = {
//     nome: "aline",
//     idade: 25,
//     profissão: "estudante"

// }

// const objeto2 = {
//     nome:"Helena",
//     idade:28,
//     profissão: "bióloga"

// }

// // 2 B:

// function objetos(objeto1){
// const array = [objeto1.nome, objeto1.nome.length, objeto1.idade, objeto1.profissão, objeto1.profissão.length]
// console.log(array)
// return array
// }

// objetos(objeto1)
// objetos(objeto2)



// Exercício 3 A:

// let carrinho = []

// // 3 B:

// let objeto1 = {nome: "Abacaxi" , disponibilidade: true}
// let objeto2 = {nome : "Laranja", disponibilidade: true}
// let objeto3 = {nome: "Morango", disponibilidade: true}


// // 3 c:

// function objetos(frutas){
// carrinho.push(frutas)
// }

// objetos(objeto1)
// objetos(objeto2)
// objetos(objeto3)

// // 3 d:
// console.log(carrinho)




// EXERCÍCIO CONDICIONAIS: 

// 1

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

// a) Explique o que o código faz. Qual o teste que ele realiza? 
// O código pede uma string pro usuário, transformando-a em número e adicionando a condição. Essa por sua vez, determina o valor do resto da divisão por 2, onde se (if) o número for divisível por 2 imprimirá "passou no teste." Se não, (entrando na condição (else)) imprimirá "não passou no teste".

// b) Para que tipos de números ele imprime no console "Passou no teste"?
// Para os números que entram na consição if. Os pares, pois são divisíveis por 2.

//c) Para que tipos de números a mensagem é "Não passou no teste"?
// Para os números que entram na condição else. Os ímpares, pois não não divisíveis por 2.



// 2:

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//a) O código acima serve para dar o valor das frutas ao usuário.

//b) Será impresso o valor que a fruta recebe em "Maça" com a mensagem do console. Ficando então:
// "O preço da fruta "
// "Maçã"
// " é "
// "R$ "
// 2.25

// c)  Se retirássemos o break o console imprimiria "Perâ" em default, atribuindo o valor dele, no caso do exercício = a 5.


// 3:

const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

// a) está pedindo para o usuário digitar o primeiro número.

// b) Se o usuário colocar "10" a mensagem será aquela enquadrada na condição if e impressa como "esse número passou no teste" já que é (assim como a condição determina) maior que 10.
// Se o usuário colocar "-10" o console não reconhecerá dando mensagem de erro, já que não foi designidado condições para esse resultado.


