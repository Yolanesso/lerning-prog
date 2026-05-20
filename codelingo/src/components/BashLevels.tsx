import './BashLevels.css';

interface BashLevelsProps {
  onSelect: (lessonId: number) => void;
  onBack: () => void;
}

export function BashLevels({ onSelect, onBack }: BashLevelsProps) {
  const levels = [1, 2, 3];

  return (
    <div className="levels-container">
      <div className="levels-header">
        <button className="back-btn" onClick={onBack}>✖</button>
        <h1 className="levels-title">Уроки Bash</h1>
      </div>
      
      <div className="levels-grid">
        {levels.map((lvl) => (
          <div key={lvl} className="level-item">
            <button className="level-button" onClick={() => onSelect(lvl)}>
              {lvl}
            </button>
            <span className="level-label">Урок {lvl}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
