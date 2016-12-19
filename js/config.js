// seajs 的简单配置
seajs.config({
  base: "./",
  plugins: ['shim'],
  alias: {
    'jquery': {
      src : 'js/components/jquery/jquery.min.js',
      exports: 'jQuery'
    },
    'jqueryCookie': {
      src: 'js/components/cookie/jquery.cookie.js',
      deps: ['jquery']
    },
    'FileSaver': {
      src: 'js/components/tableExport/FileSaver/FileSaver.min.js',
      deps: ['jquery']
    },
    'jsXlsx': {
      src: 'js/components/tableExport/js-xlsx/xlsx.core.min.js',
      deps: ['jquery']
    },
    'jsPDF': {
      src: 'js/components/tableExport/jsPDF/jspdf.min.js',
      deps: ['jquery']
    },
    'jsPDFAutoTable': {
      src: 'js/components/tableExport/jsPDF-AutoTable/jspdf.plugin.autotable.js',
      deps: ['jquery','jsPDF']
    },
    'html2canvas': {
      src: 'js/components/tableExport/html2canvas/html2canvas.min.js',
      deps: ['jquery']
    },
    'tableExport': {
      src: 'js/components/tableExport/tableExport.min.js',
      deps: ['jquery','html2canvas','jsPDFAutoTable','jsPDF','jsXlsx','FileSaver']
    },
    'bootstrap': {
      src: 'js/components/bootstrap/bootstrap.min.js',
      deps: ['jquery']
    },
    'sweetalert2': {
      src: 'js/components/sweetalert2/sweetalert2.min.js',
      deps: ['jquery']
    },
    'es6Promise': {
      src: 'js/components/es6-promise/es6-promise.auto.min.js',
      deps: ['jquery','sweetalert2']
    },
    'notify': {
      src: 'js/components/bootstrap-notify/bootstrap-notify.min.js',
      deps: ['jquery','bootstrap']
    },
    'moment': {
      src: 'js/components/moment/moment.min.js',
      deps: ['jquery']
    },
    'momentZh': {
      src: 'js/components/moment/zh-cn.js',
      deps: ['jquery','moment']
    },
    'datetimepicker': {
      src: 'js/components/datetimepicker/bootstrap-datetimepicker.min.js',
      deps: ['jquery','bootstrap','moment','momentZh']
    },
    'select': {
      src: 'js/components/select/bootstrap-select.min.js',
      deps: ['jquery','bootstrap']
    },
    'bootstrapValidator': {
      src: 'js/components/bootstrapValidator/bootstrapValidator.min.js',
      deps: ['jquery','bootstrap']
    },
    'bootstrapValidatorZh': {
      src: 'js/components/bootstrapValidator/language/zh_CN.js',
      deps: ['jquery','bootstrapValidator']
    },
    'bootstrapTable': {
      src: 'js/components/table/bootstrap-table.min.js',
      deps: ['jquery','bootstrap']
    },
    'bootstrapTableExport': {
      src: 'js/components/table/extensions/export/bootstrap-table-export.js',
      deps: ['jquery','bootstrap','bootstrapTable','tableExport']
    },
    'bootstrapTableEditable': {
      src: 'js/components/table/extensions/editable/bootstrap-table-editable.min.js',
      deps: ['jquery','bootstrap','bootstrapTable']
    },
    'bootstrapTableZh': {
      src: 'js/components/table/locale/bootstrap-table-zh-CN.min.js',
      deps: ['jquery','bootstrap','bootstrapTable']
    },
    'bootstrapEditable': {
      src: 'js/components/editable/bootstrap-editable.min.js',
      deps: ['jquery','bootstrap']
    },
    'buttons': {
      src: 'js/components/buttons/buttons.js',
      deps: ['jquery']
    },
    'scrollbar': {
      src: 'js/components/scrollbar/perfect-scrollbar.jquery.min.js',
      deps: ['jquery']
    },
    'wizard': {
      src: 'js/components/wizard/jquery.bootstrap.wizard.min.js',
      deps: ['jquery','bootstrap']
    },
    'switch': {
      src: 'js/components/switch/bootstrap-switch.min.js',
      deps: ['jquery','bootstrap']
    },
    'iCheck': {
      src: 'js/components/iCheck/icheck.min.js',
      deps: ['jquery']
    }
  },
})
