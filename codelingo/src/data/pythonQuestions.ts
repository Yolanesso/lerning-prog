import type { Question } from '../types/lesson';

export const pythonQuestions: Record<number, Question[]> = {
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
