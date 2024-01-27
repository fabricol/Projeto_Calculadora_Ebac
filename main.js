const form = document.getElementById('formAtividade');
const imgAprovado = '<img src="./img/approved.png" alt="aprovado" height="50" width="50"/>'
const imgReprovado = '<img src="./img/disapproved.png" alt="reprovado" height="50" width="50"/>'
const imgFeliz = '<img src="./img/festa.png" alt="reprovado" height="50" width="50"/>'
const imgTriste = '<img src="./img/sad.png" alt="reprovado" height="50" width="50"/>'
const atividade = [];
const notas = []
const notaMinima = parseFloat(prompt('Digite a nota mínima:'))
let linhas =''

form.addEventListener('submit', function (e) {
    e.preventDefault();
    adicionaLinha()
    atualizaTabela()
    AtualizaMediaFinal();   
})


function adicionaLinha() {
    const inputNomeAtividade = document.getElementById('nomeAtividade');
    const inputNotaAtividade = document.getElementById('notaAtividade');
    
    if(atividade.includes(inputNomeAtividade.value)) {
        alert(`Atividade ${inputNomeAtividade.value} já foi inserida`)
    } else {
        atividade.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value))

        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgFeliz : imgTriste }</td>`;
        linha += `<tr>`;

    linhas += linha
    }
    inputNomeAtividade.value = ''
    inputNotaAtividade.value = ''

}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function AtualizaMediaFinal() {
    mediaFinal = CalculaMediaFinal();
    document.getElementById('media-final-valor').innerHTML = mediaFinal;
    document.getElementById('media-final-resposta').innerHTML = mediaFinal >= 7 ? imgAprovado : imgReprovado;   
}

function CalculaMediaFinal() {
    let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i]
    }
    return somaDasNotas/notas.length
    
}