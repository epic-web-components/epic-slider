var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    extract = require("gulp-html-extract"),
    rename = require('gulp-rename'),
    replace = require('gulp-replace'),
    fs = require('fs'),
    input = 'YOURFILE.html',
    tempCss = 'temp.css';

/**
  Pull styles out of a polymer component, auto-prefix them, and put them back
*/
gulp.task('prefix', function() {
    return gulp.src(input)
        .pipe(extract({
          sel: 'style'
        }))
        .pipe(autoprefixer({
          browsers: ['last 3 versions'],
        }))
        .pipe(rename(tempCss))
        .pipe(gulp.dest('./'));
});

gulp.task('insert', ['prefix'], function() {
  return gulp.src(input)
      .pipe(replace(/<style>([\n\s\S]*)<\/style>/, function(err, filename){
        var style = fs.readFileSync('./' + tempCss, 'utf8').trim();
        return '<style>\n' + style + '\n</style>';
      }))
      .pipe(gulp.dest('./'));
});

gulp.task('default', ['prefix', 'insert'], function() {
  fs.unlinkSync(tempCss);
});
