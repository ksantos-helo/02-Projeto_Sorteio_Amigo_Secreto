// Arrays principais
const listaDeAmigos = [];
let amigosRestantes = [];
const nomesSorteados = [];

// Função chamada ao clicar no botão "Adicionar"
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (nome === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    const nomeFormatado = nome
        .toLowerCase()
        .replace(/\b\w/g, letra => letra.toUpperCase());

    if (listaDeAmigos.includes(nomeFormatado)) {
        alert(`O nome "${nomeFormatado}" já foi adicionado.`);
        return;
    }

    listaDeAmigos.push(nomeFormatado);
    amigosRestantes.push(nomeFormatado);
    atualizarListaVisual();
    input.value = '';
}

// Atualiza a visualização da lista de amigos
function atualizarListaVisual() {
    const ul = document.getElementById('listaAmigos');
    ul.innerHTML = '';

    listaDeAmigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        ul.appendChild(li);
    });
}

// Sorteia um amigo sem repetição
function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert('Não há amigos para sortear. Adicione alguns nomes primeiro.');
        return;
    }

    if (amigosRestantes.length === 0) {
        alert("Todos os amigos já foram sorteados! Reinicie.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigosRestantes.length);
    const amigoSorteado = amigosRestantes.splice(indiceAleatorio, 1)[0];

    // Adiciona ao array de sorteados
    nomesSorteados.push(amigoSorteado);

    // Atualiza a tela com todos os sorteados até agora
    atualizarResultadoVisual();
}

// Exibe todos os nomes sorteados na tela
function atualizarResultadoVisual() {
    const ul = document.getElementById('resultado');
    ul.innerHTML = '';

    nomesSorteados.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = `🎉 ${amigo}`;
        ul.appendChild(li);
    });
}

// Reinicia o sorteio e limpa tudo
function reiniciarSorteio() {
    listaDeAmigos.length = 0;
    amigosRestantes.length = 0;
    nomesSorteados.length = 0;

    atualizarListaVisual();
    atualizarResultadoVisual();
}
