'use strict';

// базовый модуль
const gulp = require('gulp');
// минисервер с возможностью синхронизации и лайврелоадом
const browserSync = require('browser-sync').create();

// переводит pug(jade) в html
const pug = require('gulp-pug');

// переводит stylus в css
const stylus = require('gulp-stylus');
// добавляет карты с исходным кодом для JS и CSS
const sourcemaps = require('gulp-sourcemaps');

// добавляет префиксы браузеров в CSS
const autoprefixer = require('gulp-autoprefixer');

// базовый модуль Babel для работы с ES6
const babel = require('gulp-babel');
// объединяет файлы в один
const concat = require('gulp-concat');
// минификация js
const uglify = require('gulp-uglify');

// уменьшаем вес картинок
const imagemin = require('gulp-imagemin');

// спрайт svg
const svgstore = require('gulp-svgstore');
// уменьшаем вес svg
const svgmin = require('gulp-svgmin');
// для манипуляции html
const cheerio = require('gulp-cheerio');

// проброс сообщения об ошибке через всю цепочку задач
const plumber = require('gulp-plumber');
// выводит удобное сообщение об ошибках 
const notify = require('gulp-notify');
// выполнение операций в зависимости от условий
const gulpif = require('gulp-if');
// выводит дополнительную информацию об операциях с файлами
const debug = require('gulp-debug');
// фильтр пропускающий файлы которые изменились с предыдущего раза
const newer = require('gulp-newer');
// кеш файл для оптимизации скорости
const cached = require('gulp-cached');
// запоминает прошедшие через него файлы и вставляет их обратно в поток
// работает в паре с gulp-cached который пропускает только изменившиеся файлы
const remember = require('gulp-remember');
// меняем имя
const rename = require('gulp-rename');
// чистим папку
const del = require('del');

// Подключаем конфигурационный файл
const conf = require('./paths.json');

// Подключаем пути
const paths = conf.paths;
const files = conf.files;

// Определение: разработка это или финальная сборка
const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

// Чистим папку
gulp.task('del', () => {
  return del(paths.baseDir + '/*');
});

// Собираем разметку
gulp.task('html:build', () => {
  return gulp.src(paths.pug.src + '/*.pug')
  .pipe(plumber({
    errorHandler: err => {
      notify.onError({
        title: 'html build error',
        message: err.message
      })(err)
    }
  }))
  .pipe(debug({title: 'html'}))
  .pipe(pug(gulpif(isDevelopment, {pretty: true })))
  .pipe(gulp.dest(paths.pug.dest));
});

// Копируем файлы css
gulp.task('css:copy', () => {
  return gulp.src(files.css)
  .pipe(gulp.dest(paths.baseDir + '/'));
});

// Собираем стили
gulp.task('css:build', () => {
  return gulp.src(paths.stylus.src + '/styles.styl')
  .pipe(plumber({
    errorHandler: err => {
      notify.onError({
        title: 'css build error',
        message: err.message
      })(err)
    }
  }))
  .pipe(cached('csscache'))
  .pipe(debug({title: 'css'}))
  .pipe(gulpif(isDevelopment, sourcemaps.init()))
  .pipe(remember('csscache'))
  .pipe(stylus(gulpif(!isDevelopment, {compress: true, 'include css': true})))
  .pipe(autoprefixer({
    browsers: ['last 2 versions']
  }))
  .pipe(rename('styles.min.css'))
  .pipe(gulpif(isDevelopment, sourcemaps.write('.')))
  .pipe(gulp.dest(paths.stylus.dest));
});

// Копируем файлы скриптов
gulp.task('js:copy', () => {
  return gulp.src(files.js)
  .pipe(gulp.dest(paths.baseDir + '/'));
});

// Собираем скрипты
gulp.task('js:build', () => {
  return gulp.src([
    paths.scripts.src + '/test.js',
    paths.scripts.src + '/tweens.js',
    paths.scripts.src + '/timelines.js',
    paths.scripts.src + '/app.js',
    paths.scripts.src + '/mobile-menu.js',
    paths.scripts.src + '/scroll-page-down.js',
    paths.scripts.src + '/forms.js'
  ])
  .pipe(plumber({
    errorHandler: err => {
      notify.onError({
        title: 'js build error',
        message: err.message
      })(err)
    }
  }))
  .pipe(cached('jscache'))
  .pipe(debug({title: 'js'}))
  .pipe(gulpif(isDevelopment, sourcemaps.init()))
  .pipe(remember('jscache'))
  .pipe(babel({
    presets: ['env']
  }))
  .pipe(gulpif(!isDevelopment, uglify()))
  .pipe(concat('common.min.js'))
  .pipe(gulpif(isDevelopment, sourcemaps.write('.')))
  .pipe(gulp.dest(paths.scripts.dest));
});

// Копируем пхп файл
gulp.task('php:copy', function () {
  return gulp.src(paths.php.src + '/*.php')
  .pipe(newer(paths.php.dest))
  .pipe(gulp.dest(paths.php.dest));
});

// Копируем шрифты
gulp.task('fonts:copy', () => {
  return gulp.src(paths.fonts.src + '/**/*.{ttf,woff,woff2,eot,svg}')
  .pipe(newer(paths.fonts.dest))
  .pipe(gulp.dest(paths.fonts.dest));
});

// Копируем картинки
gulp.task('img:copy', () => {
  return gulp.src(paths.images.src + '/**/**/*.{png,jpg}')
  .pipe(newer(paths.images.dest))
  /*.pipe(imagemin({
    optimizationLevel: 5
  }))*/
  .pipe(gulp.dest(paths.images.dest));
});

// Собирааем svg
gulp.task('svg:sprite', () => {
  return gulp.src(paths.svg.src + '/*.svg')
  .pipe(newer(paths.svg.dest))
  .pipe(svgmin(function (file) {
    return {
      plugins: [{
        cleanupIDs: {
          minify: true
        }   
      }]
    }
  }))
  .pipe(svgstore({inlineSvg: true}))
  .pipe(cheerio({
    run: function($) {
      $('svg').attr('style', 'display:none');
    },
    parserOptions: {
      xmlMode: true
    }
  }))
  .pipe(rename('sprite-svg.svg'))
  .pipe(gulp.dest(paths.svg.dest));
});

gulp.task('watch', () => {
  gulp.watch(paths.pug.src + '/**/*.pug', gulp.series('html:build'));
  gulp.watch(paths.stylus.src + '/**/*.styl', gulp.series('css:build'));
  gulp.watch(paths.scripts.src + '/*.js', gulp.series('js:build'));
  gulp.watch(paths.fonts.src + '/**/*.{ttf,woff,woff2,eot,svg}', gulp.series('fonts:copy'));
  gulp.watch(paths.images.src + '/**/**/*.{png,jpg}', gulp.series('img:copy'));
  gulp.watch(paths.svg.src + '/**/*.svg', gulp.series('svg:sprite'));
});

gulp.task('serve', () => {
  browserSync.init({
    server: paths.baseDir + '/'
  });
  gulp.watch(paths.baseDir + '/**/**/*.*').on('change', browserSync.reload);    
});

gulp.task('build', 
  gulp.series('del', 'fonts:copy', 'img:copy', 'svg:sprite', 'css:copy', 'js:copy', 'php:copy', 'html:build', 'css:build', 'js:build'));

// Собираем проект
gulp.task('default', gulp.series('build', gulp.parallel('watch', 'serve')));