function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0){
        window.alert('Por favor, digite um número!')
        
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = '' //isso limpa a tabuada anterior antes de gerar uma nova para o usuario.
        while (c <=10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}` //esse value é para o JS poder manipular o item, para que possa ser apagado, por exemplo.
            tab.appendChild(item)
            c++
        }
    }
   
}

