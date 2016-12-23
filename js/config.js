var module = document.getElementById('scriptid').getAttribute('module');//模块（js名称）
// requirejs 的简单配置
require.config({
    baseUrl: './',
    paths: {
        jquery: 'js/components/jquery/jquery.min',
        bootstrap: 'js/components/bootstrap/bootstrap.min',
        bootstrapValidator: 'js/components/bootstrapValidator/bootstrapValidator.min',
        bootstrapValidatorZh: 'js/components/bootstrapValidator/language/zh_CN',
        select: 'js/components/select/bootstrap-select.min'
    },
    shim: {
        bootstrap : {
            deps : [ 'jquery'],
            exports : 'bootstrap'
        },
        bootstrapValidator : {
            deps : [ 'jquery'],
            exports : 'bootstrapValidator'
        },
        bootstrapValidatorZh : {
            deps : [ 'jquery','bootstrapValidator'],
            exports : 'bootstrapValidatorZh'
        },
        select : {
            deps : [ 'jquery','bootstrap'],
            exports : 'select'
        }
    }
});

// require(['js/' + module], function(){});
