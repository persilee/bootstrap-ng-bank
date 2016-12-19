  module.exports = function(grunt){
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-usemin');

    grunt.initConfig({
      clean: {
        dist: {
          src:'dist/'
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
              'dist/js/app.min.js': ['dist/js/app.js']
            }
          }
      },
      concat: {
        js: {
          src: ['js/components/jquery/jquery.min.js',
                'js/components/cookie/jquery.cookie.js',
                'js/components/tableExport/FileSaver/FileSaver.min.js',
                'js/components/tableExport/js-xlsx/xlsx.core.min.js',
                'js/components/tableExport/jsPDF/jspdf.min.js',
                'js/components/tableExport/jsPDF-AutoTable/jspdf.plugin.autotable.js',
                'js/components/tableExport/html2canvas/html2canvas.min.js',
                'js/components/tableExport/tableExport.min.js',
                'js/components/bootstrap/bootstrap.min.js',
                'js/components/sweetalert2/sweetalert2.min.js',
                'js/components/es6-promise/es6-promise.auto.min.js',
                'js/components/bootstrap-notify/bootstrap-notify.min.js',
                'js/components/moment/moment.min.js',
                'js/components/datetimepicker/bootstrap-datetimepicker.min.js',
                'js/components/select/bootstrap-select.min.js',
                'js/components/bootstrapValidator/bootstrapValidator.min.js',
                'js/components/bootstrapValidator/language/zh_CN.js',
                'js/components/table/bootstrap-table.min.js',
                'js/components/table/extensions/export/bootstrap-table-export.js',
                'js/components/table/extensions/editable/bootstrap-table-editable.min.js',
                'js/components/table/locale/bootstrap-table-zh-CN.min.js',
                'js/components/editable/bootstrap-editable.min.js',
                'js/components/buttons/buttons.js',
                'js/components/scrollbar/perfect-scrollbar.jquery.min.js',
                'js/components/wizard/jquery.bootstrap.wizard.min.js',
                'js/components/switch/bootstrap-switch.min.js',
                'js/components/iCheck/icheck.min.js',
                'js/main.js'
              ],
          dest: 'dist/js/app.js'
        },
        css: {
          src:[
                'css/components/editable/bootstrap-editable.css',
                'css/components/iCheck/grey.css',
                'css/components/switch/bootstrap-switch.min.css',
                'css/components/scrollbar/perfect-scrollbar.min.css',
                'css/components/buttons/buttons.min.css',
                'css/components/select/bootstrap-select.css',
                'css/components/animate/animate.min.css',
                'css/components/datetimepicker/bootstrap-datetimepicker.min.css',
                'css/components/sweetalert2/sweetalert2.min.css',
                'css/components/bootstrap/bootstrap.min.css',
                'css/components/bootstrapValidator/bootstrapValidator.min.css',
                'css/components/table/bootstrap-table.min.css',
                'css/components/themifyIcons/themify-icons.css',
                'css/style.css',
                'css/customer.css',
                'css/themes/theme.css'
          ],
          dest: 'dist/css/app.css'
        }
      },
      connect: {
        server: {
          options:{
            port: 8089,
            base: 'dist',
            livereload: true
          }
        }
      },
      watch:{
        files: {
          files: ['*.html'/*,'css/*.css','js/*.js','data/*.json','images/*.jpg','fonts/*.*'*/],
          tasks: ['copy:html','usemin'],
          options: {
            livereload: true
          }
        }
      },
      copy: {
        html:{
          src: '*.html',
          dest: 'dist/'
        },
        css:{
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



    grunt.registerTask('server',['connect','watch']);
    grunt.registerTask('build',['clean','copy','concat','uglify','cssmin','usemin']);
}
