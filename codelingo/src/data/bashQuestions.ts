import type { Question } from '../types/lesson';

export const bashQuestions: Record<number, Question[]> = {
  1: [
    {
      type: 'choice',
      title: 'Какая команда показывает список файлов в текущей папке?',
      correctOption: 1,
      options: [
        { id: 0, text: 'cd' },
        { id: 1, text: 'ls' },
        { id: 2, text: 'mkdir' },
        { id: 3, text: 'pwd' }
      ]
    },
    {
      type: 'input',
      title: 'Допиши команду, чтобы увидеть путь к текущей директории:',
      codePrefix: '',
      correctAnswer: 'pwd',
      placeholder: 'Введите команду...'
    }
  ],
  2: [
    {
      type: 'choice',
      title: 'Как перейти в другую директорию (папку)?',
      correctOption: 0,
      options: [
        { id: 0, text: 'cd' },
        { id: 1, text: 'move' },
        { id: 2, text: 'go' },
        { id: 3, text: 'dir' }
      ]
    },
    {
      type: 'input',
      title: 'Допиши команду, чтобы создать папку с названием "work":',
      codePrefix: 'mkdir ',
      correctAnswer: 'work',
      placeholder: 'имя папки...'
    }
  ],
  3: [
    {
      type: 'input',
      title: 'Создай пустой файл с названием "script.sh":',
      codePrefix: 'touch ',
      correctAnswer: 'script.sh',
      placeholder: 'имя файла...'
    },
    {
      type: 'choice',
      title: 'Какая команда выводит содержимое файла в терминал?',
      correctOption: 3,
      options: [
        { id: 0, text: 'show' },
        { id: 1, text: 'open' },
        { id: 2, text: 'ls' },
        { id: 3, text: 'cat' }
      ]
    }
  ]
};
