import './CourseSelect.css';

interface CourseSelectProps {
  onSelect: (course: string) => void;
}

export function CourseSelect({ onSelect }: CourseSelectProps) {
  const courses = [
    { id: 'python', name: 'Python', icon: '🐍', desc: 'Отличный выбор для старта' },
    { id: 'java', name: 'Java', icon: '☕', desc: 'Мощный и надежный' },
    { id: 'bash', name: 'Bash', icon: '💻', desc: 'Управление сервером' },
  ];

  return (
    <div className="course-container">
      <div className="course-header">
        <h1 className="course-title">Что будем учить?</h1>
        <p className="course-subtitle">Выбери язык, чтобы начать</p>
      </div>
      
      <div className="course-list">
        {courses.map((course) => (
          <button 
            key={course.id} 
            className="course-card"
            onClick={() => onSelect(course.id)}
          >
            <span className="course-icon">{course.icon}</span>
            <div className="course-info">
              <span className="course-name">{course.name}</span>
              <span className="course-desc">{course.desc}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
