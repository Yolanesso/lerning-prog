import { useState } from 'react';
import './Auth.css';

export function Auth({ onLogin }: { onLogin: () => void }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Пожалуйста, заполните все поля!');
      return;
    }

    if (!isLogin && !name) {
      setError('Пожалуйста, введите ваше имя!');
      return;
    }

    if (isLogin) {
      console.log('Отправляем на сервер:', { email, password });
      alert('Авторизация прошла успешно!');
      onLogin();
    } else {
      console.log('Отправляем на сервер:', { name, email, password });
      alert('Регистрация прошла успешно!');
      onLogin();
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

          {!isLogin && (
            <div className="form-group">
              <label>Имя</label>
              <input
                type="text"
                placeholder="Как тебя зовут?"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          )}

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="твой@email.ru"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Пароль</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="auth-button main-btn">
            {isLogin ? 'Войти' : 'Зарегистрироваться'}
          </button>
        </form>

        <div className="auth-switch">
          <p>
            {isLogin ? 'Еще нет аккаунта?' : 'Уже есть аккаунт?'}
          </p>
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
