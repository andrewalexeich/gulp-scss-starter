# Gulppack

Gulppack is a very useful gulp build for your front-end projects. Compile SASS, compress the files, optimize the pictures. It reloads your browser automatically every time you save a file in a code editor. Don't care about tedious things, leave it to us!

## How to use:
* install [NodeJs](https://nodejs.org/en/);
* Install Sass: ```npm install --global sass```;
* install Gulp globally: ```npm install --global gulp@next```;
* ```git clone https://github.com/andreyalexeich/gulppack.git```;
* ```cd gulppack``` (use Powershell if you are using Windows);
* ```npm install gulp@next gulp-watch browser-sync gulp-autoprefixer gulp-uglify gulp-sass gulp-clean-css gulp-rename gulp-image gulp-svgo gulp-favicons gulp-filter gulp-plumber del --save-dev``` or drag ```npm.sh``` to the terminal and press Enter (Linux, macOS);
* enter ```gulp``` in your terminal and press Enter.

## Plugins:
* ```gulp-watch``` - file watcher ([https://www.npmjs.com/package/gulp-watch](https://www.npmjs.com/package/gulp-watch));
* ```browser-sync``` - live reloading your web page. Browsersync makes your browser testing workflow faster by synchronising URLs, interactions and code changes across multiple devices ([https://browsersync.io/docs/gulp](https://browsersync.io/docs/gulp));
* ```gulp-autoprefixer``` - parsing CSS and add vendor prefixes to rules by Can I Use ([https://www.npmjs.com/package/gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer));
* ```gulp-uglify``` - minifing JS files ([https://www.npmjs.com/package/gulp-uglify](https://www.npmjs.com/package/gulp-uglify));
* ```gulp-sass``` - compiling SCSS or Sass to CSS ([https://www.npmjs.com/package/gulp-sass](https://www.npmjs.com/package/gulp-sass));
* ```gulp-clean-css``` - minifing CSS files ([https://www.npmjs.com/package/gulp-clean-css](https://www.npmjs.com/package/gulp-clean-css));
* ```gulp-rename``` - renaming files, adding prefix, suffix ([https://www.npmjs.com/package/gulp-rename](https://www.npmjs.com/package/gulp-rename));
* ```gulp-image``` - minifing PNG, JPEG, GIF and SVG images ([https://www.npmjs.com/package/gulp-image](https://www.npmjs.com/package/gulp-image));
* ```gulp-svgo``` - optimizing SVG vector graphics ([https://www.npmjs.com/package/gulp-svgo](https://www.npmjs.com/package/gulp-svgo));
* ```gulp-favicons``` - favicons generator for your projects ([https://github.com/evilebottnawi/favicons](https://github.com/evilebottnawi/favicons));
* ```gulp-plumber``` - notifications in your terminal (SCSS/Sass errors for example) ([https://www.npmjs.com/package/gulp-plumber](https://www.npmjs.com/package/gulp-plumber));
* ```gulp-filter``` - enables you to work on a subset of the original files by filtering them using glob patterns. When you're done and want all the original files back you just use the restore stream ([https://www.npmjs.com/package/gulp-filter](https://www.npmjs.com/package/gulp-filter));
* ```del``` - delete files and folders ([https://www.npmjs.com/package/del](https://www.npmjs.com/package/del)).
