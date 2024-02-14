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

const quiz = document.querySelector('#quiz') 
const template = document.querySelector('template')
const quizItem = template.content.cloneNode(true)
quiz.appendChild(quizItem)

for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for (let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta
            if(estaCorreta) {
                alert('acertou')
            }
        }

        quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()

    quiz.appendChild(quizItem)
}