let num = [12, 4, 1, 9, 8, 7]
console.log(`Nosso vetor é: ${num}`)

//para acrescentar um valor no vetor sem perder os valores anteriores, usamos o num.push() que é um metodo interno que acrescenta valores a um vetor. 
num.push(3)

//Para ordenar os valores do vetor, usamos o num.sort() que é um metodo interno que ordena os valores do vetor.
num.sort()

//Para sabermnos o tamanho do vetor, usamos o num.length (length nào é ummetodo é um atributo que mostra o tamanho do vetor)
num.length


console.log(`Nosso vetor tem: ${num.length} posições`)
console.log(`O primeiro valor do vetor é: ${num[0]}`) //para mostrar a primeira posição/valor do vetor