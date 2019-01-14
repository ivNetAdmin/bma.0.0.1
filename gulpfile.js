// plugins
var gulp = require("gulp"),
    sass = require("gulp-sass"),
    del = require("del"),
    sourcemaps = require("gulp-sourcemaps"),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    cssnano = require("cssnano"),
    ts = require("gulp-typescript"),
    browsersync = require("browser-sync").create();
    
    var tsProject = ts.createProject("tsconfig.json");

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
      pages: "./pages/*.html",
      sass: "./sass/*.scss",
      bstrap: "./node_modules/bootstrap/scss/bootstrap.scss",
      jquery: "./node_modules/jquery/dist/jquery.min.js",
      tscript: "./typescript/*.ts",
   }
};

// tasks
function browserSync() {
   browsersync.init({
     server: {
      baseDir: paths.site.dest
     },
     port: 3000
   });
 };

 function browserReload(done) {
    browsersync.reload();
    done();
 }
 
 function clean() {
   return del([paths.style.dest, paths.jscript.dest, paths.files.html]);
 };

function style(){
   return (
      gulp
         .src(paths.files.sass)
         .on("error",sass.logError)
         .pipe(sourcemaps.init())
         .pipe(sass())
         .pipe(postcss([autoprefixer(),cssnano()]))
         .pipe(sourcemaps.write())
         .pipe(gulp.dest(paths.style.dest))
         .pipe(browsersync.stream())
   );
};

function bootstrap(){
   return (
      gulp
         .src(paths.files.bstrap)
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
         .src(paths.files.jquery)
         .pipe(gulp.dest(paths.jscript.dest))
         .pipe(browsersync.stream())
   );
};

function html(){
   return (
      gulp
         .src(paths.files.pages)
         .pipe(gulp.dest(paths.site.dest))
         .pipe(browsersync.stream())
   );
};


function tscript()
{
   return(
      gulp
         .src(paths.files.tscript)
         .pipe(sourcemaps.init())
         .pipe(ts())
         .pipe(sourcemaps.write())
         .pipe(gulp.dest(paths.jscript.dest))        
         .pipe(browsersync.stream())
   );
};

// function tscript()
// {
//    return(
//       gulp
//          .src = tsProject.src()
//          .pipe(tsProject())
//          .pipe(gulp.dest(paths.jscript.dest))
//          .pipe(browsersync.stream())
//    );
// };

function watchfiles(){
   gulp.watch(paths.files.pages, gulp.series(html, browserReload));    
   gulp.watch(paths.files.sass, gulp.series(style, browserReload));     
   gulp.watch(paths.files.tscript, gulp.series(tscript, browserReload));
};

// complex tasks
const build = gulp.series(clean, html, gulp.parallel(bootstrap, style, jscript, tscript));
const watch = gulp.parallel(browserSync, watchfiles);

 // export
 exports.clean = clean;
 exports.style = style;
 exports.bootstrap = bootstrap;
 exports.jscript = jscript;
 exports.tscript = tscript;
 exports.html = html;
 exports.watch = watch;
 exports.build = build;
 
 exports.default = watch;