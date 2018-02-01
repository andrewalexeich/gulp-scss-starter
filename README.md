# Gulppack

Gulppack is very helpful for developing your frontend projects. Gulppack compiles SASS to CSS, compresses the CSS, JS files,
optimizes pictures and SVG. Also creates a server with auto-reloading web page.

## How to use:
* install nodejs (https://nodejs.org/en/);
* install Gulp globally: ```npm install —global gulp@next```;
* ```git clone https://github.com/andreyalexeich/gulppack.git```
* ```cd gulppack``` (use Powershell if you are using Windows);
* ```install gulp npm@next 'gulp-watch browser-sync gulp-autoprefixer gulp-uglify gulp-sass gulp-clean-css gulp-rename gulp-imagemin imagemin-pngquant gulp-svgo' gulp-filter, gulp-notify del --save-dev``` or drag ```npm.sh``` to the terminal and press Enter (Linux, macOS) or run ```npm.bat``` (Windows only)
* enter ```gulp``` in terminal and press Enter.

## Plugins:
* ```gulp-watch``` - file watcher (https://www.npmjs.com/package/gulp-watch);
* ```browser-sync``` - live reloading your web page. Browsersync makes your browser testing workflow faster by synchronising URLs, interactions and code changes across multiple devices (https://browsersync.io/docs/gulp);
* ```gulp-autoprefixer``` - parsing CSS and add vendor prefixes to rules by Can I Use (https://www.npmjs.com/package/gulp-autoprefixer);
* ```gulp-uglify``` - minifing JS files (https://www.npmjs.com/package/gulp-uglify);
* ```gulp-sass``` - compiling SCSS or Sass to CSS (https://www.npmjs.com/package/gulp-sass);
* ```gulp-clean-css``` - minifing CSS files (https://www.npmjs.com/package/gulp-clean-css);
* ```gulp-rename``` - renaming files, adding prefix, suffix (https://www.npmjs.com/package/gulp-rename);
* ```gulp-imagemin``` - minifing PNG, JPEG, GIF and SVG images (https://www.npmjs.com/package/gulp-imagemin);
* ```imagemin-pngquant``` - plugin for ```gulp-imagemin``` for optimizing PNG (https://www.npmjs.com/package/imagemin-pngquant);
* ```gulp-svgo``` - optimizing SVG vector graphics (https://www.npmjs.com/package/gulp-svgo);
* ```gulp-notify``` - notifications (SCSS/Sass errors for example) (https://www.npmjs.com/package/gulp-notify);
* ```gulp-filter``` - enables you to work on a subset of the original files by filtering them using glob patterns. When you're done and want all the original files back you just use the restore stream (https://www.npmjs.com/package/gulp-filter);
* ```del``` - delete files and folders (https://www.npmjs.com/package/del).
