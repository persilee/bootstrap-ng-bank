module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-usemin');

    // LiveReload的默认端口号，你也可以改成你想要的端口号
    var lrPort = 35729;
    // 使用connect-livereload模块，生成一个与LiveReload脚本
    // <script src="http://127.0.0.1:35729/livereload.js?snipver=1" type="text/javascript"></script>
    var lrSnippet = require('connect-livereload')({
        port: lrPort
    });
    // 使用 middleware(中间件)，就必须关闭 LiveReload 的浏览器插件
    var lrMiddleware = function(connect, options) {
        return [
        // 把脚本，注入到静态文件中
        lrSnippet,
        // 静态文件服务器的路径
        connect.static(options.base[0]),
        // 启用目录浏览(相当于IIS中的目录浏览)
        connect.directory(options.base[0])];
    };

    grunt.initConfig({
        clean: {
            dist: {
                src: 'dist/'
            }
        },
        useminPrepare: {
            html: 'index.html',
            options: {
                dest: './'
            }
        },
        usemin: {
            html: ['dist/index.html']
        },
        cssmin: {
            app: {
                src: 'dist/css/app.css',
                dest: 'dist/css/app.min.css'
            },
            login: {
                src: 'dist/css/login.css',
                dest: 'dist/css/login.min.css'
            }
        },
        uglify: {
            app: {
                files: {
                    'dist/js/app.min.js': ['dist/js/app.js']
                }
            },
            login: {
                files: {
                  'dist/js/login.min.js': ['dist/js/login.js']
                }
            }
        },
        concat: {
            js: {
                src: ['js/components/jquery/jquery.min.js', 'js/components/cookie/jquery.cookie.js', 'js/components/tableExport/FileSaver/FileSaver.min.js', 'js/components/tableExport/js-xlsx/xlsx.core.min.js', 'js/components/tableExport/jsPDF/jspdf.min.js', 'js/components/tableExport/jsPDF-AutoTable/jspdf.plugin.autotable.js', 'js/components/tableExport/html2canvas/html2canvas.min.js', 'js/components/tableExport/tableExport.min.js', 'js/components/bootstrap/bootstrap.min.js', 'js/components/sweetalert2/sweetalert2.min.js', 'js/components/es6-promise/es6-promise.auto.min.js', 'js/components/bootstrap-notify/bootstrap-notify.min.js', 'js/components/moment/moment.min.js', 'js/components/moment/zh-cn.js', 'js/components/datetimepicker/bootstrap-datetimepicker.min.js', 'js/components/select/bootstrap-select.min.js', 'js/components/bootstrapValidator/bootstrapValidator.min.js', 'js/components/bootstrapValidator/language/zh_CN.js', 'js/components/table/bootstrap-table.min.js', 'js/components/table/extensions/export/bootstrap-table-export.js', 'js/components/table/extensions/editable/bootstrap-table-editable.min.js', 'js/components/table/locale/bootstrap-table-zh-CN.min.js', 'js/components/editable/bootstrap-editable.min.js', 'js/components/buttons/buttons.js', 'js/components/scrollbar/perfect-scrollbar.jquery.min.js', 'js/components/wizard/jquery.bootstrap.wizard.min.js', 'js/components/switch/bootstrap-switch.min.js', 'js/components/iCheck/icheck.min.js', 'js/main.js'],
                dest: 'dist/js/app.js'
            },
            css: {
                src: ['css/components/editable/bootstrap-editable.css', 'css/components/iCheck/grey.css', 'css/components/switch/bootstrap-switch.min.css', 'css/components/scrollbar/perfect-scrollbar.min.css', 'css/components/buttons/buttons.min.css', 'css/components/select/bootstrap-select.css', 'css/components/animate/animate.min.css', 'css/components/datetimepicker/bootstrap-datetimepicker.min.css', 'css/components/sweetalert2/sweetalert2.min.css', 'css/components/bootstrap/bootstrap.min.css', 'css/components/bootstrapValidator/bootstrapValidator.min.css', 'css/components/table/bootstrap-table.min.css', 'css/components/themifyIcons/themify-icons.css','css/components/fontAwesome/css/font-awesome.min.css','css/style.css', 'css/customer.css', 'css/themes/theme.css'],
                dest: 'dist/css/app.css'
            },
            jsLogin: {
                src:[
                  'js/components/jquery/jquery.min.js',
                  'js/components/bootstrap/bootstrap.min.js',
                  'js/components/bootstrapValidator/bootstrapValidator.min.js',
                  'js/components/bootstrapValidator/language/zh_CN.js',
                  'js/components/select/bootstrap-select.min.js',
                  'js/login.js'
                ],
                dest: 'dist/js/login.js'
            },
            cssLogin: {
                src: [
                  'css/components/animate/animate.min.css',
                  'css/components/fontAwesome/css/font-awesome.min.css',
                  'css/components/select/bootstrap-select.css',
                  'css/components/bootstrap/bootstrap.min.css',
                  'css/components/bootstrapValidator/bootstrapValidator.min.css',
                  'css/login.css'
                ],
                dest: 'dist/css/login.css'
            }
        },
        connect: {
            server: {
                options: {
                    port: 9090,
                    base: 'dist'
                },
                livereload: {
                    options: {
                        // 通过LiveReload脚本，让页面重新加载。
                        middleware: lrMiddleware
                    }
                }
            }
        },
        watch: {
            files: {
                files: ['*.html'
                /*,'css/*.css','js/*.js','data/*.json','images/*.jpg','fonts/*.*'*/
                ],
                tasks: ['copy:html', 'usemin'],
                options: {
                    livereload: lrPort
                }
            }
        },
        copy: {
            html: {
                src: '*.html',
                dest: 'dist/'
            },
            css: {
                expand: true,
                src: 'css/themes/*.css',
                dest: 'dist/css/themes/',
                flatten: true,
                filter: 'isFile'
            },
            data: {
                src: 'data/*.json',
                dest: 'dist/'
            },
            image: {
                src: 'images/*.jpg',
                dest: 'dist/'
            },
            greypng: {
                expand: true,
                // cwd: 'css/components/iCheck/',
                src: 'css/components/iCheck/*.png',
                dest: 'dist/css/',
                flatten: true,
                filter: 'isFile'
            },
            font: {
                src: 'fonts/*.*',
                dest: 'dist/'
            },
            fontMerge: {
                src: 'fonts/*.*',
                dest: 'dist/css/',
            }
        }
    });

    grunt.registerTask('server', ['connect', 'watch']);
    grunt.registerTask('build', ['clean', 'copy', 'concat', 'uglify', 'cssmin', 'usemin']);
}
