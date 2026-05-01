-- minimal data, now only for python

INSERT INTO programming_languages (code)
VALUES ('python');

INSERT INTO courses (language_id, title, description)
VALUES (
  (SELECT id FROM programming_languages WHERE code = 'python'),
  'Python Basics',
  'Introductory course for learning Python syntax and simple programming concepts.'
);

INSERT INTO lessons (course_id, title, theory, sort_order, xp_reward)
VALUES
  (
    (SELECT id FROM courses WHERE title = 'Python Basics'),
    'Variables',
    'A variable stores a value. In Python you create it with the assignment operator =.',
    1,
    10
  ),
  (
    (SELECT id FROM courses WHERE title = 'Python Basics'),
    'If Statements',
    'An if statement lets a program choose what to do when a condition is true or false.',
    2,
    10
  );

INSERT INTO exercises (lesson_id, type, question, correct_answer, sort_order)
VALUES
  (
    (SELECT id FROM lessons WHERE title = 'Variables' AND course_id = (SELECT id FROM courses WHERE title = 'Python Basics')),
    'short_answer',
    'Which symbol is used to assign a value to a variable in Python?',
    '=',
    1
  ),
  (
    (SELECT id FROM lessons WHERE title = 'Variables' AND course_id = (SELECT id FROM courses WHERE title = 'Python Basics')),
    'code_output',
    'What is the output of print(2 + 3)?',
    '5',
    2
  ),
  (
    (SELECT id FROM lessons WHERE title = 'If Statements' AND course_id = (SELECT id FROM courses WHERE title = 'Python Basics')),
    'single_choice',
    'Which keyword starts a conditional statement in Python?',
    'if',
    1
  ),
  (
    (SELECT id FROM lessons WHERE title = 'If Statements' AND course_id = (SELECT id FROM courses WHERE title = 'Python Basics')),
    'code_output',
    'What is the output of: if 4 > 2: print("yes")',
    'yes',
    2
  );
