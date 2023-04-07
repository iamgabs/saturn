// import lib
const { dest, series, src, watch, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cssNanoMinifier = require('gulp-cssnano')

// set destination folder
const destinationFolder = 'src/css';

function buildSaturnSSStyles() {
    /* Build SaturnSS Styles function should pick all files into
    saturn's folder, and compile to a css file in the destination folder */
    return src('src/saturn/**/*.scss')
        .pipe(sass()) 
        .pipe(cssNanoMinifier())
        .pipe(dest(destinationFolder));
}

function buildSaturnThemesStyles() {
    /* Build SaturnSS Themes Styles function should pick all files into
    saturn's folder, and compile to a css file in the destination folder */
    return src('src/saturn/themes/**/*.scss')
        .pipe(sass()) 
        .pipe(cssNanoMinifier())
        .pipe(dest(`${destinationFolder}/themes`));
}

// RUN TIME 
function watchAllScssFiles() {
    // function to watch all scss files 
    watch(['src/saturn/**/*.scss'], buildSaturnSSStyles);
}

exports.default = series(
    parallel(buildSaturnSSStyles, buildSaturnThemesStyles),
    watchAllScssFiles
);
