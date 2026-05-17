interface InputExerciseProps {
  codePrefix: string;
  placeholder: string;
  inputValue: string;
  isSubmitted: boolean;
  isCorrect: boolean;
  onChange: (value: string) => void;
}

export function InputExercise({
  codePrefix,
  placeholder,
  inputValue,
  isSubmitted,
  isCorrect,
  onChange
}: InputExerciseProps) {
  return (
    <div className="input-exercise">
      <div className="code-input-container">
        <span className="code-prefix">{codePrefix}</span>
        <input 
          type="text" 
          className={`code-input ${isSubmitted ? (isCorrect ? 'correct' : 'wrong') : ''}`}
          placeholder={placeholder}
          value={inputValue}
          onChange={(e) => !isSubmitted && onChange(e.target.value)}
          autoFocus
        />
      </div>
    </div>
  );
}
