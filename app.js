let listaDeNomes = [];


function adicionarAmigo() {
    let nome = document.querySelector('input').value; // input recebe o nome
    if(nome.trim() === ""){ //essa função remove os epsaços em branco no início e no final da string
        alert('Insira um nome válido!');
    } else {
        listaDeNomes.push(nome); // lista de nomes recebe novo nome
        limparCampo();
    }
    
}

function limparCampo() {
    nome = document.querySelector('input');
    nome.value = '';
}
