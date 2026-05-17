import { useState } from 'react';
import { bashQuestions } from '../data/bashQuestions';
import { LessonHeader } from './lesson/LessonHeader';
import { ChoiceExercise } from './lesson/ChoiceExercise';
import { InputExercise } from './lesson/InputExercise';
import { LessonFooter } from './lesson/LessonFooter';
import './BashLesson.css';

interface BashLessonProps {
  lessonId: number;
  onBack: () => void;
}

export function BashLesson({ lessonId, onBack }: BashLessonProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const questions = bashQuestions[lessonId] || [];

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
