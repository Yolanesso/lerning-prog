import { useState } from 'react';
import { pythonQuestions } from '../data/pythonQuestions';
import { LessonHeader } from './lesson/LessonHeader';
import { ChoiceExercise } from './lesson/ChoiceExercise';
import { InputExercise } from './lesson/InputExercise';
import { LessonFooter } from './lesson/LessonFooter';
import './BashLesson.css';

interface PythonLessonProps {
  lessonId: number;
  onBack: () => void;
}

export function PythonLesson({ lessonId, onBack }: PythonLessonProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const questions = pythonQuestions[lessonId] || [];

  if (currentQuestionIndex >= questions.length) {
    return (
      <div 
        className="lesson-container" 
        style={{ 
          justifyContent: 'center', 
          alignItems: 'center', 
          textAlign: 'center',
          '--theme-color': '#ffd43b',
          '--theme-shadow': '#d4a800',
          '--theme-hover': '#f7cc2c',
          '--theme-light': '#fffbe6',
          '--theme-text-color': '#3c3c3c'
        } as React.CSSProperties}
      >
        <h1 style={{ color: 'var(--theme-color)', fontSize: '40px', marginBottom: '20px' }}>Урок пройден! 🐍</h1>
        <p style={{ color: '#777', fontSize: '20px', marginBottom: '40px' }}>
          Вы успешно завершили Урок {lessonId} по Python.
        </p>
        <button
          className="check-btn active"
          style={{ padding: '15px 40px' }}
          onClick={onBack}
        >
          Вернуться к меню
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
        '--theme-color': '#ffd43b',
        '--theme-shadow': '#d4a800',
        '--theme-hover': '#f7cc2c',
        '--theme-light': '#fffbe6',
        '--theme-text-color': '#3c3c3c'
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
