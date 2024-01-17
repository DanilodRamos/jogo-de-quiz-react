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
  ];
  
  // Adicione mais perguntas conforme necessário


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
      <h1>Quiz de Programação</h1>
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
