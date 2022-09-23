window.onload = function() {

    let music = document.querySelector('#music')

    document.body.scroll = 'no';
    document.documentElement.style.overflow = 'hidden';
    document.documentElement.style.position = 'fixed';

    let alerta = document.querySelector('.alert');
    let alertInfo = document.querySelector('.alertInfo');

    let info = document.createElement('div');

    info.innerHTML = `<p>Oi minha vida ♥ Só quero te avisar que, no final desa página, tem as músicas que eu coloquei, e to aqui só pra falar que não deu tempo de fazer algo mais elaborado ou esteticamente bonito, pode colocar a culpa toda no senac viu, ele quem fica ocupando meu tempo com um monte de trabalho. Porém eu vou tentar colocar o máximo de música que der viu, todas aleatórias, porque to pegando as que gosto, as que te lembram, literamente tudo eu coloquei. </br> Então agora você tem duas opções, pode ir direto nas músicas agora, ou só vai quando acabar de ler tudo, você quem sabe (só como nota, eu to fazendo esse aviso tão de última hora, que agora eu to esperando você tomar seu banho e to fazendo isso super rápido, perdão viu)</p>
    <div class="flexItens"><input class="btn stay" onclick="stay()" value="Ler do começo"></input><input class="btn goto" onclick="goTo()" value="Ir para a música"></input></div>
    `

    alertInfo.appendChild(info)

    let stay = document.querySelector('.stay')
    let goTo = document.querySelector('.goto')

    stay.onclick = function() {
        alerta.style.opacity = '0';
        document.body.scroll = 'yes';
        document.documentElement.style.overflow = 'auto';
        document.documentElement.style.position = 'relative';
    }

    goTo.onclick = function() {
        alerta.style.opacity = '0';
        document.body.scroll = 'yes';
        document.documentElement.style.overflow = 'auto';
        document.documentElement.style.position = 'relative';
    
        $('html, body').animate({
            scrollTop: $('.player').offset().top
        },2000)
    }

}