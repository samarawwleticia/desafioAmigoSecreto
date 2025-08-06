let listaDeNomes = [];

//futura funcionalidade:
//function exibirTextoNaTela(tag, texto) {
//    let campo = document.querySelector(tag);
//    campo.innerHTML = texto;
//}

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

function limparCampo() {
    nome = document.querySelector('input');
    nome.value = '';
}


