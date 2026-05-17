import { QuestionOption } from '../../types/lesson';

interface LessonFooterProps {
  isSubmitted: boolean;
  isCorrect: boolean;
  questionType: 'choice' | 'input';
  correctOption?: number;
  options?: QuestionOption[];
  correctAnswer?: string;
  isNextDisabled: boolean;
  onSubmit: () => void;
  onNext: () => void;
}

export function LessonFooter({
  isSubmitted,
  isCorrect,
  questionType,
  correctOption,
  options,
  correctAnswer,
  isNextDisabled,
  onSubmit,
  onNext
}: LessonFooterProps) {
  return (
    <div className="lesson-footer">
      {isSubmitted && (
        <div className={`feedback-message ${isCorrect ? 'success' : 'error'}`}>
          {isCorrect
            ? 'Отлично! Правильный ответ.'
            : `Неверно. Правильный ответ: ${questionType === 'choice' 
                ? options?.find((o) => o.id === correctOption)?.text 
                : correctAnswer}`
          }
        </div>
      )}

      <button
        className={`check-btn ${!isNextDisabled ? 'active' : ''}`}
        onClick={isSubmitted ? onNext : onSubmit}
        disabled={!isSubmitted && isNextDisabled}
      >
        {isSubmitted ? 'Продолжить' : 'Проверить'}
      </button>
    </div>
  );
}
