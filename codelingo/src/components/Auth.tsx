import { useState } from 'react';
import './Auth.css';

export function Auth({ onLogin }: { onLogin: () => void }) {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const url = isLogin
        ? 'http://localhost:8080/api/auth/login'
        : 'http://localhost:8080/api/auth/register';

    // Формируем объект для отправки. Для логина почта обычно не нужна,
    const payload = isLogin
        ? { username, password }
        : { username, email, password };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        if (isLogin) {
          const token = await response.text();
          localStorage.setItem('token', token);
          onLogin();
        } else {
          alert('Регистрация успешна!');
          setIsLogin(true);
        }
      } else {
        const errorText = await response.text();
        setError(errorText || 'Ошибка доступа');
      }
    } catch (err) {
      setError('Не удается связаться с backend');
    }
  };

  return (
      <div className="auth-container">
        <div className="auth-card">
          <h1 className="auth-title">
            {isLogin ? 'С возвращением!' : 'Создать аккаунт'}
          </h1>
          <p className="auth-subtitle">
            {isLogin
                ? 'Продолжи изучение программирования'
                : 'Начни свой путь в мире кода прямо сейчас'}
          </p>

          {error && <div className="auth-error">{error}</div>}

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label>Имя пользователя</label>
              <input
                  type="text"
                  placeholder="Твой логин"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
              />
            </div>

            {/* Поле Email показываем только при регистрации */}
            {!isLogin && (
                <div className="form-group">
                  <label>Email</label>
                  <input
                      type="email"
                      placeholder="example@mail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required={!isLogin}
                  />
                </div>
            )}

            <div className="form-group">
              <label>Пароль</label>
              <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
              />
            </div>

            <button type="submit" className="auth-button main-btn">
              {isLogin ? 'Войти' : 'Зарегистрироваться'}
            </button>
          </form>

          <div className="auth-switch">
            <p>{isLogin ? 'Еще нет аккаунта?' : 'Уже есть аккаунт?'}</p>
            <button
                type="button"
                className="switch-btn"
                onClick={() => {
                  setIsLogin(!isLogin);
                  setError('');
                }}
            >
              {isLogin ? 'Зарегистрируйся' : 'Войди'}
            </button>
          </div>
        </div>
      </div>
  );
}