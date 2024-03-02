const perguntas = [
    {
        pergunta: "Qual é a linguagem de programação utilizada para criar interações dinâmicas em páginas da web?",
        respostas: [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        correta: 2
    },
    {
        pergunta: "Qual método JavaScript é usado para selecionar um elemento HTML pelo seu ID?",
        respostas: [
            "getElementName",
            "querySelector",
            "getElementById"
        ],
        correta: 2
    },
    {
        pergunta: "Qual dessas não é uma estrutura de controle de fluxo em JavaScript?",
        respostas: [
            "if-else",
            "switch-case",
            "for-then"
        ],
        correta: 2
    },
    {
        pergunta: "Qual destes operadores é usado para comparar igualdade em valor e tipo em JavaScript?",
        respostas: [
            "==",
            "===",
            "="
        ],
        correta: 1
    },
    {
        pergunta: "Como você escreve um comentário de linha única em JavaScript?",
        respostas: [
            "// Este é um comentário",
            "<!-- Este é um comentário -->",
            "/* Este é um comentário */"
        ],
        correta: 0
    },
    {
        pergunta: "Qual destes métodos é usado para adicionar um novo elemento ao final de um array em JavaScript?",
        respostas: [
            "push()",
            "append()",
            "add()"
        ],
        correta: 0
    },
    {
        pergunta: "O que o método `setTimeout()` faz em JavaScript?",
        respostas: [
            "Define um intervalo de tempo para a execução de uma função",
            "Adiciona um evento de clique a um elemento HTML",
            "Remove um elemento do DOM"
        ],
        correta: 0
    },
    {
        pergunta: "Qual função JavaScript é usada para converter uma string em um número inteiro?",
        respostas: [
            "parseInt()",
            "parseFloat()",
            "toInteger()"
        ],
        correta: 0
    },
    {
        pergunta: "Qual destes métodos é usado para remover o último elemento de um array em JavaScript?",
        respostas: [
            "pop()",
            "remove()",
            "delete()"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a palavra-chave usada para declarar uma variável em JavaScript?",
        respostas: [
            "var",
            "let",
            "const"
        ],
        correta: 0
    }
];

const quiz = document.querySelector('#quiz');
const enviarRespostasBtn = document.querySelector('#enviar-respostas-btn');
let acertos = 0;

for (const item of perguntas) {
    const quizItem = document.createElement('div');
    quizItem.classList.add('quiz-item');
    const perguntaTitulo = document.createElement('h3');
    perguntaTitulo.textContent = item.pergunta;
    quizItem.appendChild(perguntaTitulo);

    for (let resposta of item.respostas) {
        const dt = document.createElement('dt');
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'pergunta-' + perguntas.indexOf(item);
        input.value = item.respostas.indexOf(resposta);
        const span = document.createElement('span');
        span.textContent = resposta;
        dt.appendChild(input);
        dt.appendChild(span);
        quizItem.appendChild(dt);
    }

    quiz.appendChild(quizItem);
}

enviarRespostasBtn.addEventListener('click', () => {
    acertos = 0;
    for (const item of perguntas) {
        const inputs = document.querySelectorAll('input[type="radio"][name="pergunta-' + perguntas.indexOf(item) + '"]:checked');
        if (inputs.length === 1) {
            const respostaSelecionada = parseInt(inputs[0].value);
            if (respostaSelecionada === item.correta) {
                acertos++;
            }
        }
    }
    mostrarResultado();
});

function mostrarResultado() {
    const resultado = document.querySelector('#resultado');
    resultado.textContent = `Você acertou ${acertos} perguntas!`;
}