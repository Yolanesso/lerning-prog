import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { PythonLesson } from '../components/PythonLesson';

describe('PythonLesson Component', () => {
  it('должен отображать первый вопрос первого урока по Python', () => {
    render(<PythonLesson lessonId={1} onBack={() => { }} />);
    expect(screen.getByText(/Какой символ используется для присваивания/i)).toBeInTheDocument();
  });

  it('должен корректно обрабатывать правильный ввод знака присваивания', () => {
    render(<PythonLesson lessonId={1} onBack={() => { }} />);

    const input = screen.getByPlaceholderText(/символ/i);
    fireEvent.change(input, { target: { value: '=' } });

    fireEvent.click(screen.getByText(/Проверить/i));

    expect(screen.getByText(/Отлично! Правильный ответ/i)).toBeInTheDocument();
  });

  it('должен корректно обрабатывать неправильный ввод', () => {
    render(<PythonLesson lessonId={1} onBack={() => { }} />);

    const input = screen.getByPlaceholderText(/символ/i);
    fireEvent.change(input, { target: { value: '+' } });

    fireEvent.click(screen.getByText(/Проверить/i));

    expect(screen.getByText(/Неверно. Правильный ответ: =/i)).toBeInTheDocument();
  });

  it('должен корректно работать с выбором варианта на следующем вопросе', () => {
    render(<PythonLesson lessonId={1} onBack={() => { }} />);

    const input = screen.getByPlaceholderText(/символ/i);
    fireEvent.change(input, { target: { value: '=' } });
    fireEvent.click(screen.getByText(/Проверить/i));
    fireEvent.click(screen.getByText(/Продолжить/i));

    expect(screen.getByText(/Какой тип данных у значения 3.14/i)).toBeInTheDocument();

    const correctBtn = screen.getByText('float');
    fireEvent.click(correctBtn);

    fireEvent.click(screen.getByText(/Проверить/i));
    expect(screen.getByText(/Отлично! Правильный ответ/i)).toBeInTheDocument();
  });

  it('должен вызывать функцию onBack при клике на кнопку выхода', () => {
    let isBackCalled = false;
    render(<PythonLesson lessonId={1} onBack={() => { isBackCalled = true; }} />);
    const backBtn = screen.getByText('✖');
    fireEvent.click(backBtn);
    expect(isBackCalled).toBe(true);
  });
});
