"use strict";

const { dest, series, src, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {;
    return src('src/saturn/**/*.scss')
        .pipe(sass()) // -> compile 
        .pipe(dest('src/css')); // -> set destination
}

function watchRepository() {
    watch(['src/saturn/**/*.scss'], buildStyles);
}

exports.default = series(buildStyles, watchRepository)