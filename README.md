# gulp-scss-starter

## Особенности
* сборка предназначена для автоматизации задач в повседневной front-end разработке;
* автоматическая перезагрузка страницы в браузере с использованием [Browsersync](https://www.browsersync.io/);
* использование препроцессора [SCSS](https://sass-lang.com/);
* использование транспайлера [Babel](https://babeljs.io/) для поддержки современного JavaScript (ES6) в браузерах;
* использование CSS-сетки [smart-grid](https://github.com/dmitry-lavrik/smart-grid) для быстрой адаптивной вёрстки.

## Установка
Установите [Yarn](https://yarnpkg.com/en/docs/install).

> Yarn - это современная альтернатива npm. Yarn работает с тем же файлом ```package.json``` и так же скачивает необходимые модули в папку ```node_modules```, но делает это намного быстрее.

* скачайте сборку: ```git clone https://github.com/andreyalexeich/gulppack-scss.git```;
* установите ```gulp``` глобально: ```yarn global add gulp-cli```;
* перейдите в скачанную папку со сборкой: ```cd gulppack-scss```;
* введите команду, которая скачает необходимые компоненты для корректной работы нашей сборки, указанные в файле ```package.json```: ```yarn```;
* введите команду: ```yarn run dev``` (режим разработки);
* чтобы окончательно завершить проект, введите команду ```yarn run build```.

Если вы всё сделали правильно, у вас должен открыться браузер с локальным сервером и работающим ```browser-sync```.

## Плагины
* [browserify](http://browserify.org/) - использование ```require``` в браузере и проведение сборки зависимостей;
* [babelify](https://github.com/babel/babelify) - транспайлер [Babel](https://babeljs.io/) для ```browserify```;
* [watchify](https://github.com/browserify/watchify) - отслеживание изменений для ```browserify```;
* [eslint](https://eslint.org/) - линтер для JS-файлов;
* [browser-sync](https://browsersync.io/docs/gulp) - живая перезагрузка веб-страницы при внесении изменений в файлы вашего проекта;
* [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) — автоматически расставляет вендорные префиксы в CSS в соответствии с сервисом [Can I Use](https://caniuse.com/);
* [gulp-babel](https://www.npmjs.com/package/gulp-babel) - использование ES6 с [Babel](https://babeljs.io/);
* [gulp-uglify](https://www.npmjs.com/package/gulp-uglify) — минификация JS-файлов;
* [gulp-sass](https://www.npmjs.com/package/gulp-sass) — компиляция SCSS в CSS;
* [gulp-group-css-media-queries](https://www.npmjs.com/package/gulp-group-css-media-queries) - группировка ```@media```;
* [gulp-clean-css](https://www.npmjs.com/package/gulp-clean-css) — минификация CSS-файлов;
* [gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps) - карта стилей;
* [gulp-rename](https://www.npmjs.com/package/gulp-rename) — переименование файлов, добавление суффиксов и префиксов (например, добавление суффикса ```.min``` к минифицированным файлам);
* [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin) — сжатие изображений PNG, JPG, GIF и SVG (включая дополнительные плагины для оптимизации);
* [gulp-favicons](https://github.com/evilebottnawi/favicons) — генератор фавиконок для вашего проекта;
* [gulp-if](https://www.npmjs.com/package/gulp-if) - запуск заданий только тогда, когда это нужно;
* [gulp-svg-sprite](https://www.npmjs.com/package/gulp-svg-sprite) — создание SVG-спрайтов;
* [gulp-replace](https://www.npmjs.com/package/gulp-replace) - замена строк;
* [gulp-rigger](https://www.npmjs.com/package/gulp-rigger) - позволяет вставлять содержимое из отдельных файлов в основной;
* [gulp-plumber](https://www.npmjs.com/package/gulp-plumber) — оповещения в командной строке (например, ошибки в SCSS/Sass);
* [gulp-debug](https://www.npmjs.com/package/gulp-debug) — отладка в терминале;
* [gulp-watch](https://www.npmjs.com/package/gulp-watch) — отслеживание изменений в ваших файлах проекта;
* [gulp-clean](https://www.npmjs.com/package/gulp-clean) — удаление файлов и папок;
* [yargs](https://www.npmjs.com/package/yargs) - получение аргументов командной строки в Node.js.

## Файловая структура

### Исходники
* HTML-файлы находятся в папке ```src/views```
	* компоненты (кнопки, инпуты, чекбоксы и т.д.): ```src/views/components```
	* основные компоненты (шапка и футер): ```src/views/modules```
	* страницы: ```src/views/pages```
	* секции: ```src/views/sections```
* SCSS-файлы находятся в папке ```src/styles```
	* стили компонентов (кнопки, инпуты, чекбоксы и т.д.): ```src/styles/components```
	* стили основных компонентов (шапка и футер): ```src/styles/modules```
	* стили секций: ```src/styles/sections```
	* переменные, миксины, наследуемые свойства, стили шрифтов: ```src/styles/utils```
	* сторонние библиотеки (от других разработчиков): ```src/styles/_libs.scss```
* JS-файлы находятся в папке ```src/js```
* Изображения находятся в папке ```src/img```
	* векторные изображения для создания спрайтов: ```src/img/svg```
	* единичное изображение для генерации фавиконок находится в ```src/img/favicon.png``` (данное изображение может иметь формат ```.jpg```, ```.png``` или ```.gif``` и размер не менее  
чем ```100px x 100px```)
* Конфигурационный файл веб-сервера Apache с настройками [gzip](https://habr.com/ru/post/221849/) (сжатие без потерь): ```src/.htaccess```

### Готовые файлы
* скомпилированные HTML-файлы находятся в папке ```dist/```;
* минифицированные CSS-файлы находятся в папке ```dist/styles```;
* минифицированные JS-файлы с поддержкой ES6 находятся в папке ```dist/js```;
* сжатые изображения находятся в папке ```dist/img```.

### Сборка проекта в режиме разработки
```yarn run dev```

## Окончательная сборка
```yarn run build```

## Browserify
[Browserify](http://browserify.org/) позволяет компилировать модули CommonJS для браузеров. Предположим, что у нас есть файл ```libs.js```, который импортирует объект jQuery. Этот объект в 
свою очередь экспортируется в локальную переменную ```$``` вместо глобальной в ```window```, что особенно удобно, если скрипт должен работать на сторонних сайтах, где уже может быть (или 
не быть) установлен jQuery другой версии:

```javascript
const $ = require("../../node_modules/jquery/dist/jquery");

$(document).ready(function() {
    $("body").css({background: "#ececec"});
});
```

В данном коде мы определяем зависимости, затем Browserify собирает их в один файл. Также Browserify умеет создавать sourcemaps до компрессии, поэтому не смотря на конкатенацию, вы сможете
 отлаживать отдельные части пакета ровно так же, как вы и привыкли это делать с отдельными файлами.
 
 ## CSS-сетка smart-grid
 В данный сборщик включена CSS-сетка [smart-grid](https://github.com/dmitry-lavrik/smart-grid) от [Дмитрия Лаврика](https://dmitrylavrik.ru/), позволяющая избавиться от 
 лишних классов в разметке и ускоряющая адаптивную вёрстку. Конфигурация уже настроена в соответствии с сеткой [Bootstrap](https://getbootstrap.com/).

## Нужен Pug + SCSS?
Используйте [эту](https://github.com/andreyalexeich/gulp-pug-starter/) сборку.