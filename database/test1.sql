SELECT * FROM courses JOIN programming_languages ON courses.language_id = programming_languages.id
WHERE programming_languages.code = 'python';

SELECT * FROM lessons JOIN courses ON lessons.course_id = courses.id
WHERE courses.title = 'Python Basics' ORDER BY lessons.sort_order;

SELECT * FROM exercises JOIN lessons ON exercises.lesson_id = lessons.id
WHERE lessons.title = 'Variables' ORDER BY exercises.sort_order;

SELECT * FROM exercises JOIN lessons ON exercises.lesson_id = lessons.id
WHERE lessons.title = 'If Statements' ORDER BY exercises.sort_order;

SELECT * FROM users; --to show now is empty, сверху в синтаксисе думаю вам не надо разбираться, хотя там и разбираться не так сложн)0
