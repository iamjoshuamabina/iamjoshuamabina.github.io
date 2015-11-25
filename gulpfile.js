// Require
var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    bower = require('gulp-bower'),
    concat = require('gulp-concat'),
    del = require('del'),
    jshint = require('gulp-jshint'),
    minify = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify');

// Paths
var vendorDir = './assets/vendor';
var paths = {
    'src': {
        'sass': './assets/sass/**/*.scss',
        'js': './assets/js/**/*.js',
        'img': './assets/img/**/*',
        'vendors': {
            'icons': vendorDir + '/font-awesome/fonts/**.*',
            'jquery': vendorDir + '/jquery/dist/jquery.js',
            'bootstrap': vendorDir + 'bootstrap/dist/js/bootstrap.js'
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

// Images
gulp.task("images", function() {
    return gulp.src(paths.src.img)
        .pipe(gulp.dest(paths.dist.img));
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
gulp.task("scripts", ["lint"], function() {
    return gulp.src([ paths.src.vendors.jquery, paths.src.vendors.bootstrap, paths.src.js ])
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
    return del([ paths.dist.css, paths.dist.js, paths.dist.img, paths.dist.fonts ]);
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
    gulp.start('styles', 'scripts', 'icons', 'images');
});