let altura = 0;
let largura = 0;
let dispensas = 1;
let tempo = 21;
let criaSoldadoTempo = 3500;

let escolhaDificuldade = window.location.search;
escolhaDificuldade = escolhaDificuldade.replace('?', '');

if(escolhaDificuldade == 'recruta') {
    criaSoldadoTempo = 3500;

} else if (escolhaDificuldade == 'praca') {
    criaSoldadoTempo = 2500;

} else {
    criaSoldadoTempo = 2000;
}

const cronometro = setInterval(function() {
    tempo -= 1

    if(tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaSoldado)
        window.location.href = "vitoria.html"
    } else {
        document.getElementById('cronometro').innerHTML = tempo;
    }
}, 1000);

function ajustaTamanhoTela() {
    altura = window.innerHeight;
    largura = window.innerWidth;
    console.log(largura, altura);
}

function posicaoRandomica() {
    const soldadoExiste = document.getElementById('soldado');
    
    if(soldadoExiste) {
        soldadoExiste.remove()

        if(dispensas > 3) {
            window.location.href = 'game_over.html';
        } else {
            document.getElementById('d' + dispensas).src = "./images/dispensa_perdida.png";
            dispensas++
        }
    }

    let posicaoX = Math.floor(Math.random() * largura) - 90;
    let posicaoY = Math.floor(Math.random() * altura) - 90;
    console.log(posicaoX, posicaoY);
    
    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    let soldado = document.createElement('img');
    soldado.src = './images/soldado3.png';
    soldado.className = tamanhoAleatorio();
    soldado.style.left = posicaoX + 'px';
    soldado.style.top = posicaoY + 'px';
    soldado.style.position = 'absolute';
    soldado.id = 'soldado';
    soldado.onclick = function() {
        this.remove()
    }
    
    document.body.appendChild(soldado);
}

function tamanhoAleatorio() {
    let classe = Math.floor(Math.random() * 3);

    if (classe == 0) {
        return 'soldado1'
    } else if (classe == 1) {
        return 'soldado2'
    } else {
        return 'soldado3'
    }
}

ajustaTamanhoTela();

const criaSoldado = setInterval(function() {
    posicaoRandomica();
}, criaSoldadoTempo)

