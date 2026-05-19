import { useState, useEffect } from 'react';
import { bashQuestions } from '../data/bashQuestions';
import { LessonHeader } from './lesson/LessonHeader';
import { ChoiceExercise } from './lesson/ChoiceExercise';
import { InputExercise } from './lesson/InputExercise';
import { LessonFooter } from './lesson/LessonFooter';
import './BashLesson.css';
import { API_BASE_URL, getStoredToken } from '../lib/backend';

interface BashLessonProps {
  lessonId: number;
  onBack: () => void;
}

export function BashLesson({ lessonId, onBack }: BashLessonProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);

  const questions = bashQuestions[lessonId] || [];
  const sendProgressToBackend = async () => {
    const token = getStoredToken();
    if (!token) {
      console.error("Токен не найден! Прогресс не сохранен.");
      return;
    }

    const finalScore = questions.length > 0
      ? Math.round((correctAnswersCount / questions.length) * 100)
      : 100;

    try {
      const response = await fetch(`${API_BASE_URL}/api/lessons/complete`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          lessonId: lessonId,
          score: finalScore
        }),
      });

      if (response.ok) {
        console.log("Прогресс по Bash успешно сохранен на сервере!");
      } else {
        console.error("Сервер вернул ошибку при сохранении прогресса:", response.status);
      }
    } catch (err) {
      console.error("Не удалось связаться с бэкендом:", err);
    }
  };
  useEffect(() => {
    if (questions.length > 0 && currentQuestionIndex >= questions.length) {
      sendProgressToBackend();
    }
  }, [currentQuestionIndex]);

  if (currentQuestionIndex >= questions.length) {
    return (
      <div
        className="lesson-container"
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          '--theme-color': '#58cc02',
          '--theme-shadow': '#58a700',
          '--theme-hover': '#61e002',
          '--theme-light': '#e5f5da',
          '--theme-text-color': 'white'
        } as React.CSSProperties}
      >
        <h1 style={{ color: 'var(--theme-color)', fontSize: '40px', marginBottom: '20px' }}>Поздравляем! 🎉</h1>
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

  const isCorrect = currentQuestion.type === 'choice'
    ? selectedOption === currentQuestion.correctOption
    : inputValue.trim().toLowerCase() === currentQuestion.correctAnswer.toLowerCase();

  const progressPercent = (currentQuestionIndex / questions.length) * 100;

  const handleSubmit = () => {
    if (currentQuestion.type === 'choice' && selectedOption === null) return;
    if (currentQuestion.type === 'input' && inputValue.trim() === '') return;

    if (isCorrect) {
      setCorrectAnswersCount(prev => prev + 1);
    }

    setIsSubmitted(true);
  };

  const handleNext = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setSelectedOption(null);
    setInputValue('');
    setIsSubmitted(false);
  };

  const isNextDisabled = currentQuestion.type === 'choice'
    ? selectedOption === null
    : inputValue.trim() === '';

  return (
    <div
      className="lesson-container"
      style={{
        '--theme-color': '#58cc02',
        '--theme-shadow': '#58a700',
        '--theme-hover': '#61e002',
        '--theme-light': '#e5f5da',
        '--theme-text-color': 'white'
      } as React.CSSProperties}
    >
      <LessonHeader
        progressPercent={progressPercent}
        onBack={onBack}
      />

      <h2 className="lesson-title">{currentQuestion.title}</h2>

      {currentQuestion.type === 'choice' ? (
        <ChoiceExercise
          options={currentQuestion.options}
          selectedOption={selectedOption}
          correctOption={currentQuestion.correctOption}
          isSubmitted={isSubmitted}
          onSelect={setSelectedOption}
        />
      ) : (
        <InputExercise
          codePrefix={currentQuestion.codePrefix}
          placeholder={currentQuestion.placeholder}
          inputValue={inputValue}
          isSubmitted={isSubmitted}
          isCorrect={isCorrect}
          onChange={setInputValue}
        />
      )}

      <LessonFooter
        isSubmitted={isSubmitted}
        isCorrect={isCorrect}
        questionType={currentQuestion.type}
        correctOption={currentQuestion.type === 'choice' ? currentQuestion.correctOption : undefined}
        options={currentQuestion.type === 'choice' ? currentQuestion.options : undefined}
        correctAnswer={currentQuestion.type === 'input' ? currentQuestion.correctAnswer : undefined}
        isNextDisabled={isNextDisabled}
        onSubmit={handleSubmit}
        onNext={handleNext}
      />
    </div>
  );
}
