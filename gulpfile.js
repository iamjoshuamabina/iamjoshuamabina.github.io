// Require
var gulp = require('gulp'),  
    less = require('gulp-less'),
    sass = require('gulp-sass'),
    minify = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minify = require('gulp-minify-css');

// Paths
var paths = {
    'src': {
        'sass': './assets/sass/**/*.scss',
        'js': './assets/js/**/*.js',
        'img': './assets/img/',
        'vendor': './assets/vendor',
        'icons': '/font-awesome/fonts/**.*'
    },
    'production': {
        'css': './public/assets/css/',
        'js': './public/assets/js/',
        'img': './public/assets/img/',
        'fonts': './public/assets/fonts/'
    }
};

// Styles
gulp.task("styles", function() {
    return gulp.src(paths.src.sass)
        .pipe(autoprefixer("> 5%"))
        .pipe(sass().on('error', sass.logError))
        .pipe(minify())
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest(paths.dist.css));

});

// Scripts
gulp.task("scripts", function() {
    return gulp.src(paths.src.js)
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'))
        .pipe(concat('app.js'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest(paths.dist.js));
});

// Icons
gulp.task("icons", function() {
    return gulp.src(paths.src.vendor + paths.src.icons)
        .pipe(gulp.dest(paths.dist.fonts));
});

// Keep
gulp.task("keep", ['clean'], function() {
    return gulp.src('.gitkeep')
        .pipe(gulp.dest(paths.dist.fonts))
        .pipe(gulp.dest(paths.dist.img))
        .pipe(gulp.dest(paths.dist.css))
        .pipe(gulp.dest(paths.dist.js));
});

// Clean
gulp.task("clean", function() {
    return del([paths.dist.css, paths.dist.js, paths.dist.img, paths.dist.fonts]);
});

// Default
gulp.task("default", ['clean'], function() {
    gulp.start('styles', 'scripts', 'icons');
});