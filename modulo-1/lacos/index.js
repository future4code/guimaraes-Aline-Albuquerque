// Exercicio 1:

// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)
// Let determina o valor de 0. Toda vez que o número passa dentro do laço "for(já que é números)/let" e for menor que 0 ele addiciona +1 repetindo o loop, até chegar em 5.
// O console log imprimirá 10.


// Exercício 2:

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

// a) Será impresso todos os números do array lista que forem maior que 18.
// b) Você teria que indicafr qual posição dentro do array você gostaria de acessar através de "array[i]" por exemplo.


// Exercício 3:
// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }

// Se o usuário digitasse o número "4", o cosole imprimiria as linhas com os números de asteriscos aumentando progressivamente até o número que ele digitou, no caso, 4.



// EXERCÍCIOS DE ESCRITA:

// const bixinhos = Number(prompt("Quantos bixinhos de estimação você tem? "))
// let arrayBixinhos = []

// if (bixinhos === 0){
// console.log ("Que pena! Você pode adotar um pet")
// }
// else if(bixinhos > 0){
// 	for(let i=0; i < bixinhos; i++){
// 		arrayBixinhos.push(prompt("Digite o nome do seu pet"))
// 	}
// 	console.log(arrayBixinhos)
// }


// Exercicio 2

// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// const maiorMenor = (array) => {
// let maiorNum = 0
// let menorNum = Infinity

// for(let i=0; i < array.length; i++){
// 	if(array[i] < menorNum){
// menorNum = array[i]
// 	}else if (array[i] > maiorNum){
// 		maiorNum = array[i]
// 	}
// }
// console.log("O menor número é: ", menorNum)
// console.log("o maior número é", maiorNum)
// }

// maiorMenor(arrayOriginal)