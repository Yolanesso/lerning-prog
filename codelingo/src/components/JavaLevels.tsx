import './BashLevels.css';

interface JavaLevelsProps {
    onSelect: (lessonId: number) => void;
    onBack: () => void;
}

export function JavaLevels({ onSelect, onBack }: JavaLevelsProps) {
    const levels = [1, 2, 3];

    return (
        <div className="levels-container">
            <div className="levels-header">
                <button className="back-btn" onClick={onBack}>✖</button>
                <h1 className="levels-title">Уроки Java</h1>
            </div>

            <div className="levels-grid">
                {levels.map((lvl) => (
                    <div key={lvl} className="level-item">
                        <button className="level-button" onClick={() => onSelect(lvl)} style={{ backgroundColor: '#f39c12', boxShadow: '0 8px 0 #e67e22' }}>
                            {lvl}
                        </button>
                        <span className="level-label">Уровень {lvl}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}