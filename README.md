# Gulppack. Версия с SCSS
Gulppack - сборка для автоматизации задач в повседневной front-end разработке. Компилируйте SCSS, сжимайте файлы, оптимизируйте картинки, пишите на ES6. При  каждом сохранении файла в редакторе кода браузер автоматически перезагружает страницу. Не волнуйтесь о том, что вам придётся выполнять рутинную работу.

## Что включает в себя сборка?
* [gulp-if](https://www.npmjs.com/package/gulp-if) - запуск заданий только тогда, когда это нужно;
* [browser-sync](https://browsersync.io/docs/gulp) - живая перезагрузка веб-страницы при внесении изменений в файлы вашего проекта. Одна из опций — tunnel, которая выдаёт вам ссылку, чтобы любой желающий смог посмотреть вашу работу (в обход хостинга);
* [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) — автоматически расставляет вендорные префиксы в CSS в соответствии с сервисом [Can I Use](https://caniuse.com/);
* [gulp-babel](https://www.npmjs.com/package/gulp-babel) - использование ES6 с [Babel](https://babeljs.io/);
* [gulp-uglify](https://www.npmjs.com/package/gulp-uglify) — минификация JS-файлов;
* [gulp-concat](https://www.npmjs.com/package/gulp-concat) - объединение файлов;
* [gulp-sass](https://www.npmjs.com/package/gulp-sass) — компиляция SCSS в CSS;
* [gulp-clean-css](https://www.npmjs.com/package/gulp-clean-css) — минификация CSS-файлов;
* [gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps) - карта стилей;
* [gulp-rename](https://www.npmjs.com/package/gulp-rename) — переименование файлов, добавление суффиксов и префиксов (например, добавление суффикса .min к минифицированным файлам);
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

## Как пользоваться?

Установите [Yarn](https://yarnpkg.com/en/docs/install).

> Yarn - это современная альтернатива npm. Yarn работает с тем же файлом ```package.json``` и так же скачивает необходимые модули в папку ```node_modules```, но делает это намного быстрее.

Далее, используя командную строку в Windows или Терминал Linux/macOS, проделайте следующие шаги:

* скачайте сборку: ```git clone https://github.com/andreyalexeich/gulppack-scss.git```;
* установите ```gulp``` глобально: ```yarn global add gulp-cli```;
* перейдите в скачанную папку со сборкой: ```cd gulppack-scss```;
* введите команду, которая скачает необходимые компоненты для корректной работы нашей сборки, указанные в файле ```package.json```: ```yarn```;
* введите команду: ```yarn run dev``` (режим разработки);
* чтобы окончательно завершить проект, введите команду ```yarn run build```.

![](https://i.imgur.com/iOYGCoG.png)

Если вы всё сделали правильно, у вас должен открыться браузер с локальным сервером и работающим browser-sync. Теперь если вы внесёте изменения в файлы ```.html```, ```.scss```, ```.js```, браузер сам перезагрузит веб-страницу, а Gulp заново соберёт ваш проект в папке ```dest```.

## Bower?
Вместо [Bower](https://bower.io/) используйте yarn или npm. Подробнее [тут](https://medium.com/netscape/bye-bye-bower-or-how-to-migrate-from-bower-to-npm-and-webpack-4eb2e1121a50).

## Нужен Pug + SCSS?
Используйте [эту](https://github.com/andreyalexeich/gulppack-pug/) сборку.

***

# Gulppack. SCSS version

Gulppack is a very useful gulp build for your front-end projects. Compile SCSS, compress the files, optimize the pictures, write ES6. It reloads your browser automatically every time you save a file in a code editor. Don't care about tedious things, leave it to us!

## What includes:
* [gulp-if](https://www.npmjs.com/package/gulp-if) - a ternary gulp plugin;
* [browser-sync](https://browsersync.io/docs/gulp) - live reloading your web page. Browsersync makes your browser testing workflow faster by synchronising URLs, interactions and code changes across multiple devices;
* [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) - parsing CSS and add vendor prefixes to rules by [Can I Use](https://caniuse.com/);
* [gulp-babel](https://www.npmjs.com/package/gulp-babel) - use next generation JavaScript with [Babel](https://babeljs.io/);
* [gulp-uglify](https://www.npmjs.com/package/gulp-uglify) - minifing JS files;
* [gulp-concat](https://www.npmjs.com/package/gulp-concat) - concatenates files;
* [gulp-sass](https://www.npmjs.com/package/gulp-sass) - compiling SCSS to CSS;
* [gulp-clean-css](https://www.npmjs.com/package/gulp-clean-css) - minifing CSS files;
* [gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps) - generating the sourcemaps;
* [gulp-rename](https://www.npmjs.com/package/gulp-rename) - renaming files, adding prefix, suffix;
* [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin) - minify PNG, JPEG, GIF and SVG images (includes plugins for optimization);
* [gulp-favicons](https://github.com/evilebottnawi/favicons) - favicons generator for your projects;
* [gulp-svg-sprites](https://www.npmjs.com/package/gulp-svg-sprites) — create SVG sprites;
* [gulp-replace](https://www.npmjs.com/package/gulp-replace) - a string replace plugin for Gulp;
* [gulp-rigger](https://www.npmjs.com/package/gulp-rigger) - Rigger is a build time include engine for Javascript, CSS, CoffeeScript and in general any type of text file that you wish to might want to "include" other files into;
* [gulp-plumber](https://www.npmjs.com/package/gulp-plumber) - notifications in your terminal (SCSS/Sass errors for example);
* [gulp-debug](https://www.npmjs.com/package/gulp-debug) - debug Vinyl file streams to see what files are run through your Gulp pipeline;
* [gulp-watch](https://www.npmjs.com/package/gulp-watch) - file watcher;
* [gulp-clean](https://www.npmjs.com/package/gulp-clean) — removes files and folders;
* [yargs](https://www.npmjs.com/package/yargs) - a node.js library fer hearties tryin' ter parse optstrings.

## How to use:
* Install [Yarn](https://yarnpkg.com/en/docs/install).

> Yarn is a modern alternative to npm. Yarn works with the same ```package file.json``` and just downloads the required modules into the folder ```node_modules```, but does it much faster.

Then using ```cmd``` in Windows or Terminal in Linux/macOS, please do the following:

* clone the repository: ```git clone https://github.com/andreyalexeich/gulppack-scss.git```;
* install ```gulp``` globally: ```yarn global add gulp-cli```;
* go to the folder: ```cd gulppack-scss```;
* enter the command that downloads the required components: ```yarn```;
* run Gulp: ```yarn run dev``` (dev mode);
* build your project: ```yarn run build```.

![](https://i.imgur.com/iOYGCoG.png)

Your web browser will open with local server and running browser-sync. Now if you make changes to the
files ```.html```, ```.scss``` or ```.js```, your web browser will reload the web page itself, and Gulp
will re-build your project in the ```dest``` folder.

## Bower?
Use yarn or npm instead of [Bower](https://bower.io/). See more [there](https://medium.com/netscape/bye-bye-bower-or-how-to-migrate-from-bower-to-npm-and-webpack-4eb2e1121a50).

## Are you need in Pug + SCSS?
Please use [this](https://github.com/andreyalexeich/gulppack-pug/) version.