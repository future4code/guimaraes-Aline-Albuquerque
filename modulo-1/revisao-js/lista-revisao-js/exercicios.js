// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length;
   
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
        let arrayInvertido = [];
        for (i = array.length - 1; i >= 0; i--)
        {
            arrayInvertido.push(array[i]);
        }
        return arrayInvertido  
    
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    array.sort(function (a, b) {
        return a - b
    })
    return array
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let arrayPares = [];
    for (const i of array) {
        if (i % 2 === 0)
            arrayPares.push(i)
    }
    return arrayPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
        let arrayQuadrados = [];
    
        for (i = 0; i < array.length; i++)
        {
            if (array[i] % 2 === 0)
            {
                arrayQuadrados.push(Math.pow(array[i], 2));
            }
        }
    
        return arrayQuadrados;
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
        return Math.max(...array)
    }

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNumero = undefined;
    let menorNumero = undefined;
    let maiorDivisivelPorMenor = undefined;
    let diferenca = undefined;
 
    if (num1 > num2) {
        maiorNumero = num1;
        menorNumero = num2
    } else {
        maiorNumero = num2;
        menorNumero = num1
    }

    if (maiorNumero % menorNumero === 0) {
        maiorDivisivelPorMenor = true;
    } else {
        maiorDivisivelPorMenor = false;
    }

    diferenca = maiorNumero - menorNumero

    return {
        "maiorNumero": maiorNumero,
        "maiorDivisivelPorMenor": maiorDivisivelPorMenor,
        "diferenca": diferenca
    }
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    
    let arrayPares = [];

    for (i = 0; arrayPares.length < n; i++)
    {
        if (i % 2 === 0)
        {
            arrayPares.push(i);
        }
    }

    return arrayPares;

}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
        if (ladoA === ladoB && ladoB === ladoC & ladoC === ladoA){
           return "Equilátero"
        }
        else if (ladoA !== ladoB && ladoB !== ladoC && ladoC !== ladoA){
           return "Escaleno"
        }
        else {
           return "Isósceles"
        }
     
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
      let arrayNum = []
      let max = Math.max.apply(null, array)
      let max2 = array.indexOf(max)
      array[max2] = -Infinity
      let segundoMaior = Math.max.apply(null, array)
      array[max2] = max
      arrayNum.push(segundoMaior)
    
      let min = Infinity,
        segundoMenor = Infinity
      for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
          segundoMenor = min
          min = array[i]
        } else if (array[i] < segundoMenor) {
          segundoMenor = array[i]
        }
      }
      arrayNum.push(segundoMenor)
      return arrayNum
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
        const oDiaboVestePrada = { 
        nome: 'O Diabo Veste Prada',
        ano: 2006,
        diretor: 'David Frankel',
        atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
        }
        return(`Venha assistir ao filme ${oDiaboVestePrada.nome}, de ${oDiaboVestePrada.ano}, dirigido por ${oDiaboVestePrada.diretor} e estrelado por ${oDiaboVestePrada.atores[0]}, ${oDiaboVestePrada.atores[1]}, ${oDiaboVestePrada.atores[2]}, ${oDiaboVestePrada.atores[3]}.` )
    }

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   let objeto = {
    ...pessoa
}

return {
    'nome': "ANÔNIMO",
    'idade': objeto.idade,
    'email': objeto.email,
    'endereco': objeto.endereco
} 
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    let autorizadas = pessoas.filter((pessoa) => {
        return (pessoa.idade > 14 && pessoa.idade < 60 && pessoa.altura > 1.5)
    })

    return autorizadas

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let naoAutorizadas = pessoas.filter((pessoa) => {
        return !(pessoa.idade > 14 && pessoa.idade < 60 && pessoa.altura > 1.5)
    })

    return naoAutorizadas

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    let somaCompras = undefined;
    for (const conta of contas) {
        somaCompras = conta.compras.reduce((soma, i) => {
            soma += i
            return soma

        });
        conta.saldoTotal -= somaCompras


        conta.compras = []

        return contas
    }
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
        var consultasOrdenadas = [];
          for (var i = 0; i < consultas.length; i++) {
              consultasOrdenadas.push(consultas[i].nome);
          }
          consultasOrdenadas.sort();
          var consultacomp = [];
          for (var i = 0; i < consultasOrdenadas.length; i++) {
              for (var j = 0; j < consultas.length; j++) {
                  if (consultasOrdenadas[i] === consultas[j].nome) {
                      consultacomp.push(consultas[j]);
                  }
              }
          }
          return consultacomp;
      

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}