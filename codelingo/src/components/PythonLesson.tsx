import { useState } from 'react';
import './BashLesson.css';

interface PythonLessonProps {
    lessonId: number;
    onBack: () => void;
}

interface QuestionOption {
    id: number;
    text: string;
}

interface ChoiceQuestion {
    type: 'choice';
    title: string;
    correctOption: number;
    options: QuestionOption[];
}

interface InputQuestion {
    type: 'input';
    title: string;
    codePrefix: string;
    correctAnswer: string;
    placeholder: string;
}

type Question = ChoiceQuestion | InputQuestion;

export function PythonLesson({ lessonId, onBack }: PythonLessonProps) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [inputValue, setInputValue] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const allQuestions: Record<number, Question[]> = {
        1: [
            {
                type: 'input',
                title: 'Какой символ используется для присваивания значения переменной? (вместо ?)',
                codePrefix: 'x ? 5',
                correctAnswer: '=',
                placeholder: 'символ...'
            },
            {
                type: 'choice',
                title: 'Какой тип данных у значения 3.14 в Python?',
                correctOption: 1,
                options: [
                    { id: 0, text: 'int' },
                    { id: 1, text: 'float' },
                    { id: 2, text: 'str' },
                    { id: 3, text: 'bool' }
                ]
            },
            {
                type: 'input',
                title: 'Что выведет: print(2 + 3)?',
                codePrefix: '',
                correctAnswer: '5',
                placeholder: 'результат...'
            },
            {
                type: 'choice',
                title: 'Какая функция используется для вывода текста в Python?',
                correctOption: 0,
                options: [
                    { id: 0, text: 'print' },
                    { id: 1, text: 'echo' },
                    { id: 2, text: 'console.log' },
                    { id: 3, text: 'write' }
                ]
            }
        ],
        2: [
            {
                type: 'choice',
                title: 'Какое ключевое слово начинает условный оператор в Python?',
                correctOption: 0,
                options: [
                    { id: 0, text: 'if' },
                    { id: 1, text: 'when' },
                    { id: 2, text: 'case' },
                    { id: 3, text: 'cond' }
                ]
            },
            {
                type: 'input',
                title: 'Допиши оператор сравнения "равно":',
                codePrefix: 'if x ? 5:',
                correctAnswer: '==',
                placeholder: 'оператор...'
            },
            {
                type: 'input',
                title: 'Что выведет код: if 4 > 2: print("yes")',
                codePrefix: '',
                correctAnswer: 'yes',
                placeholder: 'ответ...'
            },
            {
                type: 'choice',
                title: 'Какое ключевое слово используется для альтернативной ветки условия?',
                correctOption: 2,
                options: [
                    { id: 0, text: 'elseif' },
                    { id: 1, text: 'elsif' },
                    { id: 2, text: 'elif' },
                    { id: 3, text: 'otherwise' }
                ]
            }
        ],
        3: [
            {
                type: 'choice',
                title: 'Какой цикл удобнее всего перебирает элементы коллекции?',
                correctOption: 0,
                options: [
                    { id: 0, text: 'for' },
                    { id: 1, text: 'while' },
                    { id: 2, text: 'loop' },
                    { id: 3, text: 'each' }
                ]
            },
            {
                type: 'input',
                title: 'Какая функция создаёт диапазон чисел? (вместо ?)',
                codePrefix: 'for i in ?(5):',
                correctAnswer: 'range',
                placeholder: 'функция...'
            },
            {
                type: 'choice',
                title: 'Сколько раз выполнится цикл: for i in range(3)?',
                correctOption: 2,
                options: [
                    { id: 0, text: '1' },
                    { id: 1, text: '2' },
                    { id: 2, text: '3' },
                    { id: 3, text: 'бесконечно' }
                ]
            }
        ]
    };

    const questions = allQuestions[lessonId] || [];

    if (currentQuestionIndex >= questions.length) {
        return (
            <div className="lesson-container" style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                <h1 style={{ color: '#d4a800', fontSize: '40px', marginBottom: '20px' }}>Урок пройден! 🐍</h1>
                <p style={{ color: '#777', fontSize: '20px', marginBottom: '40px' }}>
                    Вы успешно завершили Урок {lessonId} по Python.
                </p>
                <button
                    className="check-btn active"
                    style={{ padding: '15px 40px', backgroundColor: '#ffd43b', color: '#3c3c3c', boxShadow: '0 4px 0 #d4a800' }}
                    onClick={onBack}
                >
                    Вернуться к меню
                </button>
            </div>
        );
    }

    const currentQuestion = questions[currentQuestionIndex];

    const isCorrect = currentQuestion.type === 'choice'
        ? selectedOption === currentQuestion.correctOption
        : inputValue.trim().toLowerCase() === currentQuestion.correctAnswer.toLowerCase();

    const progressPercent = (currentQuestionIndex / questions.length) * 100;

    const handleSubmit = () => {
        if (currentQuestion.type === 'choice' && selectedOption === null) return;
        if (currentQuestion.type === 'input' && inputValue.trim() === '') return;
        setIsSubmitted(true);
    };

    const handleNext = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOption(null);
        setInputValue('');
        setIsSubmitted(false);
    };

    return (
        <div className="lesson-container">
            <div className="lesson-header">
                <button className="back-btn" onClick={onBack}>✖</button>
                <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${progressPercent}%`, backgroundColor: '#ffd43b' }}></div>
                </div>
            </div>

            <h2 className="lesson-title">{currentQuestion.title}</h2>

            {currentQuestion.type === 'choice' ? (
                <div className="options-grid">
                    {currentQuestion.options.map((opt) => {
                        let className = "option-card";
                        if (selectedOption === opt.id) className += " selected";
                        if (isSubmitted) {
                            if (opt.id === currentQuestion.correctOption) className += " correct";
                            else if (selectedOption === opt.id) className += " wrong";
                        }

                        return (
                            <button
                                key={opt.id}
                                className={className}
                                style={selectedOption === opt.id && !isSubmitted ? { borderColor: '#ffd43b', backgroundColor: '#fffbe6' } : {}}
                                onClick={() => !isSubmitted && setSelectedOption(opt.id)}
                            >
                                {opt.text}
                            </button>
                        );
                    })}
                </div>
            ) : (
                <div className="input-exercise">
                    <div className="code-input-container">
                        <span className="code-prefix" style={{ color: '#ffd43b' }}>{currentQuestion.codePrefix}</span>
                        <input
                            type="text"
                            className={`code-input ${isSubmitted ? (isCorrect ? 'correct' : 'wrong') : ''}`}
                            style={isSubmitted && isCorrect ? { borderBottomColor: '#ffd43b', color: '#ffd43b' } : {}}
                            placeholder={currentQuestion.placeholder}
                            value={inputValue}
                            onChange={(e) => !isSubmitted && setInputValue(e.target.value)}
                            autoFocus
                        />
                    </div>
                </div>
            )}

            <div className="lesson-footer">
                {isSubmitted && (
                    <div className={`feedback-message ${isCorrect ? 'success' : 'error'}`}>
                        {isCorrect
                            ? 'Отлично! Правильный ответ.'
                            : `Неверно. Правильный ответ: ${currentQuestion.type === 'choice'
                                ? currentQuestion.options.find((o) => o.id === currentQuestion.correctOption)?.text
                                : currentQuestion.correctAnswer}`
                        }
                    </div>
                )}

                <button
                    className={`check-btn ${(currentQuestion.type === 'choice' ? selectedOption !== null : inputValue.trim() !== '') ? 'active' : ''}`}
                    style={(isSubmitted || (currentQuestion.type === 'choice' ? selectedOption !== null : inputValue.trim() !== ''))
                        ? { backgroundColor: '#ffd43b', color: '#3c3c3c', boxShadow: '0 4px 0 #d4a800' }
                        : {}
                    }
                    onClick={isSubmitted ? handleNext : handleSubmit}
                    disabled={!isSubmitted && (currentQuestion.type === 'choice' ? selectedOption === null : inputValue.trim() === '')}
                >
                    {isSubmitted ? 'Продолжить' : 'Проверить'}
                </button>
            </div>
        </div>
    );
}
