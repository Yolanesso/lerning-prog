import { useState } from 'react';
import './BashLesson.css';

interface JavaLessonProps {
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

export function JavaLesson({ lessonId, onBack }: JavaLessonProps) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [inputValue, setInputValue] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const allQuestions: Record<number, Question[]> = {
        1: [
            {
                type: 'choice',
                title: 'Какой тип данных используется для целых чисел в Java?',
                correctOption: 2,
                options: [
                    { id: 0, text: 'String' },
                    { id: 1, text: 'double' },
                    { id: 2, text: 'int' },
                    { id: 3, text: 'boolean' }
                ]
            },
            {
                type: 'input',
                title: 'Допиши команду для вывода текста в консоль:',
                codePrefix: 'System.out.',
                correctAnswer: 'println',
                placeholder: 'метод...'
            },
            {
                type: "choice",
                title: 'Как называется входной главный метод в котором начинается выполнение программы?',
                correctOption: 1,
                options: [
                    {id: 0, text: 'glavniyMethod()'},
                    {id: 1, text: 'main()'},
                    {id: 2, text: 'makefile()'},
                    {id: 3, text: 'runner()'}
                ]
            },
            {
                type: 'input',
                title: 'Какой тип данных хранит True || False?',
                codePrefix: '*******  flag = true;',
                correctAnswer: 'boolean',
                placeholder: 'тип данных?'
            },
            {
                type: 'choice',
                title: 'Как сделать комментарий/закоментировать строчку кода в джаве?',
                correctOption: 3,
                options: [
                    {id: 0, text: '#* int a = 10;'},
                    {id: 1, text: './ String name;'},
                    {id: 2, text: '$$ switch (choice) {}'},
                    {id: 3, text: '// List list = new ArrayList'}
                ]
            },
            {
                type: 'input',
                title: 'Какой написать оператор присвоения? (Вместо ?)',
                codePrefix: 'int year ? 19;',
                correctAnswer: '=',
                placeholder: 'символ...'
            },
        {
            type: 'input',
            title: 'Допиши правильный условный оператор, чтобы код вывел сообщение',
            codePrefix: '** (x < 0){\n sout("Минус");}\n',
            correctAnswer: 'if',
            placeholder: 'оператор?'
        },
        ],
        2: [
            {
                type: 'choice',
                title: 'Какой цикл лучше всего подходит, когда известно количество итераций?',
                correctOption: 0,
                options: [
                    { id: 0, text: 'for' },
                    { id: 1, text: 'while' },
                    { id: 2, text: 'do-while' },
                    { id: 3, text: 'if' }
                ]
            },
            {
                type: 'input',
                title: 'Как проверить равенство двух чисел x и y в условии?',
                codePrefix: 'if (x ',
                correctAnswer: '== y',
                placeholder: 'оператор и переменная...'
            },
            {
                type: 'choice',
                title: 'Как сделать бесконечный цикл?',
                correctOption: 3,
                options: [
                    {id: 0, text: 'try a = infinity'},
                    {id: 1, text: 'throw new = infinity'},
                    {id: 2, text: 'infinity++;'},
                    {id: 3, text: 'while (true) {}'}
                ]
            },
            {
                type: 'choice',
                title: 'Абстрактный класс это?...',
                correctOption: 1,
                options: [
                    {id: 0, text: 'это класс в котором происходит что то рандомное'},
                    {id: 1, text: 'это класс для создания обобщённых конструкций, общие характеристики'},
                    {id: 2, text: 'класс для перечислений констант'},
                    {id: 3, text: 'не содержит наследование, конструкторы, не является шаблоном'}
                ]
            },
            {
                type: 'input',
                title: 'Как создать массив из 4 целых чисел на джава?',
                codePrefix: 'int[] numbers = new int[?]',
                correctAnswer: '4',
                placeholder: 'число значений'
            },
            {
                type: 'choice',
                title: 'При каком условии два соседних элемента (arr[i] и arr[i+1]) поменяются местами при сортировке по возрастанию?',
                correctOption: 2,
                options: [
                    { id: 0, text: 'Если они равны (arr[i] == arr[i+1])' },
                    { id: 1, text: 'Если левый элемент меньше правого (arr[i] < arr[i+1])' },
                    { id: 2, text: 'Если левый элемент больше правого (arr[i] > arr[i+1])' },
                    { id: 3, text: 'Они меняются местами всегда, без всяких условий' }
                ]
            },
            {
                type: 'choice',
                title: 'Выбери правильные признаки ООП',
                correctOption: 3,
                options: [
                    {id: 0, text: 'инкапсуляция, полиморфизм, статика, публичные все классы'},
                    {id: 1, text: 'графы, абстракция, инкапсуляция'},
                    {id:2 , text: 'полиморфизм, наследования, абстракция, динамика'},
                    {id: 3, text: 'полиморфизм, наследование, абстракция, инкапсуляция'}
                ]
            }


        ],
        3: [
            {
                type: 'input',
                title: 'С помощью какого ключевого слова создается объект класса?',
                codePrefix: 'MyClass obj = ',
                correctAnswer: 'new',
                placeholder: 'keyword...'
            },
            {
                type: 'choice',
                title: 'Как называется конструктор класса?',
                correctOption: 1,
                options: [
                    { id: 0, text: 'constructor' },
                    { id: 1, text: 'Имя совпадает с именем класса' },
                    { id: 2, text: 'init' },
                    { id: 3, text: 'main' }
                ]
            },
            {
                type: 'choice',
                title: 'Лямбда выражение это?',
                correctOption: 2,
                options: [
                    {id: 0, text: 'выражение которое используется для расшифровки греческих символов'},
                    {id: 1, text: 'вид цикла работающий быстрее for, for-ech'},
                    {id: 2, text: 'краткий способ записать функцию (метод) без имени, которую можно передавать как аргумент'},
                    {id: 3, text: 'отключаем ошибки в компиляции'}
                ]
            },
            {
                type: 'choice',
                title: 'Базовые классы для работы с символьными файловыми потоками?',
                correctOption: 1,
                options: [
                    {id: 0, text: 'Text text = new text'},
                    {id: 1, text: 'FileWriter / FileReader'},
                    {id: 2, text: 'AutoTextWriterReader'},
                    {id:3, text: 'такого не существует'}
                ]
            },
            {
                type: 'input',
                title: 'Какое ключевое слово делает переменную константой?',
                codePrefix: '***** double PI = 3.14159;',
                correctAnswer: 'final',
                placeholder: 'слово?'
            },
            {
                type: 'choice',
                title: 'Какова главная задача Сборщика мусора (Garbage Collector) в Java?',
                correctOption: 1,
                options: [
                    { id: 0, text: 'удалять неиспользуемые файлы `.class` с жесткого диска для экономии места' },
                    { id: 1, text: 'автоматически находить и удалять объекты в куче (Heap), на которые больше нет ссылок' },
                    { id: 2, text: 'закрывать открытые консольные окна и завершать работу зависших программ' },
                    { id: 3, text: 'шифровать исходный код программы перед пушем в репозиторий' }
                ]
            }
        ]
    };

