//  Exercíxios 

// a) Ele imprime três vezes (o array inteiro), uma para cada ítem por ordem (o, 1, 2..).
// b) Ele imprime somente os nomes dos arrays, já que este foi chamado no return.
// c) Será impresso os dois apelidos dos dois primeiros arrays, já que o terceiro teve a comdição de ser o chijo, não foi considerado/lido no console.


// 2)
// 1)
// const pets = [
// 	{ nome: "Lupin", raca: "Salsicha"},
// 	{ nome: "Polly", raca: "Lhasa Apso"},
// 	{ nome: "Madame", raca: "Poodle"},
// 	{ nome: "Quentinho", raca: "Salsicha"},
// 	{ nome: "Fluffy", raca: "Poodle"},
// 	{ nome: "Caramelo", raca: "Vira-lata"},
// ]

// const nomes = pets.map((item, index, array) => {
// 	return item.nomes
// });
// console.log("item a", nomes);

// const salsicha = nomes.filter((lista) => {
// return lista.raca === "Salsicha"
// });

// console.log("item b", salsicha);

// const poodles = nomes.filter((cachorro) => {
// 	return cachorro.raca === "Poodle"
// });

// const cupom = poodles.Map((racaPoodle) => {
// return `Você ganhou um cupom de desconto de 10% para tosar o/a ${poodles.nome}`
// });
// console.log("item c", cupom );


// 2)

// const produtos = [
// 	{ nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
// 	{ nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
// 	{ nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
// 	{ nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
// 	{ nome: "Leite", categoria: "Bebidas", preco: 2.99 },
// 	{ nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
// 	{ nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
// 	{ nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
// 	{ nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
// 	{ nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//  ]
// const nomeProdutos = produtos.map((itemm) => {
// 	return itemm.nome
// });
// console.log("item a", nomeProdutos);
// const desconto = produtos.map((nome) => {
// 	return {nome: nomes.nome, preco: nomes.preco*0.95).toFixed(2)};
// });

// console.log("item b", desconto);

// const = liquidos = produtos.filter((bebida)=> {
// return bebida.categoria === "Bebidas";
// });
// console.log("item c", bebida);

// const ype = produtos.filter((ip) =>{
// return ip.nome.includes("Ypê")
// });
// console.log("item d", ype);

// const detergenteYpe = ype+map((deter)=>{
// return `Compre ${ipe.nome} por ${produtos.preco}`;
// });
// console.log("Item e", detergenteYpe);