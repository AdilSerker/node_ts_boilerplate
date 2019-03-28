## Технологии

* TypeScript
* Express
* Routing Controllers
* TypeORM
* TypeDi

- PostgreSQL
- Config Builder
- ElasticSearch

## Создание базы данных:

```sh
psql -c "create user db_user with password 'db_pass'" postgres
psql -c "createdb db_name;" postgres
```
## Разворачивание проекта

Установка зависимостей

```sh
yarn install
```
Сборка проекта

```sh
yarn build
```

Запуск миграций

```sh
yarn migrate
```

Запуск приложения
```sh
yarn start
```

## Команды

- Миграции

```sh
yarn migrate # накатить миграции

yarn migrate-undo # откатить миграции

yarn create-migration MIGRATION_NAME # генерирует новый файл миграции, должен запускаться из той директории, где нужно сгенерировать файл миграции
```

- Разработка
```sh
yarn build-dev # запуск компиляции в режиме --watch

yarn watch # запуск сервера в режиме --watch
```