# Gulppack. Версия с SCSS

## Особенности
* сборка для автоматизации задач в повседневной front-end разработке;
* автоматическая перезагрузка страницы в браузере с использованием ```browser-sync```;
* использование транспайлера [Babel](https://babeljs.io/) для поддержки современного JavaScript (ES6) в браузерах.

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
* [gulp-if](https://www.npmjs.com/package/gulp-if) - запуск заданий только тогда, когда это нужно;
* [browser-sync](https://browsersync.io/docs/gulp) - живая перезагрузка веб-страницы при внесении изменений в файлы вашего проекта;
* [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) — автоматически расставляет вендорные префиксы в CSS в соответствии с сервисом [Can I Use](https://caniuse.com/);
* [gulp-babel](https://www.npmjs.com/package/gulp-babel) - использование ES6 с [Babel](https://babeljs.io/);
* [gulp-uglify](https://www.npmjs.com/package/gulp-uglify) — минификация JS-файлов;
* [gulp-concat](https://www.npmjs.com/package/gulp-concat) - объединение файлов;
* [gulp-sass](https://www.npmjs.com/package/gulp-sass) — компиляция SCSS в CSS;
* [gulp-clean-css](https://www.npmjs.com/package/gulp-clean-css) — минификация CSS-файлов;
* [gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps) - карта стилей;
* [gulp-rename](https://www.npmjs.com/package/gulp-rename) — переименование файлов, добавление суффиксов и префиксов (например, добавление суффикса ```.min``` к минифицированным файлам);
* [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin) — сжатие изображений PNG, JPG, GIF и SVG (включая дополнительные плагины для оптимизации);
* [gulp-favicons](https://github.com/evilebottnawi/favicons) — генератор фавиконок для вашего проекта;
* [gulp-svg-sprites](https://www.npmjs.com/package/gulp-svg-sprites) — создание SVG-спрайтов;
* [gulp-replace](https://www.npmjs.com/package/gulp-replace) - замена строк;
* [gulp-rigger](https://www.npmjs.com/package/gulp-rigger) - позволяет вставлять содержимое из отдельных файлов в основной;
* [gulp-plumber](https://www.npmjs.com/package/gulp-plumber) — оповещения в командной строке (например, ошибки в SCSS/Sass);
* [gulp-debug](https://www.npmjs.com/package/gulp-debug) — отладка в терминале;
* [gulp-watch](https://www.npmjs.com/package/gulp-watch) — отслеживание изменений в ваших файлах проекта;
* [gulp-clean](https://www.npmjs.com/package/gulp-clean) — удаление файлов и папок;
* [yargs](https://www.npmjs.com/package/yargs) - получение аргументов командной строки в Node.js.

## Режим разработки

### Исходники
* HTML-файлы находятся в папке ```src/views```
    * компоненты (например, спрайты или формы) к HTML-файлам находятся в ```src/views/components```
    * остальные компоненты (например, шапка, футер) могут находиться в ```src/views/layouts```
* SCSS-файлы находятся в папке ```src/styles```
    * основные компоненты (типография, переменные, миксины) к SCSS-файлам находятся в ```src/styles/base```
    * компоненты (например, спрайты, кнопки) находятся в ```src/styles/components```
    * остальные компоненты (от других разработчиков) находятся в ```src/styles/vendor```
* JS-файлы находятся в папке ```src/js```
* Изображения находятся в папке ```src/img```
    * векторные изображения для создания спрайтов находятся в ```src/img/icons/svg```
    * единичное изображение для генерации фавиконок находится в ```src/img/icons/favicon.png``` (данное изображение может иметь формат ```.jpg```, ```.png``` или ```.gif```)
    
### Сборка проекта в режиме разработки
```yarn run dev```

## Окончательная сборка
```yarn run build```

### Готовые файлы
* HTML-файлы находятся в папке ```dist/```;
* минифицированные CSS-файлы находятся в папке ```dist/styles```;
* минифицированные JS-файлы с поддержкой ES6 находятся в папке ```dist/js```;
* сжатые изображения находятся в папке ```dist/img```.

## Bower?
Вместо [Bower](https://bower.io/) используйте yarn или npm. Подробнее [тут](https://medium.com/netscape/bye-bye-bower-or-how-to-migrate-from-bower-to-npm-and-webpack-4eb2e1121a50).

## Нужен Pug + SCSS?
Используйте [эту](https://github.com/andreyalexeich/gulppack-pug/) сборку.