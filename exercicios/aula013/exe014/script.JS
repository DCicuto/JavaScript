// Descrição: Verificar a hora do sistema e alterar a imagem de acordo com o horário.

function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    //var hora = 9; // Forçar a hora para testar
    msg.innerHTML = `Agora são ${hora} horas.`;
    if (hora >= 0 && hora < 12) {
        console.log("bom dia");
        // Bom dia!
        img.src = 'imagens/fotomanha.png';
        document.body.style.background = '#fed3ab';
    } else if (hora >= 12 && hora < 18) {
        console.log("boa tarde");
        // Boa tarde!
        img.src = 'imagens/fototarde.png';
        document.body.style.background = '#945414';
    } else {
        console.log("boa noite");
        // Boa noite!
        img.src = 'imagens/fotonoite.png';
        document.body.style.background = '#0d2c2e';
    }
}