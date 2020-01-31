var gulp = require('gulp');

var merge = require('merge-stream'); // To use two or more sources in one gulp task
var source = require('vinyl-source-stream'); //
var buffer = require('vinyl-buffer'); //
var postcss = require('gulp-postcss');
//POSTCSS PLUGINS
var unprefix = require('postcss-unprefix');
var cssnext = require('postcss-cssnext');
var sourcemaps = require('gulp-sourcemaps');
var mergerules = require('postcss-merge-rules');
var mergelonghands = require('postcss-merge-longhand');
var discardcomments = require('postcss-discard-comments');
var colormin = require('postcss-colormin');
var postcssimport = require('postcss-import');
var postcssImageSet = require('postcss-image-set-polyfill');
var lost = require('lost');
//ANOTHER OLUGINS
//css
var csso = require('gulp-csso');
var rename = require('gulp-rename');
//html
var htmlmin = require('gulp-htmlmin');
//js
var babel = require('gulp-babel');
var uglify = require('gulp-uglify-es').default;
//img
var svgmin = require('gulp-svgmin');
//watch
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');

var concat = require('gulp-concat');

// CSS task

var plugins = [
    postcssimport(), // Concat all .css files into one file
    lost(), // Transform lostgrid syntax
    unprefix(), // Add unprefixed properties in order to add or remove (if necessary) vendor prefixes with autoprefixer plugin
    postcssImageSet(), // Polyfilling imageset CSS function
    cssnext({
        browsers: ['last 3 versions'], // Automatically add vendor prefixes
        warnForDuplicates: false
    }),
    mergerules(), // Unite same rules for different selectors
    mergelonghands(), // Minify longhand declarations of margins, paddings, etc.
    discardcomments(), // Delete comments
    colormin(), // Minify colors
]

gulp.task('css', function() {
    return (
        gulp.src('./src/css/style.css')
        .pipe(sourcemaps.init())
        .pipe(postcss(plugins))
        .pipe(csso({restructure:false, sourceMap:true, debug:true})) // Optimize and minify .css file
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./'))
    )
})

//JS task
gulp.task('js', function () {
  return gulp.src([
//    'node_modules/jquery/dist/jquery.min.js', // Optional jQuery plug-in (npm i --save-dev jquery)
//    'node_modules/owl.carousel/dist/owl.carousel.min.js', // Optional jQuery plug-in (npm i --save-dev owl.carousel)
//    'node_modules/vanilla-lazyload/dist/lazyload.min.js', // lazy load
//    'node_modules/magnify/dist/js/jquery.magnify.js', // magnify load
      'src/js/_lib.js', // Library scripts.
      'src/js/_elementsmaker.js', // Library scripts.
		  'src/js/_custom.js', // Custom scripts. Always at the end
		])
	.pipe(concat('scripts.min.js'))
  .pipe(buffer()) // Prepare stream to uglifying
  .pipe(sourcemaps.init({loadMaps: true}))
	.pipe(uglify()) // Mifify js (opt.)
	.pipe(gulp.dest('./'))    
});

//BUILD task
gulp.task('b', ['css','js']);

//WATCH task
gulp.task('w', function() {
  gulp.watch(['./src/css/*.css'], ['css']);
  gulp.watch(['./src/js/*.js'], ['js']);
})
