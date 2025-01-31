//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Cria um array vazio para armazenar os nomes
let amigos = [];

// Função para adicionar amigo
function adicionarAmigo() {
    // Captura o valor do campo de entrada
    let amigo = document.getElementById('amigo').value;

    // Valida a entrada
    if (amigo.length === 0) {
        alert('Por favor, insira um nome.');
    } else {
        alert('Nome adicionado.');
        amigos.push(amigo);
        document.getElementById('amigo').value = '';
        atualizarListaAmigos();
    }

    // Limpa o campo de entrada
     atualizarListaAmigos();
}

// Função para atualizar a lista de amigos na página
function atualizarListaAmigos() {
    // Obter o elemento da lista
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpa a lista antes de adicionar novos elementos

    // Percorrer o array
    for (let i = 0; i < amigos.length; i++) {
        // Criar um novo elemento de lista
        let li = document.createElement('li');
        li.textContent = amigos[i];
        
        // Adicionar o elemento à lista
        lista.appendChild(li);
    }
}

// Adiciona um evento de clique ao botão
document.getElementById('adicionarAmigoBtn').addEventListener('click', adicionarAmigo);

// Função para selecionar aleatoriamente um amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('A lista de amigos está vazia.');
        return;
    }

    // Obter um índice aleatório
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Selecionar o amigo correspondente ao índice aleatório
    let amigoAleatorio = amigos[indiceAleatorio];

    // Exibir o nome do amigo selecionado
    alert('Amigo selecionado: ' + amigoAleatorio);
}

// Adiciona um evento de clique ao botão de seleção aleatória
document.getElementById('selecionarAmigoBtn').addEventListener('click', sortearAmigo);

// Adiciona um evento de clique ao botão
document.getElementById('adicionarAmigoBtn').addEventListener('click', adicionarAmigo);

// Função para selecionar aleatoriamente um amigo
function sortearAmigo() {
    // Validar que há amigos disponíveis
    if (amigos.length === 0) {
        alert('A lista de amigos está vazia.');
        return;
    }

    // Gerar um índice aleatório
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obter o nome sorteado
    let amigoAleatorio = amigos[indiceAleatorio];

    // Mostrar o resultado
    document.getElementById('resultadoSorteio').innerHTML = 'Amigo sorteado: ' + amigoAleatorio;
}

// Adiciona um evento de clique ao botão de seleção aleatória
document.getElementById('selecionarAmigoBtn').addEventListener('click', sortearAmigo);