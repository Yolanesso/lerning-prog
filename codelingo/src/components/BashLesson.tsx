import { useState } from 'react';
import './BashLesson.css';

interface BashLessonProps {
  lessonId: number;
  onBack: () => void;
}

interface QuestionOption {
  id: number;
  text: string;
}

interface ChoiceQuestion {
  type: 'choice';
  title: string;
  correctOption: number;
  options: QuestionOption[];
}

interface InputQuestion {
  type: 'input';
  title: string;
  codePrefix: string;
  correctAnswer: string;
  placeholder: string;
}

type Question = ChoiceQuestion | InputQuestion;

export function BashLesson({ lessonId, onBack }: BashLessonProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Вопросы для каждого уровня
  const allQuestions: Record<number, Question[]> = {
    1: [
      {
        type: 'choice',
        title: 'Какая команда показывает список файлов в текущей папке?',
        correctOption: 1,
        options: [
          { id: 0, text: 'cd' },
          { id: 1, text: 'ls' },
          { id: 2, text: 'mkdir' },
          { id: 3, text: 'pwd' }
        ]
      },
      {
        type: 'input',
        title: 'Допиши команду, чтобы увидеть путь к текущей директории:',
        codePrefix: '',
        correctAnswer: 'pwd',
        placeholder: 'Введите команду...'
      }
    ],
    2: [
      {
        type: 'choice',
        title: 'Как перейти в другую директорию (папку)?',
        correctOption: 0,
        options: [
          { id: 0, text: 'cd' },
          { id: 1, text: 'move' },
          { id: 2, text: 'go' },
          { id: 3, text: 'dir' }
        ]
      },
      {
        type: 'input',
        title: 'Допиши команду, чтобы создать папку с названием "work":',
        codePrefix: 'mkdir ',
        correctAnswer: 'work',
        placeholder: 'имя папки...'
      }
    ],
    3: [
      {
        type: 'input',
        title: 'Создай пустой файл с названием "script.sh":',
        codePrefix: 'touch ',
        correctAnswer: 'script.sh',
        placeholder: 'имя файла...'
      },
      {
        type: 'choice',
        title: 'Какая команда выводит содержимое файла в терминал?',
        correctOption: 3,
        options: [
          { id: 0, text: 'show' },
          { id: 1, text: 'open' },
          { id: 2, text: 'ls' },
          { id: 3, text: 'cat' }
        ]
      }
    ]
  };

  const questions = allQuestions[lessonId] || [];

  if (currentQuestionIndex >= questions.length) {
    return (
      <div className="lesson-container" style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <h1 style={{ color: '#58cc02', fontSize: '40px', marginBottom: '20px' }}>Поздравляем! 🎉</h1>
        <p style={{ color: '#777', fontSize: '20px', marginBottom: '40px' }}>
          Вы успешно прошли Урок {lessonId} по Bash.
        </p>
        <button
          className="check-btn active"
          style={{ padding: '15px 40px' }}
          onClick={onBack}
        >
          Завершить
        </button>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  
  // Проверка правильности
  const isCorrect = currentQuestion.type === 'choice' 
    ? selectedOption === currentQuestion.correctOption
    : inputValue.trim().toLowerCase() === currentQuestion.correctAnswer.toLowerCase();

  const progressPercent = (currentQuestionIndex / questions.length) * 100;

  const handleSubmit = () => {
    if (currentQuestion.type === 'choice' && selectedOption === null) return;
    if (currentQuestion.type === 'input' && inputValue.trim() === '') return;
    setIsSubmitted(true);
  };

  const handleNext = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setSelectedOption(null);
    setInputValue('');
    setIsSubmitted(false);
  };

  return (
    <div className="lesson-container">
      <div className="lesson-header">
        <button className="back-btn" onClick={onBack}>✖</button>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progressPercent}%` }}></div>
        </div>
      </div>

      <h2 className="lesson-title">{currentQuestion.title}</h2>

      {currentQuestion.type === 'choice' ? (
        <div className="options-grid">
          {currentQuestion.options.map((opt) => {
            let className = "option-card";
            if (selectedOption === opt.id) className += " selected";
            if (isSubmitted) {
              if (opt.id === currentQuestion.correctOption) className += " correct";
              else if (selectedOption === opt.id) className += " wrong";
            }

            return (
              <button
                key={opt.id}
                className={className}
                onClick={() => {
                  if (!isSubmitted) setSelectedOption(opt.id);
                }}
              >
                {opt.text}
              </button>
            );
          })}
        </div>
      ) : (
        <div className="input-exercise">
          <div className="code-input-container">
            <span className="code-prefix">{currentQuestion.codePrefix}</span>
            <input 
              type="text" 
              className={`code-input ${isSubmitted ? (isCorrect ? 'correct' : 'wrong') : ''}`}
              placeholder={currentQuestion.placeholder}
              value={inputValue}
              onChange={(e) => !isSubmitted && setInputValue(e.target.value)}
              autoFocus
            />
          </div>
        </div>
      )}

      <div className="lesson-footer">
        {isSubmitted && (
          <div className={`feedback-message ${isCorrect ? 'success' : 'error'}`}>
            {isCorrect
              ? 'Отлично! Правильный ответ.'
              : `Неверно. Правильный ответ: ${currentQuestion.type === 'choice' 
                  ? currentQuestion.options.find((o: QuestionOption) => o.id === currentQuestion.correctOption)?.text 
                  : currentQuestion.correctAnswer}`
            }
          </div>
        )}

        <button
          className={`check-btn ${(currentQuestion.type === 'choice' ? selectedOption !== null : inputValue.trim() !== '') ? 'active' : ''}`}
          onClick={isSubmitted ? handleNext : handleSubmit}
          disabled={!isSubmitted && (currentQuestion.type === 'choice' ? selectedOption === null : inputValue.trim() === '')}
        >
          {isSubmitted ? 'Продолжить' : 'Проверить'}
        </button>
      </div>
    </div>
  );
}
