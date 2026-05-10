import { useState } from 'react';
import './BashLesson.css';

interface BashLessonProps {
  onBack: () => void;
}

export function BashLesson({ onBack }: BashLessonProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const questions = [
    {
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
      title: 'Какая команда создает новую пустую папку?',
      correctOption: 2,
      options: [
        { id: 0, text: 'newdir' },
        { id: 1, text: 'touch' },
        { id: 2, text: 'mkdir' },
        { id: 3, text: 'create' }
      ]
    },
    {
      title: 'Что делает команда pwd?',
      correctOption: 3,
      options: [
        { id: 0, text: 'Вводит пароль (password)' },
        { id: 1, text: 'Копирует файл' },
        { id: 2, text: 'Очищает экран терминала' },
        { id: 3, text: 'Показывает полный путь к текущей папке' }
      ]
    }
  ];

  if (currentQuestionIndex >= questions.length) {
    return (
      <div className="lesson-container" style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <h1 style={{ color: '#58cc02', fontSize: '40px', marginBottom: '20px' }}>Поздравляем! 🎉</h1>
        <p style={{ color: '#777', fontSize: '20px', marginBottom: '40px' }}>
          Вы успешно прошли первый урок по Bash.
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
  const isCorrect = selectedOption === currentQuestion.correctOption;
  const progressPercent = (currentQuestionIndex / questions.length) * 100;

  const handleSubmit = () => {
    if (selectedOption === null) return;
    setIsSubmitted(true);
  };

  const handleNext = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setSelectedOption(null);
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

      <div className="lesson-footer">
        {isSubmitted && (
          <div className={`feedback-message ${isCorrect ? 'success' : 'error'}`}>
            {isCorrect
              ? 'Отлично! Правильный ответ.'
              : `Неверно. Правильный ответ: ${currentQuestion.options.find(o => o.id === currentQuestion.correctOption)?.text}`
            }
          </div>
        )}

        <button
          className={`check-btn ${selectedOption !== null ? 'active' : ''}`}
          onClick={isSubmitted ? handleNext : handleSubmit}
          disabled={selectedOption === null}
        >
          {isSubmitted ? 'Продолжить' : 'Проверить'}
        </button>
      </div>
    </div>
  );
}
