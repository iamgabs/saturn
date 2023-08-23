/**
 *  @author Gabriel Carvalho 'iamgabs'
 *  The SaturnSS library is a project that enables 
 *  developers to write CSS directly from HTML.
 * 
 *  The 'gulpfile.js' is the main file responsible 
 *  for compiling the SCSS files, including multiple 
 *  parts files and a single file called "index.css". 
 *  The developer chose to use SCSS syntax instead of 
 *  SASS due to the need to use key brackets, which provide
 *  a more organized code and similar sytanx to css.
* */

// importing libraries
const { dest, series, src, watch, parallel } = require('gulp'); 
const sass = require('gulp-sass')(require('sass')); 
const cssNanoMinifier = require('gulp-cssnano');
const cache = require('gulp-cached');
const changed = require('gulp-changed');

// set destination folder
const destinationFolder = 'src/css';

function buildSaturnSSStyles() {
    /** @function buildSaturnSSStyles Build SaturnSS Styles function should pick all files into
    saturn's folder, and compile to a css file in the destination folder */
    return src('src/saturn/**/*.scss')
        .pipe(cache('saturnSSCache'))
        .pipe(changed(destinationFolder))
        .pipe(sass()) 
        .pipe(cssNanoMinifier())
        .pipe(dest(destinationFolder));
}

function buildSaturnThemesStyles() {
    /** @function buildSaturnThemesStyles Build SaturnSS Themes Styles function should pick all files into
    saturn's folder, and compile to a css file in the destination folder */
    return src('src/saturn/themes/**/*.scss')
        .pipe(cache('saturnSSThemesCache')) // Adicionar cache
        .pipe(changed(`${destinationFolder}/themes`))
        .pipe(sass()) 
        .pipe(cssNanoMinifier())
        .pipe(dest(`${destinationFolder}/themes`));
}

// RUN TIME 
function watchAllScssFiles() {
    // function to watch all scss files 
    // TODO quando for criar temas adicioar séries em paralelo 
    // > series (parallel(), número de séries)
    watch(['src/saturn/**/*.scss'], buildSaturnSSStyles);
}

exports.default = series(
    parallel(buildSaturnSSStyles, buildSaturnThemesStyles),
    watchAllScssFiles
);
