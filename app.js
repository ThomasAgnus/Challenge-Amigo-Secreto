

//let amigoEscolhido = prompt ('Insira o nome do amigo: ');


let nomesDosAmigos = [];

function adicionarAmigo() {
    let nomes = document.querySelector('#amigo').value

    if (nomes === '') {
        alert('Por favor, insira um nome.');
    } else {
        // array
        nomesDosAmigos.push(nomes)

        
        atualizarLista();

      
        limparCampo();
    }
}

function limparCampo() {
    let nomes = document.querySelector('#amigo');
    nomes.value = '';
}

function atualizarLista() {
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = ''; //evita duplicações

    // adiciona os nomes na lista
    nomesDosAmigos.forEach((nome) => {
        let item = document.createElement('li')
        item.textContent = nome;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (nomesDosAmigos.length === 0) {
        alert('Nenhum nome foi adicionado à lista.');
        return;
    }

    // sorteio
    let indiceSorteado = Math.floor(Math.random() * nomesDosAmigos.length);

    //nome 
    let amigoSorteado = nomesDosAmigos[indiceSorteado]

    
    let resultado = document.querySelector('#resultado');
    resultado.innerHTML = `<li>O Amigo sorteado foi: <strong>${amigoSorteado}</strong></li>`
}