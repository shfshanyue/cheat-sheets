const gulp = require('gulp')

const postcss = require('gulp-postcss')
const precss = require('precss')
const autoprefixer = require('autoprefixer')
const pug = require('gulp-pug')

const rev = require('gulp-rev')
const revReplace = require('gulp-rev-replace')

const rename = require('gulp-rename')

const sheets = ['git', 'index']

gulp.task('view', ['style'], () => {
  return sheets.map(sheet =>
    gulp.src('src/view-template.pug')
      .pipe(pug({
        data: require(`./sheets/${sheet}.json`),
        pretty: true
      }))
      .pipe(rename({
        basename: sheet  
      }))
      .pipe(revReplace({
        manifest: gulp.src('./public/manifest.json')  
      }))
      .pipe(gulp.dest('public'))
  )
})

gulp.task('markdown', () => {
  return sheets.map(sheet =>
    gulp.src('src/markdown-template.pug')
      .pipe(pug({
        data: require(`./sheets/${sheet}.json`),
        pretty: true
      }))
      .pipe(rename({
        basename: sheet,
        extname: '.md'  
      }))
      .pipe(gulp.dest('docs'))
  )
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

gulp.task('dev', ['view', 'markdown'], () => {
  gulp.watch('src/*', ['view', 'markdown'])  
})

gulp.task('default', ['view', 'markdown'])
