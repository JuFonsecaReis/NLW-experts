const perguntas = [
    {
      pergunta: "Qual é a palavra-chave utilizada para declarar uma variável em JavaScript?",
      respostas: [
        "var",
        "let",
        "const",
      ],
      correta: 1
    },
    {
      pergunta: "Como você escreveria um comentário de uma única linha em JavaScript?",
      respostas: [
        "/* comentário */",
        "// comentário",
        "<!-- comentário -->",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do operador \"+=\" em JavaScript?",
      respostas: [
        "Subtrai dois valores",
        "Concatena strings",
        "Atribui e adiciona ao mesmo tempo",
      ],
      correta: 2
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Uma linguagem de programação",
        "Um modelo de objeto para manipulação de documentos",
        "Uma função matemática",
      ],
      correta: 1
    },
    {
      pergunta: "Como você verifica se duas variáveis têm o mesmo valor e tipo em JavaScript?",
      respostas: [
        "==",
        "===",
        "=",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do método `charAt()` em strings JavaScript?",
      respostas: [
        "Retorna o último caractere da string",
        "Retorna o primeiro caractere da string",
        "Retorna o número total de caracteres na string",
      ],
      correta: 1
    },
    {
      pergunta: "O que é uma função de callback em JavaScript?",
      respostas: [
        "Uma função que chama outra função",
        "Uma função que é passada como argumento para outra função",
        "Uma função que retorna um valor diretamente",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a diferença entre `null` e `undefined` em JavaScript?",
      respostas: [
        "Não há diferença",
        "`null` é atribuído pelo sistema, enquanto `undefined` é atribuído pelo programador",
        "`null` representa a ausência de valor, enquanto `undefined` é atribuído quando uma variável é declarada, mas não inicializada",
      ],
      correta: 2
    },
    {
      pergunta: "Como você converte uma string para um número em JavaScript?",
      respostas: [
        "`parseInt()`",
        "`toString()`",
        "`toNumber()`",
      ],
      correta: 0
    },
    {
      pergunta: "O que é o conceito de 'hoisting' em JavaScript?",
      respostas: [
        "Levantar objetos na página",
        "Elevar declarações de variáveis e funções ao topo do escopo",
        "Suspender a execução do código temporariamente",
      ],
      correta: 1
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
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
        corretas.delete(item)
        if (estaCorreta) {
          corretas.add(item)
        }
        
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
  
  
  
    //coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }