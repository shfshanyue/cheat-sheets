const gulp = require('gulp')
const postcss = require('gulp-postcss')
const precss = require('precss')
const autoprefixer = require('autoprefixer')
const pug = require('gulp-pug')
const rev = require('gulp-rev')
const revReplace = require('gulp-rev-replace')

gulp.task('pug', ['style'], () => {
  return gulp.src('src/*.pug')
    .pipe(pug({
      data: require('./git-tips.json'),
      pretty: true
    }))
    .pipe(revReplace({
      manifest: gulp.src('./public/manifest.json')  
    }))
    .pipe(gulp.dest('public'))
})

gulp.task('style', () => {
  return gulp.src('src/style.css')
    .pipe(postcss([precss, autoprefixer]))
    .pipe(rev())
    .pipe(gulp.dest('public'))
    .pipe(rev.manifest({
      path: 'manifest.json',
      merge: true
    }))
    .pipe(gulp.dest('public'))
})

gulp.task('dev', ['pug'], () => {
  gulp.watch('src/*', ['pug'])  
})

gulp.task('default', ['pug'])