    const questions = allQuestions[lessonId] || [];

    if (currentQuestionIndex >= questions.length) {
        return (
            <div className="lesson-container" style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                <h1 style={{ color: '#f39c12', fontSize: '40px', marginBottom: '20px' }}>Урок пройден! ☕</h1>
                <p style={{ color: '#777', fontSize: '20px', marginBottom: '40px' }}>
                    Вы успешно завершили Урок {lessonId} по Java.
                </p>
                <button
                    className="check-btn active"
                    style={{ padding: '15px 40px', backgroundColor: '#f39c12', boxShadow: '0 4px 0 #e67e22' }}
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
                    <div className="progress-fill" style={{ width: `${progressPercent}%`, backgroundColor: '#f39c12' }}></div>
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
                                style={selectedOption === opt.id && !isSubmitted ? { borderColor: '#f39c12', backgroundColor: '#fff5e6' } : {}}
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
                        <span className="code-prefix" style={{ color: '#f39c12' }}>{currentQuestion.codePrefix}</span>
                        <input
                            type="text"
                            className={`code-input ${isSubmitted ? (isCorrect ? 'correct' : 'wrong') : ''}`}
                            style={isSubmitted && isCorrect ? { borderBottomColor: '#f39c12', color: '#f39c12' } : {}}
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
                    style={ (isSubmitted || (currentQuestion.type === 'choice' ? selectedOption !== null : inputValue.trim() !== ''))
                        ? { backgroundColor: '#f39c12', color: 'white', boxShadow: '0 4px 0 #e67e22' }
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