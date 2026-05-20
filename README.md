# lerning-prog
лол кек чебурек


Сейчас в проекте есть:

- фронтенд на React + TypeScript в папке `codelingo/`;
- бэкенд на Java + Spring Boot в папке `backend/`;
- база данных PostgreSQL + схема в `database/schema.sql`;
- стартовые данные по курсам в `database/dataPython.sql`, `database/dataBash.sql`, `database/dataJava.sql`;
- `docker-compose.yml`, чтобы поднять фронт + бэк + бд вместе;
- описание структуры бд в `database/database_structure.md`.

### Фронтенд

- логин / регистрация;
- выбор курса (Python / Java / Bash);
- по 3 уровня в каждом курсе;
- вопросы двух типов: выбор варианта (`choice`) и вписать ответ (`input`);
- профиль пользователя (пока с заглушкой, но уже заточен под backend);
- после прохождения урока фронт шлет прогресс на бэк;
- тесты на Bash / Java / Python уроки;

### Бэкенд

- регистрация пользователя;
- логин пользователя;
- сохранение прогресса по уроку в бд;
- мб еще чето есть я не знаю;

### База данных

Если накатить все три data-файла, будет:

- 3 языка: `python`, `bash`, `java`;
- 3 курса: `Основы Python`, `Основы Bash`, `Основы Java`;
- 9 уроков;
- 37 упражнений.

## Чего пока нет

- фронт пока **не берет вопросы из бд**, он все еще читает `src/data/*Questions.ts`;
- на бэке пока **нет нормальных GET эндпоинтов** для курсов / уроков / упражнений;
- профиль пока не грузится по-настоящему из бэка, там пока заглушка + попытка сходить в будущий endpoint;
- нет нормального деплоя на внешний сервер, пока в основном локалка / docker.

## Как запустить фронт

Нужен Node.js

```bash
cd codelingo
npm install
npm run dev
```

Откроется на `http://localhost:5173/`

Тесты:

```bash
npm test
```

Сборка:

```bash
npm run build
```


## Как запустить бэкенд

```bash
cd backend
./gradlew bootRun
```
(щас нужна Java 21)

Если бд локально на `lerning_prog`, то он попробует подключиться к ней.

## Для бд надо:

### 1. Создать базу

```sql
CREATE DATABASE lerning_prog;
```

### 2. Подключиться

```bash
psql -U postgres -d lerning_prog
```

### 3. Применить схему

```sql
\i database/schema.sql
```

### 4. Применить нужные data-файлы

```sql
\i database/dataPython.sql
\i database/dataBash.sql
\i database/dataJava.sql
```


## Как запустить все вместе через docker

```bash
docker compose up --build
```

Там:

- фронт будет на `http://localhost:3000`
- бэк будет на `http://localhost:8080`
- postgres будет на `localhost:5432`

В `database/init.sh` уже прописано что сначала идет `schema.sql`, потом все три data-файла.
