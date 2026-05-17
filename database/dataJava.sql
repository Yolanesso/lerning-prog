INSERT INTO programming_languages (code)
VALUES ('java');
INSERT INTO courses (language_id, title, description)
VALUES (
    (
      SELECT id
      FROM programming_languages
      WHERE code = 'java'
    ),
    'Основы Java',
    'Синтаксис, циклы и базовые конструкции Java'
  );
INSERT INTO lessons (course_id, title, theory, sort_order, xp_reward)
VALUES (
    (
      SELECT id
      FROM courses
      WHERE title = 'Основы Java'
    ),
    'Основы синтаксиса',
    NULL,
    1,
    10
  ),
  (
    (
      SELECT id
      FROM courses
      WHERE title = 'Основы Java'
    ),
    'Циклы и ООП',
    NULL,
    2,
    10
  ),
  (
    (
      SELECT id
      FROM courses
      WHERE title = 'Основы Java'
    ),
    'Классы и продвинутое',
    NULL,
    3,
    10
  );
INSERT INTO exercises (lesson_id, type, payload, sort_order)
VALUES (
    (
      SELECT id
      FROM lessons
      WHERE title = 'Основы синтаксиса'
        AND course_id = (
          SELECT id
          FROM courses
          WHERE title = 'Основы Java'
        )
    ),
    'choice',
    '{"title": "Какой тип данных используется для целых чисел в Java?", "correctOption": 2, "options": [{"id": 0, "text": "String"}, {"id": 1, "text": "double"}, {"id": 2, "text": "int"}, {"id": 3, "text": "boolean"}]}'::jsonb,
    1
  ),
  (
    (
      SELECT id
      FROM lessons
      WHERE title = 'Основы синтаксиса'
        AND course_id = (
          SELECT id
          FROM courses
          WHERE title = 'Основы Java'
        )
    ),
    'input',
    '{"title": "Допиши команду для вывода текста в консоль:", "codePrefix": "System.out.", "placeholder": "метод...", "correctAnswer": "println"}'::jsonb,
    2
  ),
  (
    (
      SELECT id
      FROM lessons
      WHERE title = 'Основы синтаксиса'
        AND course_id = (
          SELECT id
          FROM courses
          WHERE title = 'Основы Java'
        )
    ),
    'choice',
    '{"title": "Как называется входной главный метод в котором начинается выполнение программы?", "correctOption": 1, "options": [{"id": 0, "text": "glavniyMethod()"}, {"id": 1, "text": "main()"}, {"id": 2, "text": "makefile()"}, {"id": 3, "text": "runner()"}]}'::jsonb,
    3
  ),
  (
    (
      SELECT id
      FROM lessons
      WHERE title = 'Основы синтаксиса'
        AND course_id = (
          SELECT id
          FROM courses
          WHERE title = 'Основы Java'
        )
    ),
    'input',
    '{"title": "Какой тип данных хранит True || False?", "codePrefix": "*******  flag = true;", "placeholder": "тип данных?", "correctAnswer": "boolean"}'::jsonb,
    4
  ),
  (
    (
      SELECT id
      FROM lessons
      WHERE title = 'Основы синтаксиса'
        AND course_id = (
          SELECT id
          FROM courses
          WHERE title = 'Основы Java'
        )
    ),
    'choice',
    '{"title": "Как сделать комментарий/закоментировать строчку кода в джаве?", "correctOption": 3, "options": [{"id": 0, "text": "#* int a = 10;"}, {"id": 1, "text": "./ String name;"}, {"id": 2, "text": "$$ switch (choice) {}"}, {"id": 3, "text": "// List list = new ArrayList"}]}'::jsonb,
    5
  ),
  (
    (
      SELECT id
      FROM lessons
      WHERE title = 'Основы синтаксиса'
        AND course_id = (
          SELECT id
          FROM courses
          WHERE title = 'Основы Java'
        )
    ),
    'input',
    '{"title": "Какой написать оператор присвоения? (Вместо ?)", "codePrefix": "int year ? 19;", "placeholder": "символ...", "correctAnswer": "="}'::jsonb,
    6
  ),
  (
    (
      SELECT id
      FROM lessons
      WHERE title = 'Основы синтаксиса'
        AND course_id = (
          SELECT id
          FROM courses
          WHERE title = 'Основы Java'
        )
    ),
    'input',
    '{"title": "Допиши правильный условный оператор, чтобы код вывел сообщение", "codePrefix": "** (x < 0){\n sout(\"Минус\");}\n", "placeholder": "оператор?", "correctAnswer": "if"}'::jsonb,
    7
  ),
  (
    (
      SELECT id
      FROM lessons
      WHERE title = 'Циклы и ООП'
        AND course_id = (
          SELECT id
          FROM courses
          WHERE title = 'Основы Java'
        )
    ),
    'choice',
    '{"title": "Какой цикл лучше всего подходит, когда известно количество итераций?", "correctOption": 0, "options": [{"id": 0, "text": "for"}, {"id": 1, "text": "while"}, {"id": 2, "text": "do-while"}, {"id": 3, "text": "if"}]}'::jsonb,
    1
  ),
  (
    (
      SELECT id
      FROM lessons
      WHERE title = 'Циклы и ООП'
        AND course_id = (
          SELECT id
          FROM courses
          WHERE title = 'Основы Java'
        )
    ),
    'input',
    '{"title": "Как проверить равенство двух чисел x и y в условии?", "codePrefix": "if (x ", "placeholder": "оператор и переменная...", "correctAnswer": "== y"}'::jsonb,
    2
  ),
  (
    (
      SELECT id
      FROM lessons
      WHERE title = 'Циклы и ООП'
        AND course_id = (
          SELECT id
          FROM courses
          WHERE title = 'Основы Java'
        )
    ),
    'choice',
    '{"title": "Как сделать бесконечный цикл?", "correctOption": 3, "options": [{"id": 0, "text": "try a = infinity"}, {"id": 1, "text": "throw new = infinity"}, {"id": 2, "text": "infinity++;"}, {"id": 3, "text": "while (true) {}"}]}'::jsonb,
    3
  ),
  (
    (
      SELECT id
      FROM lessons
      WHERE title = 'Циклы и ООП'
        AND course_id = (
          SELECT id
          FROM courses
          WHERE title = 'Основы Java'
        )
    ),
    'choice',
    '{"title": "Абстрактный класс это?...", "correctOption": 1, "options": [{"id": 0, "text": "это класс в котором происходит что то рандомное"}, {"id": 1, "text": "это класс для создания обобщённых конструкций, общие характеристики"}, {"id": 2, "text": "класс для перечислений констант"}, {"id": 3, "text": "не содержит наследование, конструкторы, не является шаблоном"}]}'::jsonb,
    4
  ),
  (
    (
      SELECT id
      FROM lessons
      WHERE title = 'Циклы и ООП'
        AND course_id = (
          SELECT id
          FROM courses
          WHERE title = 'Основы Java'
        )
    ),
    'input',
    '{"title": "Как создать массив из 4 целых чисел на джава?", "codePrefix": "int[] numbers = new int[?]", "placeholder": "число значений", "correctAnswer": "4"}'::jsonb,
    5
  ),
  (
    (
      SELECT id
      FROM lessons
      WHERE title = 'Циклы и ООП'
        AND course_id = (
          SELECT id
          FROM courses
          WHERE title = 'Основы Java'
        )
    ),
    'choice',
    '{"title": "При каком условии два соседних элемента (arr[i] и arr[i+1]) поменяются местами при сортировке по возрастанию?", "correctOption": 2, "options": [{"id": 0, "text": "Если они равны (arr[i] == arr[i+1])"}, {"id": 1, "text": "Если левый элемент меньше правого (arr[i] < arr[i+1])"}, {"id": 2, "text": "Если левый элемент больше правого (arr[i] > arr[i+1])"}, {"id": 3, "text": "Они меняются местами всегда, без всяких условий"}]}'::jsonb,
    6
  ),
  (
    (
      SELECT id
      FROM lessons
      WHERE title = 'Циклы и ООП'
        AND course_id = (
          SELECT id
          FROM courses
          WHERE title = 'Основы Java'
        )
    ),
    'choice',
    '{"title": "Выбери правильные признаки ООП", "correctOption": 3, "options": [{"id": 0, "text": "инкапсуляция, полиморфизм, статика, публичные все классы"}, {"id": 1, "text": "графы, абстракция, инкапсуляция"}, {"id": 2, "text": "полиморфизм, наследования, абстракция, динамика"}, {"id": 3, "text": "полиморфизм, наследование, абстракция, инкапсуляция"}]}'::jsonb,
    7
  ),
  (
    (
      SELECT id
      FROM lessons
      WHERE title = 'Классы и продвинутое'
        AND course_id = (
          SELECT id
          FROM courses
          WHERE title = 'Основы Java'
        )
    ),
    'input',
    '{"title": "С помощью какого ключевого слова создается объект класса?", "codePrefix": "MyClass obj = ", "placeholder": "keyword...", "correctAnswer": "new"}'::jsonb,
    1
  ),
  (
    (
      SELECT id
      FROM lessons
      WHERE title = 'Классы и продвинутое'
        AND course_id = (
          SELECT id
          FROM courses
          WHERE title = 'Основы Java'
        )
    ),
    'choice',
    '{"title": "Как называется конструктор класса?", "correctOption": 1, "options": [{"id": 0, "text": "constructor"}, {"id": 1, "text": "Имя совпадает с именем класса"}, {"id": 2, "text": "init"}, {"id": 3, "text": "main"}]}'::jsonb,
    2
  ),
  (
    (
      SELECT id
      FROM lessons
      WHERE title = 'Классы и продвинутое'
        AND course_id = (
          SELECT id
          FROM courses
          WHERE title = 'Основы Java'
        )
    ),
    'choice',
    '{"title": "Лямбда выражение это?", "correctOption": 2, "options": [{"id": 0, "text": "выражение которое используется для расшифровки греческих символов"}, {"id": 1, "text": "вид цикла работающий быстрее for, for-ech"}, {"id": 2, "text": "краткий способ записать функцию (метод) без имени, которую можно передавать как аргумент"}, {"id": 3, "text": "отключаем ошибки в компиляции"}]}'::jsonb,
    3
  ),
  (
    (
      SELECT id
      FROM lessons
      WHERE title = 'Классы и продвинутое'
        AND course_id = (
          SELECT id
          FROM courses
          WHERE title = 'Основы Java'
        )
    ),
    'choice',
    '{"title": "Базовые классы для работы с символьными файловыми потоками?", "correctOption": 1, "options": [{"id": 0, "text": "Text text = new text"}, {"id": 1, "text": "FileWriter / FileReader"}, {"id": 2, "text": "AutoTextWriterReader"}, {"id": 3, "text": "такого не существует"}]}'::jsonb,
    4
  ),
  (
    (
      SELECT id
      FROM lessons
      WHERE title = 'Классы и продвинутое'
        AND course_id = (
          SELECT id
          FROM courses
          WHERE title = 'Основы Java'
        )
    ),
    'input',
    '{"title": "Какое ключевое слово делает переменную константой?", "codePrefix": "***** double PI = 3.14159;", "placeholder": "слово?", "correctAnswer": "final"}'::jsonb,
    5
  ),
  (
    (
      SELECT id
      FROM lessons
      WHERE title = 'Классы и продвинутое'
        AND course_id = (
          SELECT id
          FROM courses
          WHERE title = 'Основы Java'
        )
    ),
    'choice',
    '{"title": "Какова главная задача Сборщика мусора (Garbage Collector) в Java?", "correctOption": 1, "options": [{"id": 0, "text": "удалять неиспользуемые файлы `.class` с жесткого диска для экономии места"}, {"id": 1, "text": "автоматически находить и удалять объекты в куче (Heap), на которые больше нет ссылок"}, {"id": 2, "text": "закрывать открытые консольные окна и завершать работу зависших программ"}, {"id": 3, "text": "шифровать исходный код программы перед пушем в репозиторий"}]}'::jsonb,
    6
  );
