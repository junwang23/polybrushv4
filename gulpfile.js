var gulp = require("gulp"),
    del = require("del"),
    rename = require("gulp-rename"),
    uglify = require("gulp-uglify");

// clean build folder
gulp.task("clean", function() {
    del(["polybrush.min.js"])
        .then(paths => {
            util.log("Deleted:\n", paths.join("\n"));
        });
});

// minify and concatenate js scripts
gulp.task("minify", ["clean"], function() {
    return gulp.src("polybrush.js")
        .pipe(uglify().on("error", function(e) {
            console.log(e);
        }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest("."));
});

// build
gulp.task('build', ['minify']);

// default to build
gulp.task('default', ['build'], function() {});