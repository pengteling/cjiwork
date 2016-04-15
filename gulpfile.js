/*
安装 npm install gulp-compass gulp-autoprefixer gulp-clean-css gulp-watch browser-sync gulp-uglify gulp-imagemin imagemin-pngquant gulp-htmlmin
CSS部分自动功能： sass 生成 css 后 autoprefixer 后 再压缩

图片压缩功能：


JS合并压缩功能：

*/
var gulp = require('gulp');


var autoprefixer = require('gulp-autoprefixer');
var compass = require('gulp-compass');
var cleanCSS = require('gulp-clean-css');
 
gulp.task('css', function() {
  gulp.src('./sass/*.scss')
    .pipe(compass({
      config_file: './config.rb',
      css: 'css',
      sass: 'sass',
      image: 'images'      
    }))
    .pipe(autoprefixer({
            browsers: ['> 1%', 'last 3 versions'],
            flexbox: 'no-2009',
            cascade: false
        }))
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/css'));
});


var uglify = require('gulp-uglify'); 
gulp.task('js', function() {
  return gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});


var watch = require('gulp-watch');
gulp.task('watchcss', function() {
    gulp.watch('./sass/*.scss', ['css']);
});

gulp.task('watchjs', function() {
    gulp.watch('./js/*.js', ['js']);
});

gulp.task('watchhtml', function() {
    gulp.watch('./*.html', ['html']);
});

/*实时监测 浏览器实时变化*/
var browserSync = require('browser-sync');
gulp.task('browser-sync', function() {
    var files = [
        'dist/*.html',
        'dist/css/**/*.css',
        'dist/js/**/*.js'
    ];
    browserSync.init(files, {
        server: {
            baseDir: './dist'
        }
    });
});


gulp.task('default',['js','image','watchhtml','copyjs','watchcss','watchjs','browser-sync']);

//拷贝插件到生成的js目录
gulp.task('copyjs',function(){
	gulp.src('./bower_components/jquery/dist/*.min.js')	
	.pipe(gulp.dest('dist/js'));
});

var imagemin = require('gulp-imagemin'),
    //确保本地已安装imagemin-pngquant [npm install gulp-imagemin imagemin-pngquant --save-dev]
    pngquant = require('imagemin-pngquant');

gulp.task('image', function() {
    gulp.src('./images/**/*.{png,jpg,gif,ico}')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }], //不要移除svg的viewbox属性
            use: [pngquant()] //使用pngquant深度压缩png图片的imagemin插件
        }))
        .pipe(gulp.dest('dist/images'));
});



var htmlmin = require('gulp-htmlmin');  //压缩html

gulp.task('html', function() {
  return gulp.src('*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'))
});