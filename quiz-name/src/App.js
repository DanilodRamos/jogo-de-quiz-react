import React, { useState } from 'react';
import './App.scss';

const questions = [
  {
    question: 'Qual é a linguagem de programação mais popular?',
    options: ['JavaScript', 'Python', 'Java', 'C++'],
    correctAnswer: 'JavaScript',
  },
  {
    question: 'O que significa HTML?',
    options: [
      'Hypertext Markup Language',
      'Hyperlink and Text Markup Language',
      'Home Tool Markup Language',
      'Hyper Tool Multi Language',
    ],
    correctAnswer: 'Hypertext Markup Language',
  },
    {
      question: 'Qual é a linguagem de programação mais antiga ainda em uso?',
      options: ['Fortran', 'COBOL', 'Assembly', 'C'],
      correctAnswer: 'Assembly',
    },
    {
      question: 'O que significa CSS?',
      options: [
        'Counter Style Sheet',
        'Computer Style Sheet',
        'Creative Style Sheet',
        'Cascading Style Sheet',
      ],
      correctAnswer: 'Cascading Style Sheet',
    },
    {
      question: 'Em que ano o JavaScript foi introduzido?',
      options: ['1995', '2000', '2005', '2010'],
      correctAnswer: '1995',
    },
    {
      question: 'O que é um framework JavaScript amplamente usado para construir interfaces de usuário?',
      options: ['React', 'Angular', 'Vue', 'Express'],
      correctAnswer: 'React',
    },
    {
      question: 'Qual é a principal função do comando "git clone"?',
      options: [
        'Criar um novo repositório Git',
        'Copiar um repositório Git existente',
        'Excluir um repositório Git',
        'Verificar o status de um repositório Git',
      ],
      correctAnswer: 'Copiar um repositório Git existente',
    },
    {
      question: 'Qual tag HTML é usada para criar um link?',
      options: ['<link>', '<a>', '<url>', '<href>'],
      correctAnswer: '<a>',
    },
    {
      question: 'Qual é a diferença entre "let" e "const" no JavaScript?',
      options: [
        'Ambos são usados para declarar variáveis globais.',
        '"let" é usado para variáveis mutáveis, enquanto "const" é usado para variáveis imutáveis.',
        '"let" é usado para variáveis imutáveis, enquanto "const" é usado para variáveis mutáveis.',
        'Ambos são usados para declarar variáveis locais.',
      ],
      correctAnswer: '"let" é usado para variáveis mutáveis, enquanto "const" é usado para variáveis imutáveis.',
    },
      {
        question: 'O que significa a sigla API?',
        options: [
          'Advanced Programming Interface',
          'Application Programming Interface',
          'Automated Programming Interface',
          'Alliance of Programmers and Inventors',
        ],
        correctAnswer: 'Application Programming Interface',
      },
      {
        question: 'Qual é a linguagem de programação usada para criar páginas web interativas?',
        options: ['Java', 'Python', 'HTML', 'JavaScript'],
        correctAnswer: 'JavaScript',
      },
      {
        question: 'O que é o DOM?',
        options: [
          'Data Object Model',
          'Document Object Model',
          'Dynamic Object Model',
          'Database Object Model',
        ],
        correctAnswer: 'Document Object Model',
      },
      {
        question: 'Qual é a função do comando "npm install"?',
        options: [
          'Criar um novo projeto Node.js',
          'Instalar dependências do projeto Node.js',
          'Desinstalar o Node.js',
          'Atualizar o Node.js',
        ],
        correctAnswer: 'Instalar dependências do projeto Node.js',
      },
      {
        question: 'O que é o AJAX?',
        options: [
          'Uma linguagem de programação',
          'Um framework de front-end',
          'Um método de requisição assíncrona em JavaScript',
          'Uma técnica de design de banco de dados',
        ],
        correctAnswer: 'Um método de requisição assíncrona em JavaScript',
      },
      {
        question: 'Qual é o objetivo do Git?',
        options: [
          'Armazenar dados em um banco de dados',
          'Gerenciar projetos de desenvolvimento de software',
          'Executar operações de matemática avançada',
          'Automatizar tarefas de sistema operacional',
        ],
        correctAnswer: 'Gerenciar projetos de desenvolvimento de software',
      },
      {
        question: 'O que é um loop "for" em programação?',
        options: [
          'Uma instrução para executar uma única vez',
          'Uma estrutura de controle de fluxo que repete um bloco de código',
          'Uma função que gera números aleatórios',
          'Um tipo de dado em linguagens de programação',
        ],
        correctAnswer: 'Uma estrutura de controle de fluxo que repete um bloco de código',
      },
      {
        question: 'Qual é o significado de MVC em arquitetura de software?',
        options: [
          'Model View Configuration',
          'Model View Control',
          'Model Visual Code',
          'Mainframe View Control',
        ],
        correctAnswer: 'Model View Control',
      },
      {
        question: 'O que é o método "map" em JavaScript?',
        options: [
          'Um método para traçar rotas em mapas online',
          'Um método para adicionar elementos a um array',
          'Um método para criar um novo array transformando cada elemento do array original',
          'Um método para pesquisar em uma base de dados',
        ],
        correctAnswer: 'Um método para criar um novo array transformando cada elemento do array original',
      },
      {
        question: 'Qual é a finalidade do comando SQL "SELECT"?',
        options: [
          'Atualizar registros em um banco de dados',
          'Inserir novos registros em um banco de dados',
          'Recuperar dados de um banco de dados',
          'Excluir registros de um banco de dados',
        ],
        correctAnswer: 'Recuperar dados de um banco de dados',
      },
      {
        question: 'O que é um "callback" em JavaScript?',
        options: [
          'Um método para chamar uma função antes de outra',
          'Uma função que retorna um valor diretamente',
          'Um método para adicionar um evento a um elemento HTML',
          'Uma função que é passada como argumento para outra função e é executada depois de algum evento',
        ],
        correctAnswer: 'Uma função que é passada como argumento para outra função e é executada depois de algum evento',
      }, // Adicione mais perguntas conforme necessário
    ];
    function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswerClick = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    // Avança para a próxima pergunta ou finaliza o jogo
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert(`Jogo Finalizado! Sua pontuação final é ${score}`);
      // Verifica se a pontuação é maior que 60%
      if ((score / questions.length) * 100 > 60) {
        alert('Parabéns! Você venceu!');
      } else {
        alert('Infelizmente, você não atingiu a pontuação necessária para vencer.');
      }
        // Reinicie o jogo se desejar
      // setCurrentQuestion(0);
      // setScore(0);
      
    }
  };


  return (
    <div className="App">
      <h1>Quiz de Programação do Danilo</h1>
      <p>Pergunta {currentQuestion + 1} de {questions.length}</p>
      <p>{questions[currentQuestion].question}</p>
      <ul>
        {questions[currentQuestion].options.map((option, index) => (
          <li key={index} onClick={() => handleAnswerClick(option)}>
            {option}
          </li>
        ))}
      </ul>
      <p>Pontuação: {score}</p>
    </div>
  );
}

export default App;
