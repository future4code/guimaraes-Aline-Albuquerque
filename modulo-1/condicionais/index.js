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

//a) O código acima serve para dar o valor das frutas ao usuáriode acordo com a que ele digitar.

//b) Será impresso o valor que a fruta recebe em "Maça" com a mensagem do console. Ficando então:
// "O preço da fruta "
// "Maçã"
// " é "
// "R$ "
// 2.25

// c)  Se retirássemos o break o console imprimiria "Perâ" em default, atribuindo o valor dele, no caso do exercício = a 5.


// 3:

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

// a) está pedindo para o usuário digitar o primeiro número.

// b) Se o usuário colocar "10" a mensagem será aquela enquadrada na condição if e impressa como "esse número passou no teste" já que é (assim como a condição determina) maior que 10.
// Se o usuário colocar "-10" o console não reconhecerá dando mensagem de erro, já que não foi designidado condições para esse resultado.

// c) Haverá um erro em "mensagem" pois, a mesma dentro do escopo "if" não foi atribuída condição.


// EXERCÍCIOS DE ESCRITA DE CÓDIGO:


// 1  (a - b - c)
// const idade = Number(prompt("Qual a sua  idade?"))
// if (idade >= 18) { 
//     console.log("Você pode dirigir!")
// } else {
//     console.log("Você não pode dirigir!")
// }


// 2 -

// const turno = prompt("Em qual turno você estuda; V (vespertino), M (matutino) N (noturno)? ").toUpperCase()
// if (turno === "V") {
//     console.log("Boa Tarde")
// }
// else if (turno === "M") {
//     console.log("Bom dia!")
// }
// else if (turno === "N") {
//     console.log("Boa Noite!")
// }
// else{
//     console.log("Turno não encontrado!")
// }



// 3 -
// const turno = prompt("Em qual turno você estuda; V (vespertino), M (matutino) N (noturno)? ").toUpperCase()
// switch (turno){
//     case "V":
//     console.log("Boa Tarde!")
//     break;
//     case "M":
//     console.log("Bom Dia")
//     break;
//     case "N":
//     console.log("Boa Noite")
//     break;
//     default:
//     console.log("Turma não encontrada!")
// }



// 4 -
// const genero = prompt("Qual gênero de filme vamos assistir?").toLowerCase()
// const preco = Number(prompt("Qual o preço do ingresso?")) 
// if (genero === "fantasia" && preco < 15){
//     console.log("Bom Filme!")
// }
// else{
//     console.log("Escolha outro filme :(")
// }

