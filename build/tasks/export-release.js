var gulp = require('gulp');
var runSequence = require('run-sequence');
var del = require('del');
var vinylPaths = require('vinyl-paths');
var paths = require('../paths');
var resources = require('../export.json');
var ghPages = require('gulp-gh-pages');

// deletes all files in the output path
gulp.task('clean-export', function() {
  return gulp.src([paths.exportSrv])
    .pipe(vinylPaths(del));
});

function getExportList() {
  return resources.list;
}

gulp.task('export-copy', function() {
  return gulp.src(getExportList(), {base: "."})
    .pipe(gulp.dest(paths.exportSrv));
});

gulp.task('export', function(callback) {
  return runSequence(
    'bundle',
    'clean-export',
    'export-copy',
    'unbundle',
    callback
  );
});

gulp.task('export-gh-pages', ['export'], function(callback) {
  return gulp.src('./export/**/*')
    .pipe(ghPages());
});
