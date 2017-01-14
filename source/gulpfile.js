var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
// var minify = require('gulp-minify-css');

// var imagemin = require('gulp-imagemin');
// var pngquant = require('imagemin-pngquant');

// gulp.task('imagemin', function(){
//   return gulp.src('src/images/*')
//     .pipe(imagemin({
//       progressive: true,
//       svgoPlugins: [{removeViewBox: false}],
//       use: [pngquant()]
//     }))
//     .pipe(gulp.dest('dist/images'));
// });

gulp.task('sass',function(){
	gulp.src('styles/main.scss')
		.pipe(sass())
		.pipe(prefix())
		// .pipe(minify())
		.pipe(gulp.dest('../styles'));
});

gulp.task('copy-assets', function(){
  gulp.src('index.html')
      .pipe(gulp.dest('../'));
});

gulp.task('watch',function(){
  gulp.watch(['*.html'],['copy-assets']);
  gulp.watch(['styles/*.scss'],['sass']);
})

gulp.task('default', ['sass', 'copy-assets','watch']);
