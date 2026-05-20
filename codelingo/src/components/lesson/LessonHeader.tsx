interface LessonHeaderProps {
  progressPercent: number;
  onBack: () => void;
}

export function LessonHeader({ progressPercent, onBack }: LessonHeaderProps) {
  return (
    <div className="lesson-header">
      <button className="back-btn" onClick={onBack}>✖</button>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progressPercent}%` }}></div>
      </div>
    </div>
  );
}
