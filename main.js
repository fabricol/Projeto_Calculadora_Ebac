const form = document.getElementById('formAtividade');
const atividade = [];
const notas = []
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
    document.getElementById('media-final-valor').innerHTML = mediaFinal;
    document.getElementById('media-final-resposta').innerHTML = mediaFinal >= 7 ? imgAprovado : imgReprovado;   
}
