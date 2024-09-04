//objetivo desse exercicio é treinar a utilização de estruturas de repetição com o uso de inputs

function contar() {
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let resultado = document.getElementById('resultado')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO] Faltam dados? Preencha todos os campos!')
        resultado.innerHTML = 'Impossível contar!'
    } else {
        resultado.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <=0){
            alert('Passo precisa ser maior que zero! Considerando passo 1')
            p = 1
        }

        if (i < f) {
            //contagem crescente
            for (let c = i; c <= f; c += p) {
                resultado.innerHTML += `${c} \u{1F449}`
            }
            resultado.innerHTML += `\u{1F3C1}`  
        }else {
            //contagem regressiva
            for (let c = i; c >= f; c -= p){
                resultado.innerHTML += `${c} \u{1F449}`
            }        }
        
    }
}
 

 