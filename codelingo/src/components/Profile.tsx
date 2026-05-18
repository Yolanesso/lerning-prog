import { useState } from 'react';
import './Profile.css';

interface CourseProgress {
  id: string;
  name: string;
  icon: string;
  themeColor: string;
  totalLessons: number;
  completedLessons: number;
  totalXp: number;
  earnedXp: number;
}

interface UserProfile {
  username: string;
  email: string;
  totalXp: number;
  lessonsCompleted: number;
  streak: number;
  courses: CourseProgress[];
}

const mockProfile: UserProfile = {
  username: 'user',
  email: 'user@example.com',
  totalXp: 340,
  lessonsCompleted: 5,
  streak: 7,
  courses: [
    {
      id: 'java',
      name: 'Java',
      icon: '☕',
      themeColor: '#f39c12',
      totalLessons: 3,
      completedLessons: 2,
      totalXp: 200,
      earnedXp: 130,
    },
    {
      id: 'python',
      name: 'Python',
      icon: '🐍',
      themeColor: '#ffd43b',
      totalLessons: 3,
      completedLessons: 2,
      totalXp: 80,
      earnedXp: 50,
    },
    {
      id: 'bash',
      name: 'Bash',
      icon: '💻',
      themeColor: '#58cc02',
      totalLessons: 3,
      completedLessons: 1,
      totalXp: 60,
      earnedXp: 20,
    },
  ],
};

interface ProfileProps {
  onBack: () => void;
}

export function Profile({ onBack }: ProfileProps) {
  const [profile] = useState<UserProfile>(mockProfile);

  const initials = profile.username
    .split(' ')
    .map((w) => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="profile-container">
      <div className="profile-header">
        <button className="back-btn" onClick={onBack}>✖</button>
        <h1 className="profile-title">Профиль</h1>
      </div>

      <div className="profile-content">
        <div className="profile-avatar-section">
          <div className="profile-avatar">
            <span className="profile-initials">{initials}</span>
          </div>
          <h2 className="profile-username">{profile.username}</h2>
          <p className="profile-email">{profile.email}</p>
        </div>

        <div className="profile-stats">
          <div className="stat-card">
            <span className="stat-icon">⭐</span>
            <span className="stat-value">{profile.totalXp}</span>
            <span className="stat-label">Общий XP</span>
          </div>
          <div className="stat-card">
            <span className="stat-icon">✅</span>
            <span className="stat-value">{profile.lessonsCompleted}</span>
            <span className="stat-label">Уроков</span>
          </div>
          <div className="stat-card">
            <span className="stat-icon">🔥</span>
            <span className="stat-value">{profile.streak}</span>
            <span className="stat-label">Дней подряд</span>
          </div>
        </div>

        <div className="profile-courses">
          <h3 className="courses-heading">Прогресс по курсам</h3>
          {profile.courses.map((course) => {
            const lessonPercent = Math.round(
              (course.completedLessons / course.totalLessons) * 100
            );
            const xpPercent = Math.round(
              (course.earnedXp / course.totalXp) * 100
            );

            return (
              <div key={course.id} className="course-progress-card">
                <div className="course-progress-header">
                  <span className="course-progress-icon">{course.icon}</span>
                  <div className="course-progress-info">
                    <span className="course-progress-name">{course.name}</span>
                    <span className="course-progress-detail">
                      {course.completedLessons}/{course.totalLessons} уроков · {course.earnedXp}/{course.totalXp} XP
                    </span>
                  </div>
                </div>
                <div className="course-progress-bars">
                  <div className="mini-progress-row">
                    <span className="mini-progress-label">Уроки</span>
                    <div className="mini-progress-bar">
                      <div
                        className="mini-progress-fill"
                        style={{
                          width: `${lessonPercent}%`,
                          backgroundColor: course.themeColor,
                        }}
                      />
                    </div>
                    <span className="mini-progress-value">{lessonPercent}%</span>
                  </div>
                  <div className="mini-progress-row">
                    <span className="mini-progress-label">XP</span>
                    <div className="mini-progress-bar">
                      <div
                        className="mini-progress-fill"
                        style={{
                          width: `${xpPercent}%`,
                          backgroundColor: course.themeColor,
                        }}
                      />
                    </div>
                    <span className="mini-progress-value">{xpPercent}%</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
