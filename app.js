// nota: algumas partes do código foram reaproveitadas do desafio do numero secreto, realizado na propria formação!

let listaDeNomes = [];
let listaDeIndicesSorteados = [];

function sortearNome() { //faz o sorteio do indice
    let numeroEscolhido = parseInt(Math.random() * listaDeNomes.length);
    let quantidadeDeElementosNaLista = listaDeIndicesSorteados.length;

    if(quantidadeDeElementosNaLista == listaDeNomes.length){
        listaDeIndicesSorteados = [];
    }

    if(listaDeIndicesSorteados.includes(numeroEscolhido)){
        return sortearNome();
    } else {
        listaDeIndicesSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function exibirLista(array, nomeDaLista) { //função que exibe a lista desejada
    const ul = document.getElementById(nomeDaLista); //vai ate o elemento listaAmigos no html
    for(let i = 0; i < listaDeNomes.length; i++) {    
        const li = document.createElement('li'); //cria um novo elemento para a lista
        li.textContent = array[i]; //atribui nome ao novo elemento da lista
        ul.appendChild(li); //adiciona o nome ao elemento/lista
    }
}

function adicionarAmigo() {
    let nome = document.querySelector('input').value; // input recebe o nome
    if(nome.trim() === ""){ //essa função remove os epsaços em branco no início e no final da string
        alert("Insira um nome válido!");
    } else {
        listaDeNomes.push(nome); // lista de nomes recebe novo nome
        limparCampo();           // limpa campo de input
        let lista = document.getElementById('listaAmigos'); // vai ate a lista que sera exibida
        lista.innerHTML = '';                               // limpa a lista anterior
        exibirLista(listaDeNomes, 'listaAmigos'); // exibe nova lista com novos nomes
    }   
}

function limparCampo() { //limpa campo de inserir nomes
    nome = document.querySelector('input');
    nome.value = '';
}

function sortearAmigo() {
    if(listaDeNomes == null || listaDeNomes.length - 1 < 1){ //verifica se a lista está vazia/tem somente um nome!
        alert("Escreva ao menos dois nomes!");
    } else {
        let sorteado = document.getElementById('resultado'); // vai ate o elemento resultado da pagina
        let indiceSorteado = sortearNome();                  // sorteia indice
        sorteado.innerHTML = "O amigo(a) sorteado é: " + listaDeNomes[indiceSorteado] + "!"; //exibe resultado do sorteio
    }
}
