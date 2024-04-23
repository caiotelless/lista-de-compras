const botaoAdicionar = document.querySelector('.btn_adicionar')
const inputAdicionar = document.querySelector('.input_adicionar_tarefa')
const listaCompleta = document.querySelector('.lista_de_tarefas')

let listaDeTarefas = []

botaoAdicionar.addEventListener('click', adicionaTarefa)




function adicionaTarefa() {

    if (inputAdicionar.value == '' ) {
        alert('[ERRO] O campo abaixo precisa ser preenchido!')
    } else {
        listaDeTarefas.push({
            tarefa: inputAdicionar.value,
            tarefaConcluida: false
        })
    
        inputAdicionar.value = ''
        
    
        mostrarTarefas()
    }    
}

function mostrarTarefas() {
    let novaLista = ''

    listaDeTarefas.forEach((item, index) => {
        novaLista = novaLista + `
        <li class="tarefas ${item.tarefaConcluida && 'done'}">
            <button class=" botao btn_concluido" onclick="adicionarTarefa(${index})">Concluído</button>
            <p>${item.tarefa}</p>
            <button class=" botao btn_remover" onclick="removerTarefa(${index})">Remover</button>
        </li>
        `
    })

    listaCompleta.innerHTML = novaLista

    localStorage.setItem('lista', JSON.stringify(listaDeTarefas))
}

function adicionarTarefa(index) {
    listaDeTarefas[index].tarefaConcluida = !listaDeTarefas[index].tarefaConcluida

    mostrarTarefas()
}

function removerTarefa(index) {
    listaDeTarefas.splice(index, 1)

    mostrarTarefas()
}

function recarregarTarefas () {
    const tarefasDoLocalStorage = localStorage.getItem('lista')

    if (tarefasDoLocalStorage) {
        listaDeTarefas = JSON.parse(tarefasDoLocalStorage)
    }

    mostrarTarefas()
    
}

recarregarTarefas()