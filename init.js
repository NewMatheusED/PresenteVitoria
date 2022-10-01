window.onload = function() {

    document.body.scroll = 'no';
    document.documentElement.style.overflow = 'hidden';
    document.documentElement.style.position = 'fixed';

    let alerta = document.querySelector('.alert');
    let alertInfo = document.querySelector('.alertInfo');

    let alerta2 = document.querySelector('.alert2');
    let alertInfo2 = document.querySelector('.alertInfo2');

    let info = document.createElement('div');

    let info2 = document.createElement('div');

    info.innerHTML = `<p>Oi minha vida ♥ Só quero te avisar que, no final desa página, tem as músicas que eu coloquei, e to aqui só pra falar que não deu tempo de fazer algo mais elaborado ou esteticamente bonito, pode colocar a culpa toda no senac viu, ele quem fica ocupando meu tempo com um monte de trabalho. Porém eu vou tentar colocar o máximo de música que der viu, todas aleatórias, porque to pegando as que gosto, as que te lembram, literamente tudo eu coloquei. </br> Então agora você tem duas opções, pode ir direto nas músicas agora, ou só vai quando acabar de ler tudo, você quem sabe (só como nota, eu to fazendo esse aviso tão de última hora, que agora eu to esperando você tomar seu banho e to fazendo isso super rápido, perdão viu)</p>
    <div class="flexItens"><input class="btn stay" onclick="stay()" value="Ler do começo"></input><input class="btn goto" onclick="goTo()" value="Ir para a música"></input><input class="btn sorry" onclick="sorry()" value="Me desculpa"></input></div>
    `

    info2.innerHTML = `<p>E agora eu só quero pedir perdão pra você vida, perdão não só por algo que aconteceu em um dia, mas pelo o que vem acontecendo, eu quero te pedir desculpas por isso, desculpas por tudo, por todas as vezes que fiz você chorar, sentir medo, ficar brava comigo, se sentir mau por algo que vem de mim, eu me arrependo muito por tudo o que fiz e quero te pedir esse perdão, porque tudo isso foi algo que me afetou, mas muito mesmo, ver vc desse jeito me deixou bem assustado e foi aí que percebi que tava fazendo mais que uma merdinha, mas quase acabando com nosso relacionamento. Então, eu to aqui, só pedindo uma coisa pra você, uma última chance. Eu te juro, por tudo nesse mundo, fazer isso aqui tudo valer, prometo fazer valer seu esforço que eu to vendo todos os dias, prometo fazer você sentir orgulho e voltar a ficar feliz e animada como antes, sinto falta do seu brilho, e sinto também que eu fui o culpado por tirar isso... Então só me dê uma última chance tá bom, e eu juro fazer você ser a pessoa mais feliz desse mundo!!</p><div class="flexItens"><input class="btn stay2" onclick="stay2()" value="Desculpa de novo!"></input></div>`

    alertInfo2.append(info2)
    alertInfo.appendChild(info)

    let stay = document.querySelector('.stay')
    let goTo = document.querySelector('.goto')
    let sorry = document.querySelector('.sorry')
    let stay2 = document.querySelector('.stay2')

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

    sorry.onclick = function() {
        alerta2.style.opacity = '1'
        alerta.style.opacity = '0'
        alerta2.style.zIndex = '999'
    }

    stay2.onclick = function() {
        alerta2.style.opacity = '0';
        document.body.scroll = 'yes';
        document.documentElement.style.overflow = 'auto';
        document.documentElement.style.position = 'relative';
    }

}