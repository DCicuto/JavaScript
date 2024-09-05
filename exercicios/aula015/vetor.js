//Código tradicional do percuso de um vetor, onde é mostrado a posição e o valor (percurso para exibição de posições e valores de um vetor)    

let valores = [8, 2, 20,23]
console.log(valores)
/* for(let pos=0; pos < valores.length; pos++){
     console.log(`A posição ${pos} tem o valor ${valores[pos]}`) 
} */

//um jeito mais simplificado de fazer a mesma coisa é usando o for in.
for (let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}