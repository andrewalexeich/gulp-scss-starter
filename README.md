[![ru-lang](https://img.shields.io/badge/lang-ru-red.svg)](README.ru.md)

# Gulppack

Gulppack is a very useful gulp build for your front-end projects. Compile SASS, compress the files, optimize the pictures. It reloads your browser automatically every time you save a file in a code editor. Don't care about tedious things, leave it to us!

## What includes:
* [browser-sync](https://browsersync.io/docs/gulp) - live reloading your web page. Browsersync makes your browser testing workflow faster by synchronising URLs, interactions and code changes across multiple devices;
* [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) - parsing CSS and add vendor prefixes to rules by Can I Use;
* [gulp-uglify](https://www.npmjs.com/package/gulp-uglify) - minifing JS files;
* [gulp-sass](https://www.npmjs.com/package/gulp-sass) - compiling SCSS or Sass to CSS;
* [gulp-clean-css](https://www.npmjs.com/package/gulp-clean-css) - minifing CSS files;
* [gulp-rename](https://www.npmjs.com/package/gulp-rename) - renaming files, adding prefix, suffix;
* [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin) - minify PNG, JPEG, GIF and SVG images;
* [imagemin-pngquant](https://www.npmjs.com/package/imagemin-pngquant) - pngquant imagemin plugin;
* [imagemin-jpeg-recompress](https://www.npmjs.com/package/imagemin-jpeg-recompress) - jpeg-recompress imagemin plugin;
* [gulp-favicons](https://github.com/evilebottnawi/favicons) - favicons generator for your projects;
* [gulp-svg-symbols](https://github.com/Hiswe/gulp-svg-symbols) - create SVG sprites;
* [gulp-newer](https://www.npmjs.com/package/gulp-newer) - piping the source files to newer before imagemin ensures that only those images that have changed are minified;
* [gulp-cache](https://www.npmjs.com/package/gulp-cache) - a temp file based caching proxy task;
* [gulp-plumber](https://www.npmjs.com/package/gulp-plumber) - notifications in your terminal (SCSS/Sass errors for example);
* [gulp-debug](https://www.npmjs.com/package/gulp-debug) - debug Vinyl file streams to see what files are run through your Gulp pipeline;
* [gulp-watch](https://www.npmjs.com/package/gulp-watch) - file watcher.

## How to use:
* Install one of the package managers (optional): [NodeJS](http://nodejs.org/en/) / [Yarn](https://yarnpkg.com/en/docs/install).

> NodeJS is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser. Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser.

> Yarn is a modern alternative to npm. Yarn works with the same ```package file.json``` and just downloads the required modules into the folder ```node_modules```, but does it much faster.

Then using Powershell in Windows or Terminal in Linux/macOS, please do the following: 

* install ```gulp``` globally: ```npm install --global gulp-cli``` (if you are working with ```npm```) or ```yarn global add gulp-cli``` (if you are working with ```yarn```);
* install ```bower``` globally: ```npm install --global bower``` (if you are working with ```npm```) or ```yarn global add bower``` (if you are working with ```yarn```);
* go to the folder: ```cd gulppack```;
* enter the command that downloads the required components: ```npm install --save-dev --save-exact``` (if you are working with ```npm```) or enter ```yarn``` (if you are working with ```Yarn```);
* create favicons: ```gulp favicons```;
* install packages what you need with ```Bower```,
[slick](http://kenwheeler.github.io/slick/) for example;
* ```gulp```.

Your web browser will open with local server and running browser-sync. Now if you make changes to the
files ```.html```, ```.css``` or ```.js```, your web browser will reload the web page itself, and Gulp
will re-build your project in the ```dest``` folder.

## How to use Bower
> [Bower](https://bower.io/) offers a generic, unopinionated solution to the problem of front-end package management, while exposing the package dependency model via an API that can be consumed by a more opinionated build stack. There are no system wide dependencies, no dependencies are shared between different apps, and the dependency tree is flat.

For example, if you need [slick](http://kenwheeler.github.io/slick/) slider, install it with ```bower i slick-carousel``` and connect it to ```index.html``` for ```css``` and ```js```:
```html
<link rel="stylesheet" href="libs/slick-carousel/slick/slick.css">
```
```html
<script src="libs/slick-carousel/slick/slick.min.js"></script>
```

## If you are working with SCSS
Open ```gulpfile.js``` and search the line: 
```javascript 
styles: { src: "src/styles/**/*.sass", dest: "dest/styles/" } 
```

and change to:
```javascript 
styles: { src: "src/styles/**/*.scss", dest: "dest/styles/" }
```
