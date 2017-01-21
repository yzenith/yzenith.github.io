var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var wrap = require('gulp-wrap');
var browserSync = require('browser-sync').create();
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

// browser-sync
gulp.task('browser-sync',['build','sass'], function() {
    browserSync.init({
        server: {
            baseDir: ".."
        }
    });
});

// add wrap
gulp.task('build',function(){
	gulp.src("pages/*.html")
		.pipe(wrap({src:"layout/default.html"}))
		.pipe(gulp.dest(".."))
});

// report error
function handleError(err){
	console.log(err.toString());
	this.emit('end');
}

// sass
gulp.task('sass',function(){
	return gulp.src('styles/main.scss')
		.pipe(sass()).on('error',handleError)
		.pipe(prefix())
		// .pipe(minify())
		.pipe(gulp.dest('../styles'))
		.pipe(browserSync.reload({stream:true}));
});


// gulp.task('copy-assets', function(){
//   gulp.src('index.html')
//       .pipe(gulp.dest('../'));
// });

// rebuild
gulp.task('rebuild',['build'],function(){
	browserSync.reload();
});

// watch
gulp.task('watch',function(){
  gulp.watch(['**/*.html'],['rebuild']);
  gulp.watch(['styles/*.scss'],['sass']);
})

gulp.task('default', ['browser-sync','watch']);
