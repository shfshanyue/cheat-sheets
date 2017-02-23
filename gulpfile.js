const postcss = require('gulp-postcss')
const precss = require('precss')
const autoprefixer = require('autoprefixer')
const pug = require('gulp-pug')

gulp.task('pug', () => {
  return gulp.src('src/*.pug')
    .pipe(pug({
      data: require('./git-tips.json')
    }))
    .pipe(gulp.dest('public'))
})

gulp.task('style', () => {
  return gulp.src('src/style.css')
    .pipe(postcss([precss, autoprefixer]))
    .pipe(gulp.dest('public'))
})

gulp.task('dev', ['style', 'pug'], () => {
  gulp.watch('src/*', ['style', 'pug'])  
})

gulp.task('default', ['style', 'pug'])
