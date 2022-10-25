# Настройка окружение для JS

По материалам курса:  https://ru.hexlet.io/courses/js-setup-environment

Поддержка компиляторами фич
- https://kangax.github.io/compat-table/es6/
- https://caniuse.com/es6 


## Node.js - интерпретатор

`node`


## npm - пакетный менеджер

npm (node package manager

## Создание пакета

```bash
mkdir hexlet-hello-world
# Переход внутрь директории
cd hexlet-hello-world

# Инициализация npm-пакета
# init – означает initialization
npm init
```

Вручню добавляется строка в описание пакета
```
 "type": "module",
 ```

## Зависимости и внешние библиотеки

## Lodash

Установка
```bash
# Обязательно выполнять в корне проекта
# только тогда lodash будет лежать в правильном месте
npm install lodash
```
Эта команда выполняет три действия. 

1. Сначала она скачивает пакет из NPM-хранилища в директорию node_modules в корне проекта. Если этой директории не было, то она автоматически создается.
2. Затем она добавляет запись в package.json о том, что пакет lodash стал зависимостью.
3. И наконец, создает или обновляет файл package-lock.json.

Импорт

```js
// По общепринятому соглашению, lodash импортируется под именем _
import _ from "lodash";

// Так будет происходить поиск файла lodash.js в текущей директории
import _ from "./lodash.js";

// Так импортируется код из пакета
import _ from "lodash";
```

Зависимости в package.json добавляются под ключом dependencies. Здесь указаны все пакеты, используемые в проекте и не входящие в стандартную библиотеку.
```
"dependencies": {
  "lodash": "^4.17.15"
```

Если Node.js встречает подобный импорт:

```import React from "react";```
Происходит попытка импортировать модуль из node_modules/react/...

Файл package-lock.json содержит описание всех пакетов, которые будут поставлены, включая все их зависимости с указанием конкретных версий.
При наличии package-lock.json в проекте, установку зависимостей рекомендуется выполнять командой ```npm ci```.

После скачивания пакета с гита:
```bash
npm ci
``` 

## Установка зависимостей

Зависимости для разработки всегда устанавливаются при запуске
```
npm install
```

## Для разработки

```bash
# ключ --save-dev
npm install --save-dev jest
```

## Для продакшена

```bash
# зависимости из devDependencies устанавливаться не будут

npm install --production
```

## Для деплоя 

Когда же проект собирается для деплоя на сервер (например, через Github Actions), то флаг нужно применять с npm ci:

```bash
# флаг --production
npm ci --production
```

## Установка в глобальное окружение

```bash
# ключ -g
npm install -g sloc
```

## Полезные пакеты

- lodash
- sloc
- prettier

Prettier:
```bash
#  установка
npm install --save-dev prettier 

# настройка способа вызова
npx prettier --write . 

# запуск анализатора 
prettier -- write .
 
```


## Линтеры

Установка в проект
```bash
# установка
npm install --save-dev eslint
    
# настройка
npx eslint --init

# инициализация
npx eslint .

# или так для фиксинга проблем
npx eslint --fix .
```