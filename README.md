# gulp-scss-starter

![License](https://img.shields.io/github/license/andreyalexeich/gulp-scss-starter)
![GitHub stars](https://img.shields.io/github/stars/andreyalexeich/gulp-scss-starter.svg?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/andreyalexeich/gulp-scss-starter.svg?style=social)<br>
<a href="https://qiwi.com/n/ANDREYALEXEICH"><img src="https://img.shields.io/badge/%D0%97%D0%B0%D0%B4%D0%BE%D0%BD%D0%B0%D1%82%D1%8C%20%D0%BD%D0%B0%20%D0%BF%D0%B8%D0%B2%D0%BE-Qiwi-orange?style=for-the-badge&logo=qiwi"></a>


## :fire: Особенности
* именование классов по [БЭМ](https://ru.bem.info/)
* используется БЭМ-структура
* используется препроцессор [SCSS](https://sass-lang.com/)
* используется транспайлер [Babel](https://babeljs.io/) для поддержки современного JavaScript (ES6) в браузерах
* используется [Webpack](https://webpack.js.org/) для сборки JavaScript-модулей
* используется жёсткий кодгайд
* используется проверка кода на ошибки перед коммитом

## :hammer_and_wrench: Установка
* установите [NodeJS](https://nodejs.org/en/)
* установите глобально:
    * [Yarn](https://yarnpkg.com/getting-started): ```npm i -g yarn```
    * [Gulp](https://gulpjs.com/): ```npm i -g gulp```
    * [Bem Tools](https://www.npmjs.com/package/bem-tools-core): ```npm i -g bem-tools-core```
* скачайте сборку с помощью [Git](https://git-scm.com/downloads): ```git clone https://github.com/andreyalexeich/gulp-scss-starter.git```
* перейдите в скачанную папку со сборкой: ```cd gulp-scss-starter```
* введите ```yarn set version berry```
* скачайте необходимые зависимости: ```yarn```
* чтобы начать работу, введите команду: ```yarn run dev``` (режим разработки)
* чтобы собрать проект, введите команду ```yarn run build``` (режим сборки)

Если вы всё сделали правильно, у вас должен открыться браузер с локальным сервером. Режим сборки предполагает оптимизацию проекта: сжатие изображений, минифицирование CSS и JS-файлов для загрузки на сервер.

## :open_file_folder: Файловая структура

```
gulp-scss-starter
├── dist
├── gulp-tasks
├── src
│   ├── blocks
│   ├── fonts
│   ├── img
│   ├── js
│   ├── styles
│   ├── views
│   └── .htaccess
├── gulpfile.babel.js
├── webpack.config.js
├── package.json
├── .yarnrc.yml
├── .babelrc.js
├── .bemrc.js
├── .eslintrc.json
├── .stylelintrc
├── .stylelintignore
└── .gitignore
```

* Корень папки:
    * ```.babelrc.js``` — настройки Babel
    * ```.bemrc.js``` — настройки БЭМ
    * ```.eslintrc.json``` — настройки ESLint
    * ```.gitignore``` – запрет на отслеживание файлов Git'ом
    * ```.stylelintrc``` — настройки Stylelint
    * ```.stylelintignore``` – запрет на отслеживание файлов Stylelint'ом
    * ```.yarnrc.yml``` – настройка Yarn
    * ```gulpfile.babel.js``` — настройки Gulp
    * ```webpack.config.js``` — настройки Webpack
    * ```package.json``` — список зависимостей
* Папка ```src``` - используется во время разработки:
    * БЭМ-блоки: ```src/blocks```
    * шрифты: ```src/fonts```
    * изображения: ```src/img```
    * JS-файлы: ```src/js```
    * страницы сайта: ```src/views/pages```
    * SCSS-файлы: ```src/styles```
    * HTML-файлы: ```src/views```
    * конфигурационный файл веб-сервера Apache с настройками [gzip](https://habr.com/ru/post/221849/) (сжатие без потерь): ```src/.htaccess```
* Папка ```dist``` - папка, из которой запускается локальный сервер для разработки (при запуске ```yarn run dev```)
* Папка ```gulp-tasks``` - папка с Gulp-тасками

## :keyboard: Команды
* ```yarn run lint:styles``` - проверить SCSS-файлы. Для VSCode необходимо установить [плагин](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint). Для WebStorm
или PHPStorm необходимо включить Stylelint в ```Languages & Frameworks - Style Sheets - Stylelint```
* ```yarn run dev``` - запуск сервера для разработки проекта
* ```yarn run build``` - собрать проект с оптимизацией без запуска сервера
* ```yarn run build:views``` - собрать HTML-файлы
* ```yarn run build:styles``` - скомпилировать SCSS-файлы
* ```yarn run build:scripts``` - собрать JS-файлы
* ```yarn run build:images``` - собрать изображения
* ```yarn run build:webp``` - сконвертировать изображения в формат ```.webp```
* ```yarn run build:sprites```- собрать спрайты
* ```yarn run build:fonts``` - собрать шрифты
* ```yarn run build:favicons``` - собрать фавиконки
* ```yarn run build:gzip``` - собрать конфигурацию Apache
* ```yarn run bem-m``` - добавить БЭМ-блок
* ```yarn run lint:styles --fix``` - исправить ошибки в SCSS-файлах согласно настройкам Stylelint
* ```yarn run lint:scripts``` - проверить JS-файлы
* ```yarn run lint:scripts --fix``` - исправить ошибки в JS-файлах согласно настройкам ESLint

## :bulb: Рекомендации по использованию
### Компонентный подход к разработке сайтов
* каждый БЭМ-блок имеет свою папку внутри ```src/blocks/modules```
* папка одного БЭМ-блока содержит в себе один HTML-файл, один SCSS-файл и один JS-файл (если у блока используется скрипт)
    * HTML-файл блока импортируется в файл ```src/views/index.html``` (или в необходимый файл страницы, откуда будет вызываться блок)
    * SCSS-файл блока импортируется в файл ```src/blocks/modules/_modules.scss```
    * JS-файл блока импортируется в ```src/js/import/modules.js```

Пример структуры папки с БЭМ-блоком:
```
blocks
├── modules
│   ├──header
│   │   ├── header.html
│   │   ├── header.js
│   │   ├── header.scss
```

Чтобы вручную не создавать соответствующие папку и файлы, достаточно в консоли прописать следующую команду: ```yarn run bem-m my-block``` - для создания БЭМ-блока в ```src/block/modules```, где ```my-block``` - имя БЭМ-блока (после создания нужно удалить содержимое js-файла БЭМ-блока).

### Страницы проекта
* страницы проекта находятся в папке ```src/views/pages```
    * главная страница: ```src/views/index.html```

### Шрифты
* шрифты находятся в папке ```src/fonts```
    * используйте [форматы](https://caniuse.com/#search=woff) ```.woff``` и ```.woff2```
    * шрифты подключаются в файл ```src/styles/base/_fonts.scss```
    * сконвертировать локальные шрифты можно с помощью [данного сервиса](https://onlinefontconverter.com/)

### Изображения
* изображения находятся в папке ```src/img```
    * изображения автоматически конвертируются в формат ```.webp```. Подробная информация по использованию [тут](https://vk.com/@vk_it-webp)
    * изображение для генерации фавиконок должно находиться в папке ```src/img/favicon``` и иметь размер не менее ```1024px x 1024px```

### SVG-спрайты
Для создания спрайтов изображения ```.svg``` должны находиться в папке ```src/img/sprites```. Например, у нас есть файлы ```icon-1.svg```, ```icon-2.svg``` и ```icon-3.svg```, и мы должны обратиться к ```icon-2.svg```. Для этого в HTML нужно воспользоваться тегом ```<use>```:
```html
<svg>
    <use xlink:href="img/sprites/sprite.svg#logo"></use>
</svg>
```
Изменить стили svg-иконки из спрайта в CSS:
```css
svg use {
    fill: red;
}
```
Бывает такая ситуация, когда стили иконки поменять не получается. Это связано с тем, что при экспорте из Figma в svg добавляется лишний код. Например:
```html
<svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.90918 4.04542L13.091 9.54088L4.90918 14.9545L4.90918 4.04542Z" fill="#1B1B1D"/>
</svg>
```
Нужно удалить ```fill="none"``` и ```fill="#1B1B1D"```. Должно получиться так:
```html
<svg width="18" height="19" viewBox="0 0 18 19" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.90918 4.04542L13.091 9.54088L4.90918 14.9545L4.90918 4.04542Z"/>
</svg> 
```

### Сторонние библиотеки
* все сторонние библиотеки устанавливаются в папку ```node_modules```
    * для их загрузки воспользуйтеcь командой ```yarn add package_name``` (например, ```yarn add jquery```)
    * для подключения JS-файлов библиотек импортируйте их в самом начале JS-файла БЭМ-блока (то есть тот БЭМ-блок, который использует скрипт), например:
    ```javascript
    import $ from "jquery";
    ```
    * для подключения стилевых файлов библиотек импортируйте их в файл ```src/styles/vendor/_libs.scss```
    * JS-файлы и стилевые файлы библиотек самостоятельно изменять нельзя

## :point_right: Нужен SCSS + Pug?
Используйте [эту](https://github.com/andreyalexeich/gulp-pug-starter/) сборку.

## :yellow_heart: Нравится проект?
Сообщайте мне о [багах](https://github.com/andreyalexeich/gulp-scss-starter/issues), ставьте звёздочку в правом верхнем углу, [задонатьте](https://qiwi.com/n/ANDREYALEXEICH) мне на пиво :beer:

## :envelope: Контакты
По всем вопросам пишите в [Telegram](https://t.me/andreyalexeich)
