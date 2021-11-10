let a = 10 // A variavel "a" é do tipo let que foi atribuida o valor de 10.
let b = 10 // A variavel "b" é do tipo let que foi atribuida o valor de 10.

console.log(b) // Imprime no console do navegador a variavel b.

b = 5 // A variavel "b" recebe agora o valor de 5.
console.log(a, b) // Imprime no console do navegador a variavel a e b nos valores de 10 sendo a e 5 sendo b.



// 2

let a = 10 // A variavel "a" é do tipo let que foi atribuida o valor de 10.
let b = 20 // A variavel "b" é do tipo let que foi atribuida o valor de 20.
c = a // A variavel "c" recebe agora o valor atribuido a variavel a que é 10.
b = c // A variavel "b" recebe agora o valor atribuido a variavel c que é 10.
a = b // A variavel "a" recebe agora o valor atribuido a variavel b que é 10.

console.log(a, b, c) // Imprime no navegador as variaveis a, b, e c.

//3

let p = prompt("Quantas horas você trabalha por dia?") // é recomendavel que a variavel "p" receba o nome de horasPorDia
let t = prompt("Quanto você recebe por dia?") // é recomendavel que a variavel "t" receba o nome de valorPorDia
alert(`Voce recebe ${t/p} por hora`) // A função alert alerta que o usuário recebe horaPorDia/ valorPorDia por hora.