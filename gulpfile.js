// plugins
var gulp = require("gulp"),
    sass = require("gulp-sass"),
    del = require("del"),
    sourcemaps = require("gulp-sourcemaps"),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    cssnano = require("cssnano"),
    browsersync = require("browser-sync").create();

// paths
var paths = {
   site: {
      dest: "./site"
   },
   style: {
      dest: "./site/css"
   },
   jscript: {      
      dest: "./site/js"
   },
   files: {
      html: "./site/*.html",
      sass: "./sass/*.scss",
      bstrap: "./node_modules/bootstrap/scss/bootstrap.scss",
      jquery: "./node_modules/jquery/dist/jquery.min.js",
   }
};

// tasks
function browserSync(done) {
   browsersync.init({
     server: {
      baseDir: paths.site.dest
     },
     port: 3000
   });
   done();
 };

//  function browserSyncReload(done) {
//    browsersync.reload();
//    done();
//  };
 
 function clean() {
   return del([paths.style.dest,paths.jscript.dest]);
 };

function style(){
   return (
      gulp
         .src([paths.files.bstrap, paths.files.sass])
         .on("error",sass.logError)
         .pipe(sourcemaps.init())
         .pipe(sass())
         .pipe(postcss([autoprefixer(),cssnano()]))
         .pipe(sourcemaps.write())
         .pipe(gulp.dest(paths.style.dest))
         .pipe(browsersync.stream())
   );
};

function jscript(){
   return (
      gulp
         .src([paths.files.jquery])
         .pipe(gulp.dest(paths.jscript.dest))
         .pipe(browsersync.stream())
   );
};

function watchfiles(){
   gulp.watch(paths.files.sass, style);
};

// complex tasks
const build = gulp.series(clean, gulp.parallel(style, jscript));
const watch = gulp.parallel(watchfiles, browserSync);

 // export
 exports.clean = clean;
 exports.style = style;
 exports.jscript = jscript;
 exports.watch = watch;
 exports.build = build;
 exports.default = watch;