INSERT INTO programming_languages (code)
VALUES ('bash');
INSERT INTO courses (language_id, title, description)
VALUES (
    (
      SELECT id
      FROM programming_languages
      WHERE code = 'bash'
    ),
    'Основы Bash',
    'Команды терминала и работа с файлами'
  );
INSERT INTO lessons (course_id, title, theory, sort_order, xp_reward)
VALUES (
    (
      SELECT id
      FROM courses
      WHERE title = 'Основы Bash'
    ),
    'Просмотр и навигация',
    NULL,
    1,
    10
  ),
  (
    (
      SELECT id
      FROM courses
      WHERE title = 'Основы Bash'
    ),
    'Перемещение и создание папок',
    NULL,
    2,
    10
  ),
  (
    (
      SELECT id
      FROM courses
      WHERE title = 'Основы Bash'
    ),
    'Файлы',
    NULL,
    3,
    10
  );
INSERT INTO exercises (lesson_id, type, payload, sort_order)
VALUES (
    (
      SELECT id
      FROM lessons
      WHERE title = 'Просмотр и навигация'
        AND course_id = (
          SELECT id
          FROM courses
          WHERE title = 'Основы Bash'
        )
    ),
    'choice',
    '{"title": "Какая команда показывает список файлов в текущей папке?", "correctOption": 1, "options": [{"id": 0, "text": "cd"}, {"id": 1, "text": "ls"}, {"id": 2, "text": "mkdir"}, {"id": 3, "text": "pwd"}]}'::jsonb,
    1
  ),
  (
    (
      SELECT id
      FROM lessons
      WHERE title = 'Просмотр и навигация'
        AND course_id = (
          SELECT id
          FROM courses
          WHERE title = 'Основы Bash'
        )
    ),
    'input',
    '{"title": "Допиши команду, чтобы увидеть путь к текущей директории:", "codePrefix": "", "placeholder": "Введите команду...", "correctAnswer": "pwd"}'::jsonb,
    2
  ),
  (
    (
      SELECT id
      FROM lessons
      WHERE title = 'Перемещение и создание папок'
        AND course_id = (
          SELECT id
          FROM courses
          WHERE title = 'Основы Bash'
        )
    ),
    'choice',
    '{"title": "Как перейти в другую директорию (папку)?", "correctOption": 0, "options": [{"id": 0, "text": "cd"}, {"id": 1, "text": "move"}, {"id": 2, "text": "go"}, {"id": 3, "text": "dir"}]}'::jsonb,
    1
  ),
  (
    (
      SELECT id
      FROM lessons
      WHERE title = 'Перемещение и создание папок'
        AND course_id = (
          SELECT id
          FROM courses
          WHERE title = 'Основы Bash'
        )
    ),
    'input',
    '{"title": "Допиши команду, чтобы создать папку с названием \"work\":", "codePrefix": "mkdir ", "placeholder": "имя папки...", "correctAnswer": "work"}'::jsonb,
    2
  ),
  (
    (
      SELECT id
      FROM lessons
      WHERE title = 'Файлы'
        AND course_id = (
          SELECT id
          FROM courses
          WHERE title = 'Основы Bash'
        )
    ),
    'input',
    '{"title": "Создай пустой файл с названием \"script.sh\":", "codePrefix": "touch ", "placeholder": "имя файла...", "correctAnswer": "script.sh"}'::jsonb,
    1
  ),
  (
    (
      SELECT id
      FROM lessons
      WHERE title = 'Файлы'
        AND course_id = (
          SELECT id
          FROM courses
          WHERE title = 'Основы Bash'
        )
    ),
    'choice',
    '{"title": "Какая команда выводит содержимое файла в терминал?", "correctOption": 3, "options": [{"id": 0, "text": "show"}, {"id": 1, "text": "open"}, {"id": 2, "text": "ls"}, {"id": 3, "text": "cat"}]}'::jsonb,
    2
  );
