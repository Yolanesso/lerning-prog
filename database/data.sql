INSERT INTO programming_languages (code)
VALUES ('python');

INSERT INTO courses (language_id, title, description)
VALUES (
    (SELECT id FROM programming_languages WHERE code = 'python'),
    'Основы Python',
    'Введение в Python: переменные, условия и циклы'
  );

INSERT INTO lessons (course_id, title, theory, sort_order, xp_reward)
VALUES (
    (SELECT id FROM courses WHERE title = 'Основы Python'),
    'Переменные',
    NULL,
    1,
    10
  ),
  (
    (SELECT id FROM courses WHERE title = 'Основы Python'),
    'Условные операторы',
    NULL,
    2,
    10
  ),
  (
    (SELECT id FROM courses WHERE title = 'Основы Python'),
    'Циклы',
    NULL,
    3,
    10
  );

INSERT INTO exercises (lesson_id, type, payload, sort_order)
VALUES (
    (SELECT id FROM lessons WHERE title = 'Переменные' AND course_id = (SELECT id FROM courses WHERE title = 'Основы Python')),
    'input',
    '{"title": "Какой символ используется для присваивания значения переменной? (вместо ?)", "codePrefix": "x ? 5", "placeholder": "символ...", "correctAnswer": "="}'::jsonb,
    1
  ),
  (
    (SELECT id FROM lessons WHERE title = 'Переменные' AND course_id = (SELECT id FROM courses WHERE title = 'Основы Python')),
    'choice',
    '{"title": "Какой тип данных у значения 3.14 в Python?", "correctOption": 1, "options": [{"id": 0, "text": "int"}, {"id": 1, "text": "float"}, {"id": 2, "text": "str"}, {"id": 3, "text": "bool"}]}'::jsonb,
    2
  ),
  (
    (SELECT id FROM lessons WHERE title = 'Переменные' AND course_id = (SELECT id FROM courses WHERE title = 'Основы Python')),
    'input',
    '{"title": "Что выведет: print(2 + 3)?", "codePrefix": "", "placeholder": "результат...", "correctAnswer": "5"}'::jsonb,
    3
  ),
  (
    (SELECT id FROM lessons WHERE title = 'Переменные' AND course_id = (SELECT id FROM courses WHERE title = 'Основы Python')),
    'choice',
    '{"title": "Какая функция используется для вывода текста в Python?", "correctOption": 0, "options": [{"id": 0, "text": "print"}, {"id": 1, "text": "echo"}, {"id": 2, "text": "console.log"}, {"id": 3, "text": "write"}]}'::jsonb,
    4
  ),
  (
    (SELECT id FROM lessons WHERE title = 'Условные операторы' AND course_id = (SELECT id FROM courses WHERE title = 'Основы Python')),
    'choice',
    '{"title": "Какое ключевое слово начинает условный оператор в Python?", "correctOption": 0, "options": [{"id": 0, "text": "if"}, {"id": 1, "text": "when"}, {"id": 2, "text": "case"}, {"id": 3, "text": "cond"}]}'::jsonb,
    1
  ),
  (
    (SELECT id FROM lessons WHERE title = 'Условные операторы' AND course_id = (SELECT id FROM courses WHERE title = 'Основы Python')),
    'input',
    '{"title": "Допиши оператор сравнения \"равно\":", "codePrefix": "if x ? 5:", "placeholder": "оператор...", "correctAnswer": "=="}'::jsonb,
    2
  ),
  (
    (SELECT id FROM lessons WHERE title = 'Условные операторы' AND course_id = (SELECT id FROM courses WHERE title = 'Основы Python')),
    'input',
    '{"title": "Что выведет код: if 4 > 2: print(\"yes\")", "codePrefix": "", "placeholder": "ответ...", "correctAnswer": "yes"}'::jsonb,
    3
  ),
  (
    (SELECT id FROM lessons WHERE title = 'Условные операторы' AND course_id = (SELECT id FROM courses WHERE title = 'Основы Python')),
    'choice',
    '{"title": "Какое ключевое слово используется для альтернативной ветки условия?", "correctOption": 2, "options": [{"id": 0, "text": "elseif"}, {"id": 1, "text": "elsif"}, {"id": 2, "text": "elif"}, {"id": 3, "text": "otherwise"}]}'::jsonb,
    4
  ),
  (
    (SELECT id FROM lessons WHERE title = 'Циклы' AND course_id = (SELECT id FROM courses WHERE title = 'Основы Python')),
    'choice',
    '{"title": "Какой цикл удобнее всего перебирает элементы коллекции?", "correctOption": 0, "options": [{"id": 0, "text": "for"}, {"id": 1, "text": "while"}, {"id": 2, "text": "loop"}, {"id": 3, "text": "each"}]}'::jsonb,
    1
  ),
  (
    (SELECT id FROM lessons WHERE title = 'Циклы' AND course_id = (SELECT id FROM courses WHERE title = 'Основы Python')),
    'input',
    '{"title": "Какая функция создаёт диапазон чисел? (вместо ?)", "codePrefix": "for i in ?(5):", "placeholder": "функция...", "correctAnswer": "range"}'::jsonb,
    2
  ),
  (
    (SELECT id FROM lessons WHERE title = 'Циклы' AND course_id = (SELECT id FROM courses WHERE title = 'Основы Python')),
    'choice',
    '{"title": "Сколько раз выполнится цикл: for i in range(3)?", "correctOption": 2, "options": [{"id": 0, "text": "1"}, {"id": 1, "text": "2"}, {"id": 2, "text": "3"}, {"id": 3, "text": "бесконечно"}]}'::jsonb,
    3
  );
