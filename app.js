// Cria um array vazio para armazenar os nomes
let amigos = [];

// Função para adicionar um nome ao array
function adicionarAmigo(nome) {
    amigos.push(nome);
}

// Exemplo de uso
adicionarAmigo(prompt("Digite o nome do seu amigo:"));
adicionarAmigo(prompt("Digite o nome do seu amigo:"));
adicionarAmigo(prompt("Digite o nome do seu amigo:"));

console.log(amigos); // Exibe os nomes dos amigos no console