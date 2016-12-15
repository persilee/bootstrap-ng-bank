[bootstrap-ng-bank](http://192.168.232.10:8088/)
====================
###### Tags  [v0.1.1](https://github.com/persilee/bootstrap-ng-bank/releases/tag/v0.1.1)[v0.1.2](https://github.com/persilee/bootstrap-ng-bank/releases/tag/v0.1.2)

## 目录结构

```

bootstrap-ng-bank/
├── css/
│   ├── style.css
│   ├── customer.css
│   ├── theme.css
│   ├── ...
│   └── azure.css
├── js/
│   ├── ...
│   └── main.js
├── data/
│   └── data1.json
├── bower_components
│   ├── bootstrap
│   └──components ...
├── fonts/
│    ├── ...
│    ├── glyphicons-halflings-regular.eot
│    ├── glyphicons-halflings-regular.svg
│    ├── glyphicons-halflings-regular.ttf
│    └── glyphicons-halflings-regular.woff
├── themify-icons/
│   ├── ...
│   └── themify-icons.css
├── index.html
└── login.html

```

  整个项目是基于 [bootstrap v3.3.7]() 、[jquery v1.11.1]() 版本和一些插件完成，主要的文件`index.html`、 `main.js` 、 `style.css` .

## 插件
  1. 字体图标 `themify-icons` http://themify.me/themify-icons
  2. 按钮 `Buttons` http://unicorn-ui.com/buttons/builder/
  3. 下拉框 `bootstrap-select` http://silviomoreto.github.io/bootstrap-select/
  4. 单选框和复选框 `bootstrap-switch` http://bootstrap-switch.org
  5. 表格 `bootstrap-table` http://bootstrap-table.wenzhixin.net.cn
  6. 对话框 `sweetalert2` https://limonte.github.io/sweetalert2/
  7. 时间插件 `bootstrap-datetimepicker` http://eonasdan.github.io/bootstrap-datetimepicker/
  8. 表单验证 `bootstrapvalidator` http://formvalidation.io/examples/

#### `index.html`
  项目的布局分为以下几块：
```html
   <div class="wrapper">
     <div class="sidebar" data-color="" data-image="">
       <div class="logo">...</div>
       <div class="mini-logo hidden">...</div>
       <div class="sidebar-wrapper">...</div>
       <div class="sidebar-background">...</div>
     </div>
     <div class="main-panel">
       <nav class="navbar navbar-default">
         <div class="navbar-minimize">...</div>
         <div class="collapse navbar-collapse">
           <form class="navbar-form navbar-left navbar-search-form" role="search">...</form>
           <ul class="nav navbar-nav navbar-right">...</ul>
         </div>
       </nav>
       <div class="content">
         <div class="nav-tabs-navigation">
           <ul class="nav nav-tabs main" role="tablist">...</ul>
         </div>
         <div class="tab-content main">...</div>
       </div>
     </div>
   </div>   
```
#### `main.js`
  主要是功能的实现和插件的初始化
  ```js
  var branch = {
      init: function() {
        this.renderData();
        this.initDropdown();
        this.initTooltip();
        this.initPopover();
        this.initNavigator();
        this.initSweetAlert();
        this.initNotify();
        this.initDatetimepicker();
        this.initValidator();
        this.initBootstrapTable();
        this.transactionDemo();
      },
/**组件的初始化 start *************************/
  //下拉菜单
  initDropdown : function() {
    ...
  },
  //提示
  initTooltip : function() {
    ...
  },
  /*
   * sweet alert 2
   */
  initSweetAlert : function(){
    ...
  },
    ...
/**组件的初始化 end ****************************/

/**页面渲染部分 start **************************/
  renderData: function() {
    ...
  },
/**页面渲染部分 end ****************************/

/** 交易演示 -- 设置客户信息修改 start ***********/
  transactionDemo : function(){
    ...
  }
}
/** 交易演示 -- 设置客户信息修改 end *************/    
  ```
#### `style.css`
  这个框架的全部样式
