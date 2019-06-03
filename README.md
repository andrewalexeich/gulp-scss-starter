![Uses](https://img.shields.io/badge/%D0%98%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D1%83%D0%B5%D1%82%D1%81%D1%8F-HTML%2C%20SCSS%2C%20ES6-informational.svg)
![GitHub release](https://img.shields.io/github/release/andreyalexeich/gulp-pug-starter.svg?style=flat-square)
![David](https://img.shields.io/david/andreyalexeich/gulp-scss-starter.svg?style=flat-square)
![GitHub stars](https://img.shields.io/github/stars/andreyalexeich/gulp-scss-starter.svg?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/andreyalexeich/gulp-scss-starter.svg?style=social)

# gulp-scss-starter

## Особенности
* сборка предназначена для автоматизации задач в повседневной front-end разработке
* использование препроцессора [SCSS](https://sass-lang.com/)
* использование транспайлера [Babel](https://babeljs.io/) для поддержки современного JavaScript (ES6) в браузерах
* использование [Webpack](https://webpack.js.org/) для сборки JavaScript-модулей
* использование CSS-сетки [smart-grid](https://github.com/dmitry-lavrik/smart-grid) для быстрой адаптивной вёрстки

## Установка
* установите [Yarn](https://yarnpkg.com/en/docs/install)

> Yarn - это современная альтернатива npm. Yarn работает с тем же файлом ```package.json``` и так же скачивает необходимые модули в папку ```node_modules```, но делает это намного быстрее.

* скачайте сборку с помощью [Git](https://git-scm.com/downloads): ```git clone https://github.com/andreyalexeich/gulp-scss-starter.git```
* установите ```gulp```, ```eslint``` и ```bem-tools-core``` глобально: ```yarn global add gulp-cli eslint bem-tools-core```
* перейдите в скачанную папку со сборкой: ```cd gulp-scss-starter```
* скачайте необходимые зависимости: ```yarn```
* чтобы начать работу, введите команду: ```yarn run dev``` (режим разработки)
* чтобы собрать проект, введите команду ```yarn run build``` (режим сборки)

Если вы всё сделали правильно, у вас должен открыться браузер с локальным сервером. Режим сборки предполагает оптимизацию проекта: сжатие изображений, минифицирование CSS и JS-файлов для загрузки на сервер.

## Файловая структура

```
gulp-scss-starter
├── dist
├── gulp-tasks
├── src
│   ├── blocks
│   ├── fonts
│   ├── img
│   ├── js
│   ├── pages
│   ├── styles
│   ├── index.html
│   └── .htaccess
├── gulpfile.babel.js
├── webpack.config.js
├── package.json
├── .babelrc.js
├── .bemrc.js
├── .eslintrc.json
└── .gitignore
```

* Корень папки:
	* ```.babelrc.js``` — настройки Babel
	* ```.bemrc.js``` — настройки БЭМ
	* ```.eslintrc.json``` — настройки ESLint
	* ```.gitignore``` – запрет на отслеживание файлов Git'ом
	* ```gulpfile.babel.js``` — настройки Gulp
	* ```webpack.config.js``` — настройки Webpack
	* ```package.json``` — список зависимостей
* Папка ```src``` - используется во время разработки:
	* БЭМ-блоки: ```src/blocks```
	* шрифты: ```src/fonts```
	* изображения: ```src/img```
	* JS-файлы: ```src/js```
	* страницы сайта: ```src/pages```
	* SCSS-файлы: ```src/styles```
	* главная страница: ```src/index.html```
	* конфигурационный файл веб-сервера Apache с настройками [gzip](https://habr.com/ru/post/221849/) (сжатие без потерь): ```src/.htaccess```
* Папка ```dist``` - папка, из которой запускается локальный сервер для разработки (при запуске ```yarn run dev```)
* Папка ```gulp-tasks``` - папка с Gulp-тасками

## Рекомендации по использованию
* придерживайтесь изначальной структуры папок и файлов
* придерживайтесь компонентного подхода к разработке сайтов
	* каждый БЭМ-блок имеет свою папку внутри ```src/blocks/```
	* папка одного БЭМ-блока содержит в себе один HTML-файл, один SCSS-файл и один JS-файл (если у блока используется скрипт)
	* HTML-файл блока импортируется в файл главной страницы ```src/views/index.html``` (или в необходимый файл страницы, откуда будет вызываться блок) с помощью директивы ```@@include```
	* SCSS-файл блока импортируется в файл ```src/blocks/_blocks.scss```
	* JS-файл блока импортируется в ```src/js/import/blocks.js```
* из всех SCSS-файлов компилируется только ```main.scss```. Остальные стилевые файлы импортируются в него
* страницы сайта находятся в папке ```src/pages```
	* главная страница: ```src/views/index.html```
* шрифты находятся в папке ```src/fonts```
* изображения находятся в папке ```src/img```
	* изображение для генерации фавиконок должно находиться в папке ```src/img``` и иметь размер не менее ```180px x 180px```
* все сторонние библиотеки устанавливаются в папку ```node_modules```
	* для их загрузки воспользуйтеcь командой ```yarn add package_name```
	* для подключения JS-файлов библиотек импортируйте их в начале JS-файла БЭМ-блока (то есть тот БЭМ-блок, который использует скрипт), например:
	```javascript 
	import $ from "jquery";
	```
	* для подключения стилевых файлов библиотек импортируйте их в файл ```src/styles/_libs.scss```
* в вёрстку подключаются только минифицированные CSS и JS-файлы.

## БЭМ
В сборке используется компонентный подход к разработке сайтов по методолгии БЭМ, когда каждый БЭМ-блок имеет свою папку, внутри которой находятся один HTML-файл, один SCSS-файл 
и один JS-файл (если у блока используется скрипт). Чтобы вручную не создавать соответствующие папку и файлы, достаточно в консоли написать ```bem create my-block``` для создания папки БЭМ-блока, где ```my-block``` - имя БЭМ-блока.

## CSS-сетка smart-grid
В сборщик включена CSS-сетка [smart-grid](https://github.com/dmitry-lavrik/smart-grid) от [Дмитрия Лаврика](https://dmitrylavrik.ru/). Она позволяет избавиться от 
лишних классов в разметке за счёт использования примесей в SCSS и ускоряет адаптивную вёрстку. Конфигурация уже настроена в соответствии с сеткой [Bootstrap](https://getbootstrap.com/). Пример использования:

**SCSS**
```scss
.items{
    @include row-flex();
    @include md(justify-content, center);
 
    .item{
        @include col();
        @include size(3);
        @include size-md(5);
        @include size-xs(10);
    }
}
```
**Результат**
```css
.items {
    display: flex;
    flex-wrap: wrap;
    margin-left: -15px;
    margin-right: -15px;
}
.items .item {
    box-sizing: border-box;
    margin-left: 15px;
    margin-right: 15px;
    word-wrap: break-word;
    width: calc(100% / 12 * 3 - 30px);
}
@media screen and (max-width: 992px) {
    .items {
        justify-content: center;
    }
    .items .item {
        width: calc(100% / 12 * 5 - 30px);
    }
}
@media screen and (max-width: 576px) {
    .items .item {
        width: calc(100% / 12 * 10 - 30px);
    }
}
```

## WebP 
В сборщик включена поддержка WebP. WebP — это формат графики, разработанный Google в 2010 году. Он был создан как альтернатива PNG и JPG и отличается от них гораздо меньшим размером при том же качестве изображения. Подробная информация по использованию [тут](https://vk.com/@vk_it-webp).

## Нужен SCSS + Pug?
Используйте [эту](https://github.com/andreyalexeich/gulp-pug-starter/) сборку.

## Нравится проект?
Сообщайте мне о [багах](https://github.com/andreyalexeich/gulp-scss-starter/issues), ставьте звёздочку в правом верхнем углу, задонатьте мне на пиво :beer:

## Контакты
* ВКонтакте: [@andreyalexeich](https://vk.com/andreyalexeich)
* Telegram: [@andreyalexeich](https://t-do.ru/andreyalexeich)
