// plugins
var gulp = require("gulp"),
    sass = require("gulp-sass"),
    del = require("del"),
    sourcemaps = require("gulp-sourcemaps"),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    cssnano = require("cssnano"),
    //ts = require("gulp-typescript"),
    imagemin = require('gulp-imagemin'),
    minify = require('gulp-minify'),
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
      src: "./javascript/*",   
      dest: "./site/js"
   },
   image: {      
      dest: "./site/assets/images"
   },
   fonts: {   
      src: "./fonts/*",   
      dest: "./site/fonts"
   },
   files: {
      html: "./site/*.html",
      pages: "./pages/*.html",
      images: "./images/*",
      sass: "./sass/*.scss",
      bstraprbcss: "./node_modules/bootstrap/dist/css/bootstrap-reboot.min.css",
      bstrapcss: "./node_modules/bootstrap/dist/css/bootstrap.min.css",
      bsstrapjs: "./node_modules/bootstrap/dist/js/bootstrap.min.js",
      jquery: "./node_modules/jquery/dist/jquery.min.js",
      tscript: "./typescript/*.ts",
      parallaxcss: "./node_modules/universal-parallax/dist/universal-parallax.min.css",
      parallaxjs: "./node_modules/universal-parallax/dist/universal-parallax.min.js",
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
   return del([paths.style.dest, paths.jscript.dest, paths.image.dest, paths.fonts.dest, paths.files.html]);
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

function librarycss(){
   return (
      gulp
         .src([paths.files.bstraprbcss, paths.files.bstrapcss, paths.files.parallaxcss])
         .on("error",sass.logError)
         .pipe(sourcemaps.init())
         .pipe(sass())
         .pipe(postcss([autoprefixer(),cssnano()]))
         .pipe(sourcemaps.write())
         .pipe(gulp.dest(paths.style.dest))
         .pipe(browsersync.stream())
   );
};

// function tscript()
// {
//    return(
//       gulp
//          .src(paths.files.tscript)
//          .pipe(sourcemaps.init())
//          .pipe(ts())
//          .pipe(sourcemaps.write())
//          .pipe(gulp.dest(paths.jscript.dest))        
//          .pipe(browsersync.stream())
//    );
// };

function javascript(){
   return (
      gulp
         .src([paths.jscript.src])
         .pipe(sourcemaps.init())
         .pipe(minify())
         .pipe(sourcemaps.write())
         .pipe(gulp.dest(paths.jscript.dest))
         .pipe(browsersync.stream())
   );
};

function libraryjs(){
   return (
      gulp
         .src([paths.files.jquery, paths.files.bsstrapjs, paths.files.parallaxjs])
         .pipe(sourcemaps.init())
         .pipe(sourcemaps.write())
         .pipe(gulp.dest(paths.jscript.dest))
         .pipe(browsersync.stream())
   );
};

function image(){
   return (
      gulp
         .src(paths.files.images)
         .pipe(imagemin())
         .pipe(gulp.dest(paths.image.dest))
         .pipe(browsersync.stream())
   );
};

function font(){
   return (
      gulp
         .src(paths.fonts.src)              
         .pipe(gulp.dest(paths.fonts.dest))
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
   gulp.watch(paths.jscript.src, gulp.series(javascript, browserReload));
};

// complex tasks
const build = gulp.series(clean, html, gulp.parallel(librarycss, style, libraryjs, javascript, image, font));
const watch = gulp.parallel(browserSync, watchfiles);

 // export
 exports.clean = clean;
 exports.style = style;
 exports.librarycss = librarycss;
 exports.libraryjs = libraryjs;
 exports.javascript = javascript;
 exports.html = html;
 exports.watch = watch;
 exports.build = build;
 exports.image = image;
 exports.font = font;

 exports.default = watch;