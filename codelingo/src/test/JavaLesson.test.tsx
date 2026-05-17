import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { JavaLesson } from '../components/JavaLesson..tsx';

describe('JavaLesson Component', () => {
    it('должен отображать первый вопрос первого урока по Java', () => {
        render(<JavaLesson lessonId={1} onBack={() => { }} />);
        expect(screen.getByText(/Какой тип данных используется для целых чисел в Java\?/i)).toBeInTheDocument();
    });

    it('должен корректно обрабатывать правильный выбор в тестах (выбор типа данных int)', () => {
        render(<JavaLesson lessonId={1} onBack={() => { }} />);
        const correctBtn = screen.getByText('int');
        fireEvent.click(correctBtn);
        const checkBtn = screen.getByText(/Проверить/i);
        fireEvent.click(checkBtn);


        expect(screen.getByText(/Отлично! Правильный ответ/i)).toBeInTheDocument();
    });

    it('должен корректно обрабатывать неправильный выбор в тестах', () => {
        render(<JavaLesson lessonId={1} onBack={() => { }} />);

        const wrongBtn = screen.getByText('String');
        fireEvent.click(wrongBtn);

        fireEvent.click(screen.getByText(/Проверить/i));
        expect(screen.getByText(/Неверно. Правильный ответ: int/i)).toBeInTheDocument();
    });

    it('должен корректно работать с текстовым вводом на следующем вопросе', () => {
        render(<JavaLesson lessonId={1} onBack={() => { }} />);

        fireEvent.click(screen.getByText('int'));
        fireEvent.click(screen.getByText(/Проверить/i));
        fireEvent.click(screen.getByText(/Продолжить/i));

        expect(screen.getByText(/Допиши команду для вывода текста в консоль:/i)).toBeInTheDocument();

        const input = screen.getByPlaceholderText(/метод.../i);

        fireEvent.change(input, { target: { value: 'println' } });

        fireEvent.click(screen.getByText(/Проверить/i));
        expect(screen.getByText(/Отлично! Правильный ответ/i)).toBeInTheDocument();
    });

    it('должен вызывать функцию onBack при клике на кнопку выхода', () => {
        let isBackCalled = false;
        render(<JavaLesson lessonId={1} onBack={() => { isBackCalled = true; }} />);
        const backBtn = screen.getByText('✖');
        fireEvent.click(backBtn);
        expect(isBackCalled).toBe(true);
    });
});