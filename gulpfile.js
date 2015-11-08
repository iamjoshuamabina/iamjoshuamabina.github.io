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
        'vendor': './assets/vendor/'
    },
    'production': {
        'css': './public/assets/css/',
        'js': './public/assets/js/'
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