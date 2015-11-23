// Require
var gulp = require('gulp'),
    less = require('gulp-less'),
    sass = require('gulp-sass'),
    minify = require('gulp-minify-css'),
    bower = require('gulp-bower'),
    del = require('del'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minify = require('gulp-minify-css');

// Paths
var vendorDir = './assets/vendor';
var paths = {
    'src': {
        'sass': './assets/sass/**/*.scss',
        'js': './assets/js/**/*.js',
        'img': './assets/img/',
        'vendors': {
            'icons': vendorDir + '/font-awesome/fonts/**.*',
            'jquery': vendorDir + '/jquery/dist/jquery.js',
            'bootstrap': {
                'js': vendorDir + 'bootstrap/dist/js/bootstrap.js'
            }
        }
    },
    'production': {
        'css': './public/assets/css/',
        'js': './public/assets/js/',
        'img': './public/assets/img/',
        'fonts': './public/assets/fonts/'
    }
};

// Bower
gulp.task("bower", function() {
    return bower();
});

// Icons
gulp.task("icons", function() {
    return gulp.src(paths.src.vendors.icons)
        .pipe(gulp.dest(paths.dist.fonts));
});

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
    return gulp.src([ paths.src.js, paths.src.vendors.jquery, paths.src.vendors.bootstrap.js ])
        .pipe(concat('app.js'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest(paths.dist.js));
});

// Lints
gulp.task("lint", function() {
    return gulp.src(paths.src.js)
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'));
});

// Clean
gulp.task("clean", function() {
    return del([paths.dist.css, paths.dist.js, paths.dist.img, paths.dist.fonts]);
});

// Keep
gulp.task("keep", ["clean"], function() {
    return gulp.src('.gitkeep')
        .pipe(gulp.dest(paths.dist.fonts))
        .pipe(gulp.dest(paths.dist.img))
        .pipe(gulp.dest(paths.dist.css))
        .pipe(gulp.dest(paths.dist.js));
});

// Watch
gulp.task("watch", function() {
    // Watch icon files
    gulp.watch(paths.src.icons, ['icons']);

    // Watch image files
    gulp.watch(paths.src.img, ['images']);

    // Watch .scss files
    gulp.watch(paths.src.sass, ['styles']);

    // Watch .js files
    gulp.watch(paths.src.js, ['scripts']);
});

// Default
gulp.task("default", ["keep"], function() {
    gulp.start('styles', 'scripts', 'icons');
});