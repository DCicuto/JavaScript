function verificar(){
    console.log("Função verificar chamada");
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    }
    else{
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        if(fsex[0].checked){
            genero = 'Homem';
            if(idade >= 0 && idade < 10){
                // Criança
                img.setAttribute('src', 'bebemenino.png');
            }
            else if(idade < 29){
                // Jovem
                img.setAttribute('src', 'jovemH.png');
            }
            else if(idade < 59){
                // Adulto
                img.setAttribute('src', 'homem.png');
            }
            else{
                // Idoso
                img.setAttribute('src', 'idoso.png');
            }
        }
        else if(fsex[1].checked){
            genero = 'Mulher';
            if(idade >= 0 && idade < 10){
                // Criança
                img.setAttribute('src', 'bebeF.png');
            }
            else if(idade < 29){
                // Jovem
                img.setAttribute('src', 'jovemF.png');
            }
            else if(idade < 59){
                // Adulto
                img.setAttribute('src', 'mulher.png');
            }
            else{
                // Idoso
                img.setAttribute('src', 'idosa.png');
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img); 
    }
}