"use strict";

const { dest, series, src, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {;
    return src('src/saturn/**/*.scss')
        .pipe(sass()) // -> compile 
        .pipe(dest('src/css'))
        && 
        src('src/saturn/themes/**/*.scss')
        .pipe(sass()) // -> compile 
        .pipe(dest('src/css/themes/'));
}

function watchRepository() {
    watch(['src/saturn/**/*.scss'], buildStyles);
}

exports.default = series(buildStyles, watchRepository)