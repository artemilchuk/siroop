var gulp = require('gulp');
var less = require('gulp-less');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var rename = require("gulp-rename");
var watch = require('gulp-watch');
var fs = require('fs');
var _ = require('underscore');

//var books = ["ukrainian", "physics", "maths", "biology", "english", "geography", "history"];

gulp.task('default', ['sass', 'templates', 'copy'], function() {
  console.log("css and templates compiled and copied successfully");
});

gulp.task("sass", function () {
  gulp.src('css/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('build/css'));
});

gulp.task('less', function () {
  var less = require('gulp-less');
  gulp.src('css/main.less')
      .pipe(less())
      .pipe(gulp.dest('css'));
});

gulp.task('templates', function() {
  gulp.src('templates/**/*.jade')
      .pipe(jade({
        pretty: "\t",
        locals: JSON.parse(fs.readFileSync("data.json", 'utf8'))
      }))
      .pipe(gulp.dest("public"));
});

gulp.task('copy', function () {
  gulp.src("css/**/*.css")
      .pipe(gulp.dest("build/css"));
  gulp.src("img/**/*.*")
      .pipe(gulp.dest("build/img"));
  gulp.src("js/**/*.js")
      .pipe(gulp.dest("build/js"));
  gulp.src("public/computer-tablets/index.html")
      .pipe(gulp.dest("build/computer-tablets"));
  gulp.src("robots.txt")
    .pipe(gulp.dest("build"));
});

gulp.task('watch', function () {
  gulp.watch(['js/**/*.js', 'templates/**/*.jade', 'css/*.less'], ['sass','templates', 'copy']);
});