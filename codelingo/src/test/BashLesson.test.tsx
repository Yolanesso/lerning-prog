import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BashLesson } from '../components/BashLesson';

describe('BashLesson Component', () => {
  it('должен отображать первый вопрос первого урока', () => {
    render(<BashLesson lessonId={1} onBack={() => { }} />);
    expect(screen.getByText(/Какая команда показывает список файлов/i)).toBeInTheDocument();
  });

  it('должен корректно обрабатывать правильный выбор в тестах (выбор из списка)', () => {
    render(<BashLesson lessonId={1} onBack={() => { }} />);

    const correctBtn = screen.getByText('ls');
    fireEvent.click(correctBtn);

    const checkBtn = screen.getByText(/Проверить/i);
    fireEvent.click(checkBtn);

    expect(screen.getByText(/Отлично! Правильный ответ/i)).toBeInTheDocument();
  });

  it('должен корректно обрабатывать неправильный выбор', () => {
    render(<BashLesson lessonId={1} onBack={() => { }} />);

    const wrongBtn = screen.getByText('cd');
    fireEvent.click(wrongBtn);

    fireEvent.click(screen.getByText(/Проверить/i));

    expect(screen.getByText(/Неверно. Правильный ответ: ls/i)).toBeInTheDocument();
  });

  it('должен корректно работать с текстовым вводом', () => {
    render(<BashLesson lessonId={1} onBack={() => { }} />);

    fireEvent.click(screen.getByText('ls'));
    fireEvent.click(screen.getByText(/Проверить/i));
    fireEvent.click(screen.getByText(/Продолжить/i));

    expect(screen.getByText(/Допиши команду, чтобы увидеть путь/i)).toBeInTheDocument();

    const input = screen.getByPlaceholderText(/Введите команду/i);
    fireEvent.change(input, { target: { value: 'pwd' } });

    fireEvent.click(screen.getByText(/Проверить/i));
    expect(screen.getByText(/Отлично! Правильный ответ/i)).toBeInTheDocument();
  });
});
