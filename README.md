# Gulppack
Gulppack - сборка для автоматизации задач в повседневной front-end разработке. Компилируйте SCSS, сжимайте файлы, оптимизируйте картинки, пишите на ES6. При  каждом сохранении файла в редакторе кода браузер автоматически перезагружает страницу. Не волнуйтесь о том, что вам придётся выполнять рутинную работу.

## Что включает в себя сборка?
* [browser-sync](https://browsersync.io/docs/gulp) - живая перезагрузка веб-страницы при внесении изменений в файлы вашего проекта. Одна из опций — tunnel, которая выдаёт вам ссылку, чтобы любой желающий смог посмотреть вашу работу (в обход хостинга);
* [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) — автоматически расставляет вендорные префиксы в CSS в соответствии с сервисом [Can I Use](https://caniuse.com/);
* [gulp-babel](https://www.npmjs.com/package/gulp-babel) - использование ES6 с [Babel](https://babeljs.io/);
* [gulp-uglify](https://www.npmjs.com/package/gulp-uglify) — минификация JS-файлов;
* [gulp-sass](https://www.npmjs.com/package/gulp-sass) — компиляция SCSS в CSS;
* [gulp-clean-css](https://www.npmjs.com/package/gulp-clean-css) — минификация CSS-файлов;
* [gulp-rename](https://www.npmjs.com/package/gulp-rename) — переименование файлов, добавление суффиксов и префиксов (например, добавление суффикса .min к минифицированным файлам);
* [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin) — сжатие изображений PNG, JPG, GIF и SVG;
* [imagemin-pngquant](https://www.npmjs.com/package/imagemin-pngquant) — дополнение к gulp-imagemin для работы с PNG-изображениями;
* [imagemin-jpeg-recompress](https://www.npmjs.com/package/imagemin-jpeg-recompress) — дополнение к gulp-imagemin для работы с JPG-изображениями;
* [gulp-favicons](https://github.com/evilebottnawi/favicons) — генератор фавиконок для вашего проекта;
* [gulp-svg-sprite](https://github.com/jkphl/gulp-svg-sprite) - создание SVG-спрайтов;
* [gulp-replace](https://www.npmjs.com/package/gulp-replace) - замена строк;
* [gulp-cheerio](https://www.npmjs.com/package/gulp-cheerio) - плагин для манипуляций с HTML- и XML-файлами; 
* [gulp-newer](https://www.npmjs.com/package/gulp-newer) — дополнительный плагин к ```gulp-imagemin```, позволяет сжимать только новые изображения;
* [gulp-plumber](https://www.npmjs.com/package/gulp-plumber) — оповещения в командной строке (например, ошибки в Sass/SCSS);
* [gulp-debug](https://www.npmjs.com/package/gulp-debug) — отладка в терминале;
* [gulp-watch](https://www.npmjs.com/package/gulp-watch) — отслеживание изменений в ваших файлах проекта.

## Как пользоваться?

Установите один из менеджеров пакетов (на выбор): [NodeJS](https://nodejs.org/en/) / [Yarn](https://yarnpkg.com/en/docs/install).

> NodeJS — это серверная платформа для работы с JavaScript через движок V8. JavaScript выполняет действие на стороне клиента, а Node — на сервере. С помощью Node можно писать полноценные приложения. Node умеет работать с внешними библиотеками, вызывать команды из кода на JavaScript и выполнять роль веб-сервера.

> Yarn - это современная альтернатива npm. Yarn работает с тем же файлом ```package.json``` и так же скачивает необходимые модули в папку ```node_modules```, но делает это намного быстрее.

Далее, используя ```cmd``` в Windows или Терминал Linux/macOS, проделайте 
следующие шаги: 

* установите ```gulp``` глобально: ```npm i --global gulp-cli``` (если вы работаете с ```npm```) или ```yarn global add gulp-cli``` (если вы работаете с ```yarn```);
* перейдите в скачанную папку со сборкой: ```cd gulppack```;
* введите команду, которая скачает необходимые компоненты для корректной работы нашей сборки, указанные в файле ```package.json```: ```npm install --save-dev --save-exact``` (если вы работаете с ```npm```) либо введите команду ```yarn``` (если вы работаете с ```yarn```);
* создайте фавиконки: ```gulp favicons```;
* создайте спрайты: ```gulp svg```;
* введите последнюю команду: ```gulp```.
![](https://i.imgur.com/iOYGCoG.png)

Если вы всё сделали правильно, у вас должен открыться браузер с локальным сервером и работающим browser-sync. Теперь если вы внесёте изменения в файлы ```.html```, ```.scss```, ```.js```, браузер сам перезагрузит веб-страницу, а Gulp заново соберёт ваш проект в папке ```dest```.

## Если в Windows возникает ошибка с тем, что команда gulp не найдена
Модули ```npm```, такие как ```gulp```, не установлены в путях. Таким образом они не обнаруживаются при их запуске в командной строке.
* Компьютер — Свойства — Защита системы — Дополнительно — Переменные среды;
* В разделе Переменные среды выберите переменную среды PATH. Нажмите Изменить. Если переменной PATH не существует, нажмите Создать;
* в имени переменной укажите ```NODE_PATH```;
* в значении переменной укажите ```%AppData%\npm``` или ```%AppData%\npm\node_modules```;
* закройте командную строку и попробуйте ещё раз.

![Добавление переменных сред](https://pp.userapi.com/c834403/v834403892/c00bd/DgYTcUMrEoA.jpg).

***

# Gulppack

Gulppack is a very useful gulp build for your front-end projects. Compile SASS, compress the files, optimize the pictures, write ES6. It reloads your browser automatically every time you save a file in a code editor. Don't care about tedious things, leave it to us!

## What includes:
* [browser-sync](https://browsersync.io/docs/gulp) - live reloading your web page. Browsersync makes your browser testing workflow faster by synchronising URLs, interactions and code changes across multiple devices;
* [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) - parsing CSS and add vendor prefixes to rules by [Can I Use](https://caniuse.com/);
* [gulp-babel](https://www.npmjs.com/package/gulp-babel) - use next generation JavaScript with [Babel](https://babeljs.io/);
* [gulp-uglify](https://www.npmjs.com/package/gulp-uglify) - minifing JS files;
* [gulp-sass](https://www.npmjs.com/package/gulp-sass) - compiling SCSS to CSS;
* [gulp-clean-css](https://www.npmjs.com/package/gulp-clean-css) - minifing CSS files;
* [gulp-rename](https://www.npmjs.com/package/gulp-rename) - renaming files, adding prefix, suffix;
* [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin) - minify PNG, JPEG, GIF and SVG images;
* [imagemin-pngquant](https://www.npmjs.com/package/imagemin-pngquant) - pngquant imagemin plugin;
* [imagemin-jpeg-recompress](https://www.npmjs.com/package/imagemin-jpeg-recompress) - jpeg-recompress imagemin plugin;
* [gulp-favicons](https://github.com/evilebottnawi/favicons) - favicons generator for your projects;
* [gulp-svg-sprite](https://github.com/jkphl/gulp-svg-sprite) - create SVG sprites;
* [gulp-replace](https://www.npmjs.com/package/gulp-replace) - a string replace plugin for gulp;
* [gulp-cheerio](https://www.npmjs.com/package/gulp-cheerio) - a plugin for gulp which allows you to manipulate HTML and XML files; 
* [gulp-newer](https://www.npmjs.com/package/gulp-newer) - piping the source files to newer before imagemin ensures that only those images that have changed are minified;
* [gulp-plumber](https://www.npmjs.com/package/gulp-plumber) - notifications in your terminal (SCSS/Sass errors for example);
* [gulp-debug](https://www.npmjs.com/package/gulp-debug) - debug Vinyl file streams to see what files are run through your Gulp pipeline;
* [gulp-watch](https://www.npmjs.com/package/gulp-watch) - file watcher.

## How to use:
* Install one of the package managers (optional): [NodeJS](http://nodejs.org/en/) / [Yarn](https://yarnpkg.com/en/docs/install).

> NodeJS is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser.

> Yarn is a modern alternative to npm. Yarn works with the same ```package file.json``` and just downloads the required modules into the folder ```node_modules```, but does it much faster.

Then using ```cmd``` in Windows or Terminal in Linux/macOS, please do the following: 

* install ```gulp``` globally: ```npm install --global gulp-cli``` (if you are working with ```npm```) or ```yarn global add gulp-cli``` (if you are working with ```yarn```);
* go to the folder: ```cd gulppack```;
* enter the command that downloads the required components: ```npm i --save-dev --save-exact``` (if you are working with ```npm```) or enter ```yarn``` (if you are working with ```yarn```);
* create favicons: ```gulp favicons```;
* create sprites: ```gulp svg```;
* run Gulp: ```gulp```.

![](https://i.imgur.com/iOYGCoG.png)

Your web browser will open with local server and running browser-sync. Now if you make changes to the
files ```.html```, ```.scss``` or ```.js```, your web browser will reload the web page itself, and Gulp
will re-build your project in the ```dest``` folder.

## Error when running gulp command in Windows
The ```npm``` modules are not installed to the path. Thus are not found when you run them in the ```cmd```. If gulp has been installed globally, you can use the process below:
* create an environmental variable called ```NODE_PATH```;
* set it to: ```%AppData%\npm\node_modules``` or ```%AppData%\npm``` on Windows 8/10;
* close ```cmd``` and re-open. Try again.

![](https://i.stack.imgur.com/ZEJxP.png).
