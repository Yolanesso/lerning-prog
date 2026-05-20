import type { QuestionOption } from '../../types/lesson';

interface ChoiceExerciseProps {
  options: QuestionOption[];
  selectedOption: number | null;
  correctOption: number;
  isSubmitted: boolean;
  onSelect: (id: number) => void;
}

export function ChoiceExercise({
  options,
  selectedOption,
  correctOption,
  isSubmitted,
  onSelect
}: ChoiceExerciseProps) {
  return (
    <div className="options-grid">
      {options.map((opt) => {
        let className = "option-card";
        if (selectedOption === opt.id) className += " selected";
        if (isSubmitted) {
          if (opt.id === correctOption) className += " correct";
          else if (selectedOption === opt.id) className += " wrong";
        }

        return (
          <button
            key={opt.id}
            className={className}
            onClick={() => {
              if (!isSubmitted) onSelect(opt.id);
            }}
          >
            {opt.text}
          </button>
        );
      })}
    </div>
  );
}
