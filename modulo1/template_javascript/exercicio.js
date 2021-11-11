let nome = prompt ("Qual é o seu nome?")
let idade = prompt ("Qual é a sua idade?")
console.log(typeof nome, typeof idade) 

// Pois o comando prompt sempre retorna uma string.

alert("Olá, " + nome + ". Você tem " + idade + " anos.");


// Exercício 03

let a = 10 
let b = 25 
c = a
a = b 
b = c 
console.log("25", a) 
console.log("10",b)