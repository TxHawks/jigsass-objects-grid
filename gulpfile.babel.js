import browserSync from 'browser-sync';
import del from 'del';

import fs from 'fs';

import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

import sassdoc from 'sassdoc';

import runSequence from 'run-sequence';

// postCss plugins
import autoprefixer from 'autoprefixer';
import mdcss from 'mdcss';
import reporter from 'postcss-reporter';
import scssSyntax from 'postcss-scss';
import stylelint from 'stylelint';

import jigsassMdcss from 'mdcss-theme-jigsass';

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

gulp.task('sass:lint', () =>
  gulp.src('scss/**/*.scss')
    .pipe($.plumber())
    .pipe($.postcss([
      stylelint(),
      reporter({
        clearMessages: true,
        throwError: true,
      }),
    ],
    { syntax: scssSyntax }))
);

gulp.task('sass:sg', ['sass:lint', 'clean'], () => {
  if (genDocs()) {
    runSequence(
      ['sass:lint', 'clean'],
      generateSg);
  }

  function generateSg() {
    return gulp.src('sgSrc/sg.scss')
      .pipe($.plumber())
      .pipe($.sass.sync({
        outputStyle: 'expanded',
        precision: 10,
        includePaths: ['scss'],
      }).on('error', $.sass.logError))
      .pipe($.postcss([
        autoprefixer({ browsers: ['> 1%', 'last 2 versions', 'ie > 7'] }),
        mdcss({
          theme: jigsassMdcss({
            title: 'jigsass-objects-grid',
            examples: {
              css: ['assets/sg.css'],
            },
          }),
          assets: ['sgSrc/assets'],
        }),
      ]))
      .pipe(gulp.dest('./styleguide/assets'));
  }

  function genDocs() {
    try {
      fs.accessSync('noStyleguide', fs.F_OK); return false;
    }
    catch (e) { return true; }
  }
});

gulp.task('serve:sg', ['sass:sg'], () => {
  browserSync({
    notify: true,
    port: 9001,
    reloadDelay: 4000,
    server: {
      baseDir: 'styleguide',
    },
  });

  gulp.watch(['./styleguide/**/*']).on('change', reload);

  gulp.watch(['scss/**/*.scss', 'sgSrc/**/*', 'DOCS.md'], ['sass:sg']);
});

gulp.task('clean', del.bind(null, ['styleguide']));

gulp.task('prepublish', ['sass:lint']);

gulp.task('default', () => { gulp.start('serve:sg'); });
