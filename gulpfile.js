// const { dest, series, src, watch } = require('gulp');
// const sass = require('gulp-sass')(require('sass'));

// function buildSaturnSSStylesAndThemes() {;
//     return src('src/saturn/**/*.scss')
//         .pipe(sass()) 
//         .pipe(dest('src/css'))
//         // && 
//         // src('src/saturn/themes/**/*.scss')
//         // .pipe(sass()) 
//         // .pipe(dest('src/css/themes/'));
// }

// function watchAllScssFilesInTheRepository() {
//     watch(['src/saturn/**/*.scss'], buildSaturnSSStylesAndThemes);
// }

// exports.default = series(buildSaturnSSStylesAndThemes, watchAllScssFilesInTheRepository)

const { dest, series, src, watch, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildSaturnSSStyles() {
    return src('src/saturn/**/*.scss')
        .pipe(sass()) 
        .pipe(dest('src/css'));
}

function buildSaturnThemesStyles() {
    return src('src/saturn/themes/**/*.scss')
        .pipe(sass()) 
        .pipe(dest('src/css/themes/'));
}

function watchAllScssFiles() {
    watch(['src/saturn/**/*.scss'], buildSaturnSSStyles);
}

exports.default = series(
    parallel(buildSaturnSSStyles, buildSaturnThemesStyles),
    watchAllScssFiles
);
