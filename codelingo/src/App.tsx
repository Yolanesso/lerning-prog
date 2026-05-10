import { useState } from 'react';
import { Auth } from './components/Auth';
import { CourseSelect } from './components/CourseSelect';
import { BashLesson } from './components/BashLesson';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');

  if (!isAuthenticated) {
    return <Auth onLogin={() => setIsAuthenticated(true)} />;
  }

  if (!selectedCourse) {
    return <CourseSelect onSelect={(course) => setSelectedCourse(course)} />;
  }

  if (selectedCourse === 'bash') {
    return <BashLesson onBack={() => setSelectedCourse('')} />;
  }

  return (
    <div style={{ textAlign: 'center', padding: '50px', fontFamily: 'Nunito, sans-serif' }}>
      <h1 style={{ color: '#3c3c3c', fontSize: '32px', fontWeight: 800 }}>
        Отлично! Начинаем учить {selectedCourse.toUpperCase()}! 🚀
      </h1>
      <p style={{ color: '#777', fontSize: '18px' }}>
        Здесь будет интерфейс самого урока...
      </p>
      <button
        onClick={() => setSelectedCourse('')}
        style={{
          marginTop: '30px',
          padding: '15px 30px',
          backgroundColor: '#1cb0f6',
          color: 'white',
          border: 'none',
          borderRadius: '16px',
          fontSize: '18px',
          fontWeight: 800,
          cursor: 'pointer',
          boxShadow: '0 4px 0 #1899d6',
          textTransform: 'uppercase'
        }}
      >
        Выбрать другой язык
      </button>
    </div>
  );
}

export default App;
