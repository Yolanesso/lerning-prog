import './BashLevels.css';

interface PythonLevelsProps {
    onSelect: (lessonId: number) => void;
    onBack: () => void;
}

export function PythonLevels({ onSelect, onBack }: PythonLevelsProps) {
    const levels = [1, 2, 3];

    return (
        <div className="levels-container">
            <div className="levels-header">
                <button className="back-btn" onClick={onBack}>✖</button>
                <h1 className="levels-title">Уроки Python</h1>
            </div>

            <div className="levels-grid">
                {levels.map((lvl) => (
                    <div key={lvl} className="level-item">
                        <button className="level-button" onClick={() => onSelect(lvl)} style={{ backgroundColor: '#ffd43b', boxShadow: '0 8px 0 #d4a800', color: '#3c3c3c' }}>
                            {lvl}
                        </button>
                        <span className="level-label">Уровень {lvl}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
