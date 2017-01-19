var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var wrap = require('gulp-wrap');
var browserSync = require('browsersync');
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
gulp.task('browser-sync',function({
	browser-sync({
		server:{
			baseDir: '..'
		}
	});
}));

gulp.task('build',function(){
	gulp.src("pages/*.html")
		.pipe(wrap({src:"layout/default.html"}))
		.pipe(gulp.dest(".."))
});

function handleError(err){
	console.log(err.toString());
	this.emit('end');
}

gulp.task('sass',function(){
	gulp.src('styles/main.scss')
		.pipe(sass()).on('error',handleError)
		.pipe(prefix())
		// .pipe(minify())
		.pipe(gulp.dest('../styles'));
});

// gulp.task('copy-assets', function(){
//   gulp.src('index.html')
//       .pipe(gulp.dest('../'));
// });

gulp.task('watch',function(){
  gulp.watch(['**/*.html'],['build']);
  gulp.watch(['styles/*.scss'],['sass']);
})

gulp.task('default', ['sass', 'build','watch']);
