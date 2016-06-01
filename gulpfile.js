// 引入 gulp
var gulp = require('gulp'); 
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifycss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var connect = require('gulp-connect');

gulp.task('default', function(){
    gulp.run('html');
    gulp.run('css');
    gulp.run('js');
    gulp.run('server');

});
gulp.task('server', [], function() {
    return connect.server({
        root:[ 'public' ],
        livereload:true
    });
});

gulp.task('html',function() {
    gulp.src('src/*.html')
    .pipe(gulp.dest('public'));
});

gulp.task('css',function(){
    gulp.src('src/css/*.css')
        .pipe(gulp.dest('public/css'))
        .pipe(rename({suffix:'.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('public/css'));
});

gulp.task('js',function(){
    gulp.src('/src/js/*.js')
    .pipe(gulp.dest('public/js'))
    .pipe(rename({suffix:'.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('public/js'));
 });