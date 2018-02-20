# Gulppack

Gulppack is a very useful gulp build for your front-end projects. Compile SASS, compress the files, optimize the pictures. It reloads your browser automatically every time you save a file in a code editor. Don't care about tedious things, leave it to us!

## How to use:
* install [NodeJs](https://nodejs.org/en/);
* install Gulp globally: ```npm install --global gulp-cli```;
* ```git clone https://github.com/andreyalexeich/gulppack.git```;
* ```cd gulppack``` (use Powershell if you are using Windows);
* ```npm install gulp@next browser-sync gulp-autoprefixer gulp-uglify gulp-sass gulp-clean-css gulp-concat gulp-rename gulp-svgo gulp-imagemin imagemin-pngquant imagemin-jpeg-recompress  gulp-favicons gulp-plumber ngrok gulp-newer gulp-debug gulp-rimraf gulp-watch --save-dev --save-exact``` or drag ```npm.sh``` to the terminal and press Enter (Linux, macOS, Git on Windows);
* enter ```gulp``` in your terminal and press Enter.

## Plugins:
* ```browser-sync``` - live reloading your web page. Browsersync makes your browser testing workflow faster by synchronising URLs, interactions and code changes across multiple devices ([https://browsersync.io/docs/gulp](https://browsersync.io/docs/gulp));
* ```gulp-autoprefixer``` - parsing CSS and add vendor prefixes to rules by Can I Use ([https://www.npmjs.com/package/gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer));
* ```gulp-uglify``` - minifing JS files ([https://www.npmjs.com/package/gulp-uglify](https://www.npmjs.com/package/gulp-uglify));
* ```gulp-sass``` - compiling SCSS or Sass to CSS ([https://www.npmjs.com/package/gulp-sass](https://www.npmjs.com/package/gulp-sass));
* ```gulp-clean-css``` - minifing CSS files ([https://www.npmjs.com/package/gulp-clean-css](https://www.npmjs.com/package/gulp-clean-css));
* ```gulp-concat``` - concatenates files ([https://www.npmjs.com/package/gulp-concat](https://www.npmjs.com/package/gulp-concat));
* ```gulp-rename``` - renaming files, adding prefix, suffix ([https://www.npmjs.com/package/gulp-rename](https://www.npmjs.com/package/gulp-rename));
* ```gulp-svgo``` - optimizing SVG vector graphics ([https://www.npmjs.com/package/gulp-svgo](https://www.npmjs.com/package/gulp-svgo));
* ```gulp-imagemin``` - minify PNG, JPEG, GIF and SVG images ([https://www.npmjs.com/package/gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin));
* ```imagemin-pngquant``` - pngquant imagemin plugin ([https://www.npmjs.com/package/imagemin-pngquant](https://www.npmjs.com/package/imagemin-pngquant));
* ```imagemin-jpeg-recompress``` - jpeg-recompress imagemin plugin ([https://www.npmjs.com/package/imagemin-jpeg-recompress](https://www.npmjs.com/package/imagemin-jpeg-recompress));
* ```gulp-favicons``` - favicons generator for your projects ([https://github.com/evilebottnawi/favicons](https://github.com/evilebottnawi/favicons));
* ```gulp-plumber``` - notifications in your terminal (SCSS/Sass errors for example) ([https://www.npmjs.com/package/gulp-plumber](https://www.npmjs.com/package/gulp-plumber));
* ```ngrok``` - secure introspectable tunnels to localhost webhook development tool and debugging tool ([https://www.npmjs.com/package/ngrok](https://www.npmjs.com/package/ngrok));
* ```gulp-newer``` - piping the source files to newer before imagemin ensures that only those images that have changed are minified ([https://www.npmjs.com/package/gulp-newer](https://www.npmjs.com/package/gulp-newer));
* ```gulp-debug``` - debug Vinyl file streams to see what files are run through your Gulp pipeline ([https://www.npmjs.com/package/gulp-debug](https://www.npmjs.com/package/gulp-debug));
* ```gulp-rimraf``` - delete folders and files ([https://github.com/robrich/gulp-rimraf](https://github.com/robrich/gulp-rimraf));
* ```gulp-watch``` - file watcher ([https://www.npmjs.com/package/gulp-watch](https://www.npmjs.com/package/gulp-watch)).
