module.exports = function(grunt) {
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
    var style = require('grunt-cmd-transport').style.init(grunt);

    grunt.initConfig({
        clean: {
            dist: {
                src: 'dist/'
            },
            tmp: {
                src: '.build'
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
            dist: {
                src: 'dist/css/app.css',
                dest: 'dist/css/app.min.css'
            }
        },
        uglify: {
            my_target: {
                files: {
                    'dist/js/components.min.js': ['dist/js/components.js'],
                    'dist/js/app.min.js': ['dist/js/app.js']
                }
            }
        },
        transport: {
          js: {
            files:[{
              expand: true,
              cwd:'js',
              src:['**/*'],
              dest:'.build/js'
            }]
          },
          css: {
            files:[{
              expand: true,
              cwd:'css',
              src:['**/*'],
              dest:'.build/css'
            }]
          }
         },
        concat: {
            jsComponents: {
                options: {
                   noncmd: true
                },
                src: [
                '.build/js/components/jquery/jquery.min.js',
                '.build/js/components/cookie/jquery.cookie.js',
                '.build/js/components/tableExport/FileSaver/FileSaver.min.js',
                '.build/js/components/tableExport/js-xlsx/xlsx.core.min.js',
                '.build/js/components/tableExport/jsPDF/jspdf.min.js',
                '.build/js/components/tableExport/jsPDF-AutoTable/jspdf.plugin.autotable.js',
                '.build/js/components/tableExport/html2canvas/html2canvas.min.js',
                '.build/js/components/tableExport/tableExport.min.js',
                '.build/js/components/bootstrap/bootstrap.min.js',
                '.build/js/components/sweetalert2/sweetalert2.min.js',
                '.build/js/components/es6-promise/es6-promise.auto.min.js',
                '.build/js/components/bootstrap-notify/bootstrap-notify.min.js',
                '.build/js/components/moment/moment.min.js',
                '.build/js/components/moment/zh-cn.js',
                '.build/js/components/datetimepicker/bootstrap-datetimepicker.min.js',
                '.build/js/components/select/bootstrap-select.min.js',
                '.build/js/components/bootstrapValidator/bootstrapValidator.min.js',
                '.build/js/components/bootstrapValidator/language/zh_CN.js',
                '.build/js/components/table/bootstrap-table.min.js',
                '.build/js/components/table/extensions/export/bootstrap-table-export.js',
                '.build/js/components/table/extensions/editable/bootstrap-table-editable.min.js',
                '.build/js/components/table/locale/bootstrap-table-zh-CN.min.js',
                '.build/js/components/editable/bootstrap-editable.min.js',
                '.build/js/components/buttons/buttons.js',
                '.build/js/components/scrollbar/perfect-scrollbar.jquery.min.js',
                '.build/js/components/wizard/jquery.bootstrap.wizard.min.js',
                '.build/js/components/switch/bootstrap-switch.min.js',
                '.build/js/components/iCheck/icheck.min.js'
              ],
                dest: 'dist/js/components.js'
            },
            jsApp: {
                options: {
                   noncmd: true
                },
                src: [
                '.build/js/init.js',
                '.build/js/main.js'
              ],
                dest: 'dist/js/app.js'
            },
            css: {
                options: {
                    css2js: style.css2js,
                    noncmd: true
                },
                src: [
                '.build/css/components/editable/bootstrap-editable.css',
                '.build/css/components/iCheck/grey.css',
                '.build/css/components/switch/bootstrap-switch.min.css',
                '.build/css/components/scrollbar/perfect-scrollbar.min.css',
                '.build/css/components/buttons/buttons.min.css',
                '.build/css/components/select/bootstrap-select.css',
                '.build/css/components/animate/animate.min.css',
                '.build/css/components/datetimepicker/bootstrap-datetimepicker.min.css',
                '.build/css/components/sweetalert2/sweetalert2.min.css',
                '.build/css/components/bootstrap/bootstrap.min.css',
                '.build/css/components/bootstrapValidator/bootstrapValidator.min.css',
                '.build/css/components/table/bootstrap-table.min.css',
                '.build/css/components/themifyIcons/themify-icons.css',
                '.build/css/components/fontAwesome/css/font-awesome.min.css',
                '.build/css/style.css',
                '.build/css/customer.css',
                '.build/css/themes/theme.css'
              ],
                dest: 'dist/css/app.css'
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

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    // grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-cmd-transport');
    grunt.loadNpmTasks('grunt-cmd-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-usemin');

    grunt.registerTask('server', ['connect', 'watch']);
    grunt.registerTask('build', ['clean', 'copy','transport','concat', 'uglify', 'cssmin', 'usemin','clean:tmp']);
}
