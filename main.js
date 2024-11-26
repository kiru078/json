const url = "https://6734a92ea042ab85d11b1f82.mockapi.io/Animal";


let animais = [];
let indiceAtual = 0; 


function carregarAnimais() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            animais = data; 
            console.log(animais); 
        })
        .catch(error => console.error('Erro ao carregar lista:', error));
}


function adicionar() {
    if (indiceAtual < animais.length) {
        const animal = animais[indiceAtual]; 
        const lista = document.getElementById("lista");

       
        const item = document.createElement("li");
        item.textContent = `${animal.id} - ${animal.name} (${animal.idade}) - ${animal.raca}`;
        lista.appendChild(item);

        
        indiceAtual++;
    } else {
        console.log("Não há mais animais para adicionar.");
    }
}

window.onload = carregarAnimais;
