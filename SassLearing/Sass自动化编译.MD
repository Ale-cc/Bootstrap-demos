#[Sass]自动化编译
###喜欢自动化研究的同学，应该都知道 Grunt 和 Gulp 这两个东东。如果您正在使用其中的任何一种，那么你也可以通过他们来配置 Sass 的编译。这里仅列出两个示例代码（具体情况要根据您的项目环境来做一定的修改，不建议生搬硬套，容易发生命案，呵呵。)



##1、Grunt 配置 Sass 编译的示例代码

<pre><code>
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: {
                    'style/style.css' : 'sass/style.scss'
                }
            }
        },
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['sass']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default',['watch']);
}
</code></pre>

### 想了解 Grunt 同学请单击这里学习<a href="http://www.imooc.com/learn/30">《Grunt-beginner前端自动化工具》</a>。

-----

##2、Gulp 配置 Sass 编译的示例代码


<pre><code>
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    gulp.src('./scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
    gulp.watch('scss/*.scss', ['sass']);
});

gulp.task('default', ['sass','watch']);

</code></pre>