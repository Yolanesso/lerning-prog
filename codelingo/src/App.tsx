import { useState } from 'react';
import { Auth } from './components/Auth';
import { CourseSelect } from './components/CourseSelect';
import { BashLesson } from './components/BashLesson';
import { BashLevels } from './components/BashLevels';
import { JavaLesson } from './components/JavaLesson';
import { JavaLevels } from './components/JavaLevels';
import { PythonLesson } from './components/PythonLesson';
import { PythonLevels } from './components/PythonLevels';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedLesson, setSelectedLesson] = useState<number | null>(null);

  const renderContent = () => {
    if (!isAuthenticated) {
      return <Auth onLogin={() => setIsAuthenticated(true)} />;
    }

    if (!selectedCourse) {
      return <CourseSelect onSelect={(course) => setSelectedCourse(course)} />;
    }

    if (selectedCourse === 'bash') {
      if (selectedLesson === null) {
        return (
          <BashLevels
            onSelect={(id) => setSelectedLesson(id)}
            onBack={() => setSelectedCourse('')}
          />
        );
      }
      return (
        <BashLesson
          lessonId={selectedLesson}
          onBack={() => setSelectedLesson(null)}
        />
      );
    }

    if (selectedCourse === 'java') {
        if (selectedLesson === null) {
            return (
                <JavaLevels
                    onSelect={(id) => setSelectedLesson(id)}
                    onBack={() => setSelectedCourse('')}
                />
            );
        }
        return (
            <JavaLesson
                lessonId={selectedLesson}
                onBack={() => setSelectedLesson(null)}
            />
        );
    }

    if (selectedCourse === 'python') {
        if (selectedLesson === null) {
            return (
                <PythonLevels
                    onSelect={(id) => setSelectedLesson(id)}
                    onBack={() => setSelectedCourse('')}
                />
            );
        }
        return (
            <PythonLesson
                lessonId={selectedLesson}
                onBack={() => setSelectedLesson(null)}
            />
        );
    }

    return (
      <div style={{ textAlign: 'center', padding: '50px', fontFamily: 'Nunito, sans-serif' }}>
        <h1 style={{ color: '#3c3c3c', fontSize: '32px', fontWeight: 800 }}>
          Курс {selectedCourse.toUpperCase()} в разработке! 🚀
        </h1>
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
          Вернуться назад
        </button>
      </div>
    );
  };

  return (
    <div className="app-wrapper">
      {renderContent()}
    </div>
  );
}

export default App;
