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
      $('.dropdown-toggle').dropdown();
    },
    //提示
    initTooltip : function() {
      $('[data-toggle=tooltip]').tooltip('show');
    },
    //弹窗
    initPopover : function(){
      $('[data-toggle=popover]').popover('show');
    },
    //windows系统滚动条优化
    initNavigator : function(){
      var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
      if (isWindows) {
          $('.sidebar .sidebar-wrapper').perfectScrollbar();
          $('.main.tab-content').perfectScrollbar();
      }
    },
    /*
     * sweet alert 2
     */
    initSweetAlert : function(){
      $('.btn1').on('click', function() {
          swal({
              title: "Here's a message!",
              buttonsStyling: false,
              confirmButtonClass: 'button button-primary button-pill button-small'
          });
      });
      $('.btn2').on('click', function() {
          swal({
              title: "Good job!",
              type: 'success',
              text: 'You clicked the button!',
              buttonsStyling: false,
              confirmButtonClass: 'button button-action button-pill button-small'
          });
      });
      $('.btn3').on('click', function() {
          swal({
              title: 'Are you sure?',
              text: "You won't be able to revert this!",
              type: 'warning',
              showCancelButton: true,
              buttonsStyling: false,
              confirmButtonClass: 'button button-primary button-pill button-small',
              cancelButtonClass: 'button button-caution button-pill button-small',
              confirmButtonText: 'Yes, delete it!'
          }).then(function() {
              swal({
                  title: 'Deleted!',
                  text: 'Your file has been deleted.',
                  type: 'success',
                  buttonsStyling: false,
                  confirmButtonClass: 'button button-action button-pill button-small'
              });
          });
      });
      $('.btn4').on('click', function() {
          swal({
              title: 'Are you sure?',
              text: "You won't be able to revert this!",
              type: 'warning',
              showCancelButton: true,
              buttonsStyling: false,
              confirmButtonClass: 'button button-primary button-pill button-small',
              cancelButtonClass: 'button button-caution button-pill button-small',
              confirmButtonText: 'Yes, delete it!'
          }).then(function() {
              swal({
                  title: 'Deleted!',
                  text: 'Your file has been deleted.',
                  type: 'success',
                  buttonsStyling: false,
                  confirmButtonClass: 'button button-action button-pill button-small'
              });
          }, function(dismiss) {
              if (dismiss === 'cancel') {
                  swal({
                      title: 'Cancelled!',
                      text: 'Your imaginary file is safe :)',
                      type: 'error',
                      buttonsStyling: false,
                      confirmButtonClass: 'button button-caution button-pill button-small'
                  });
              }
          });
      });
    },
    /*
     * 警告框的设置 notify
     */
    initNotify : function(){
      $('.notifyTL').on('click', function() {
          var color = ['success', 'info', 'warning', 'danger'];
          var c_type = color[Math.floor(Math.random() * 4)];
          $.notify({
              // options
              icon: 'ti-face-smile',
              message: 'Turning standard Bootstrap alerts into "notify" like notifications',
          }, {
              // settings
              type: c_type,
              placement: {
                  from: "top",
                  align: "left"
              }
          });
      });
      $('.notifyTC').on('click', function() {
          var color = ['success', 'info', 'warning', 'danger'];
          var c_type = color[Math.floor(Math.random() * 4)];
          $.notify({
              // options
              icon: 'ti-face-smile',
              message: 'Turning standard Bootstrap alerts into "notify" like notifications',
          }, {
              // settings
              type: c_type,
              placement: {
                  from: "top",
                  align: "center"
              }
          });
      });
      $('.notifyTR').on('click', function() {
          var color = ['success', 'info', 'warning', 'danger'];
          var c_type = color[Math.floor(Math.random() * 4)];
          $.notify({
              // options
              icon: 'ti-face-smile',
              message: 'Turning standard Bootstrap alerts into "notify" like notifications',
          }, {
              // settings
              type: c_type,
              placement: {
                  from: "top",
                  align: "right"
              }
          });
      });
      $('.notifyBL').on('click', function() {
          var color = ['success', 'info', 'warning', 'danger'];
          var c_type = color[Math.floor(Math.random() * 4)];
          $.notify({
              // options
              icon: 'ti-face-smile',
              message: 'Turning standard Bootstrap alerts into "notify" like notifications',
          }, {
              // settings
              type: c_type,
              animate: {
                  enter: 'animated fadeInUp',
                  exit: 'animated fadeOutDown'

              },
              placement: {
                  from: "bottom",
                  align: "left"
              }
          });
      });
      $('.notifyBC').on('click', function() {
          var color = ['success', 'info', 'warning', 'danger'];
          var c_type = color[Math.floor(Math.random() * 4)];
          $.notify({
              // options
              icon: 'ti-face-smile',
              message: 'Turning standard Bootstrap alerts into "notify" like notifications',
          }, {
              // settings
              type: c_type,
              animate: {
                  enter: 'animated fadeInUp',
                  exit: 'animated fadeOutDown'

              },
              placement: {
                  from: "bottom",
                  align: "center"
              }
          });
      });
      $('.notifyBR').on('click', function() {
          var color = ['success', 'info', 'warning', 'danger'];
          var c_type = color[Math.floor(Math.random() * 4)];
          $.notify({
              // options
              icon: 'ti-face-smile',
              message: 'Turning standard Bootstrap alerts into "notify" like notifications',
          }, {
              // settings
              type: c_type,
              animate: {
                  enter: 'animated fadeInUp',
                  exit: 'animated fadeOutDown'

              },
              placement: {
                  from: "bottom",
                  align: "right"
              }
          });
      });
    },
    /*
     * 设置datetimepicker
     */
    initDatetimepicker : function() {
      $('#datetimepicker1').datetimepicker();
      $('#datetimepicker3').datetimepicker({
          format: 'LT'
      });
      $('#datetimepicker10').datetimepicker({
          viewMode: 'years',
          format: 'MM/YYYY',
          debug: false
      });
      $('#datetimepicker12').datetimepicker({
          inline: true
              // sideBySide: true
      });
    },
    /*
     * 设置validator
     */
    initValidator : function(){
      function randomNumber(min, max) {
          return Math.floor(Math.random() * (max - min + 1) + min);
      }
      $('#captchaOperation').html([randomNumber(1, 100), '+', randomNumber(1, 200), '='].join(' '));

      $('#basicBootstrapForm').bootstrapValidator({
          message: 'This value is not valid',
          autoFocus: true,
          feedbackIcons: {
              valid: 'fa fa-check',
              invalid: 'fa fa-times',
              validating: 'fa fa-refresh'
          },
          fields: {
              firstName: {
                  row: '.col-xs-4',
                  validators: {
                      notEmpty: {
                          message: 'The first name is required'
                      }
                  }
              },
              lastName: {
                  row: '.col-xs-4',
                  validators: {
                      notEmpty: {
                          message: 'The last name is required'
                      }
                  }
              },
              username: {
                  trigger: 'blur',
                  validators: {
                      notEmpty: {
                          message: 'The username is required'
                      },
                      stringLength: {
                          min: 6,
                          max: 30,
                          message: 'The username must be more than 6 and less than 30 characters long'
                      },
                      regexp: {
                          regexp: /^[a-zA-Z0-9_\.]+$/,
                          message: 'The username can only consist of alphabetical, number, dot and underscore'
                      }
                  }
              },
              email: {
                  validators: {
                      notEmpty: {
                          message: 'The email address is required'
                      },
                      emailAddress: {
                          message: 'The input is not a valid email address'
                      }
                  }
              },
              password: {
                  validators: {
                      notEmpty: {
                          message: 'The password is required'
                      },
                      different: {
                          field: 'username',
                          message: 'The password cannot be the same as username'
                      }
                  }
              },
              gender: {
                  validators: {
                      notEmpty: {
                          message: 'The gender is required'
                      }
                  }
              },
              captcha: {
                  validators: {
                      callback: {
                          message: 'Wrong answer',
                          callback: function(value, validator, $field) {
                              var items = $('#captchaOperation').html().split(' '),
                                  sum = parseInt(items[0]) + parseInt(items[2]);
                              return value == sum;
                          }
                      }
                  }
              },
              agree: {
                  validators: {
                      notEmpty: {
                          message: 'You must agree with the terms and conditions'
                      }
                  }
              }
          }
      });
    },
    /*
     * 设置bootstrap table
     */
    initBootstrapTable : function(){
      // //先销毁表格
      // $('#eventsTable').bootstrapTable('destroy');
      var $result = $('#eventsResult');

      $('#eventsTable').on('all.bs.table', function(e, name, args) {
              console.log('Event:', name, ', data:', args);
          })
          .on('click-row.bs.table', function(e, row, $element) {
              $result.text('Event: click-row.bs.table');
          })
          .on('dbl-click-row.bs.table', function(e, row, $element) {
              $result.text('Event: dbl-click-row.bs.table');
          })
          .on('sort.bs.table', function(e, name, order) {
              $result.text('Event: sort.bs.table');
          })
          .on('check.bs.table', function(e, row) {
              $result.text('Event: check.bs.table');
          })
          .on('uncheck.bs.table', function(e, row) {
              $result.text('Event: uncheck.bs.table');
          })
          .on('check-all.bs.table', function(e) {
              $result.text('Event: check-all.bs.table');
          })
          .on('uncheck-all.bs.table', function(e) {
              $result.text('Event: uncheck-all.bs.table');
          })
          .on('load-success.bs.table', function(e, data) {
              $result.text('Event: load-success.bs.table');
          })
          .on('load-error.bs.table', function(e, status) {
              $result.text('Event: load-error.bs.table');
          })
          .on('column-switch.bs.table', function(e, field, checked) {
              $result.text('Event: column-switch.bs.table');
          })
          .on('page-change.bs.table', function(e, number, size) {
              $result.text('Event: page-change.bs.table');
          })
          .on('search.bs.table', function(e, text) {
              $result.text('Event: search.bs.table');
          });

    },
    /*
     * bootstrap-select初始化
     */
    initBootstapSelect : function(){
      $('.selectpicker').selectpicker();
    },
/**组件的初始化 end ****************************/


/**页面渲染部分 start **************************/
    renderData: function() {
            //主题设置
            $('.switch-onColor').bootstrapSwitch();
            $('.nav.navbar-nav .theme .dropdown-menu>li>a').click(function(e) {
                e.stopPropagation();
            })
            $('.nav.navbar-nav .theme .badge').click(function() {
                $(this).siblings().removeClass('active');
                $(this).addClass('active');
                var new_color = $(this).data('color');
                $('.sidebar').attr('data-color', new_color);
                $('#minimizeSidebar').attr('data-color', new_color).addClass('hasColor');
                $('#themes').attr('href', './css/themes/' + new_color + '.css');
                if ($.cookie('themeColor') == '') {
                    $.cookie('themeColor', new_color, {
                        expires: 30
                    });
                } else {
                    $.cookie('themeColor', '', {
                        expires: -1
                    });
                    $.cookie('themeColor', new_color, {
                        expires: 30
                    });
                }
            });
            $('.nav.navbar-nav .theme .adjustments-line .switch-onColor.debar').on('switchChange.bootstrapSwitch', function(event, state) {
                if (state == false) {
                    $.cookie('switchdebar', '', {
                        expires: -1
                    });
                    $.cookie('switchdebar', 'false', {
                        expires: 30
                    });
                    miniSidebarOn();
                } else {
                    $.cookie('switchdebar', '', {
                        expires: -1
                    });
                    $.cookie('switchdebar', 'true', {
                        expires: 30
                    });
                    miniSidebarOff();
                }
            });
            $('.nav.navbar-nav .theme .adjustments-line .switch-onColor.img').on('switchChange.bootstrapSwitch', function(event, state) {
                if (state == false) {
                    $.cookie('switchImg', '', {
                        expires: -1
                    });
                    $.cookie('switchImg', 'false', {
                        expires: 30
                    });
                    $('.sidebar .sidebar-background').css('background-image', 'url("")');
                } else {
                    $.cookie('switchImg', '', {
                        expires: -1
                    });
                    $.cookie('switchImg', 'true', {
                        expires: 30
                    });
                    $('.sidebar .sidebar-background').css('background-image', 'url("' + $.cookie('themeImg') + '")');
                }
            });
            $('.nav.navbar-nav .theme .img-holder').click(function() {
                $(this).parent('li').siblings().removeClass('active');
                $(this).parent('li').addClass('active');
                var new_image = $(this).find("img").attr('src');
                $sidebarBackground = $('.sidebar .sidebar-background');
                $sidebarBackground.fadeOut('fast', function() {
                    $sidebarBackground.css('background-image', 'url("' + new_image + '")');
                    $sidebarBackground.fadeIn('fast');
                });
                if ($.cookie('themeImg') == '') {
                    $.cookie('themeImg', new_image, {
                        expires: 30
                    });
                } else {
                    $.cookie('themeImg', '', {
                        expires: -1
                    });
                    $.cookie('themeImg', new_image, {
                        expires: 30
                    });
                }
            });
            /*
             *点击收缩菜单
             */
            $('.user .photo').tooltip('toggle');

            function miniSidebarOn() {
                $('#minimizeSidebar').find('i').attr('class', 'ti-menu-alt');
                $('.sidebar').addClass('mini');
                $('body').addClass('sidebar-mini');
                $('.sidebar .logo').addClass('hidden');
                $('.mini-logo').removeClass('hidden');
                $('.user .photo').width(50);
                $('.user .info').css('display', 'none');
                $('.sidebar.mini .nav li a').attr('data-toggle', '');
            };

            function miniSidebarOff() {
                $('#minimizeSidebar').find('i').attr('class', 'ti-more-alt');
                $('.sidebar').removeClass('mini');
                $('body').removeClass('sidebar-mini');
                $('.sidebar .logo').removeClass('hidden');
                $('.mini-logo').addClass('hidden');
                $('.user .photo').width(60);
                $('.user .info').css('display', 'block');
                $('.sidebar .nav li a').attr('data-toggle', 'collapse');
                $('.sidebar .collapse').css('display', '');
            };
            var sidebar_switch = true;
            $('#minimizeSidebar').on('click', function() {
                if (sidebar_switch) {
                    miniSidebarOn();
                    sidebar_switch = false;
                } else {
                    miniSidebarOff();
                    sidebar_switch = true;
                }
            });

            //hover 时候出现菜单
            var timer = '';
            $('.user .photo').popover({
                trigger: 'manual', //触发方式
                // title:'aaa',//设置 弹出框 的标题
                html: true, // 为true的话，data-content里就能放html代码了
                placement: 'right',
                content: contentText
            }).mouseenter(function() {
                if ($('.sidebar').hasClass('mini')) {
                    $(this).popover('show');
                }
            }).mouseleave(function() {
                var _this = this;
                timer = setTimeout(function() {
                    $(_this).popover('hide');
                }, 200);
            });
            $('.user').on('mouseenter', '.popo-list', function() {
                clearTimeout(timer);
            }).on('mouseleave', '.popo-list', function() {
                $('.user .photo').popover('hide');
            });

            function contentText() {
                return [
                    '<ul class="popo-list">',
                    '<li><a href="#profile">My Profile</a></li>',
                    '<li><a href="#editprofile">Edit Profile</a></li>',
                    '<li><a href="#settings">Settings</a></li>',
                    '</ul>'
                ].join('');
            }
            $(window).resize(function() {


            });
            $('.wrapper').on('mouseenter', '.sidebar.mini .sidebar-wrapper>.nav>li.list', function() {
                $('.sidebar.mini .collapse').eq($(this).index()).css('display', 'block');
                $(this).addClass('triangle');
                $('.sidebar.mini .sidebar-wrapper>.nav li>a').click(function() {
                    event.preventDefault();
                    // event.stopPropagation();
                });
            }).on('mouseleave', '.sidebar.mini .sidebar-wrapper>.nav>li', function() {
                $('.sidebar.mini .collapse').eq($(this).index()).css('display', 'none');
                $('.sidebar.mini .sidebar-wrapper>.nav>li').removeClass('triangle');
            });



            /*
             * 点击切换tab页
             */
            $('.nav-tabs').on('click', 'a', function() {
                var _this = this;
                $(this).tab('show');
                $('.sidebar .sidebar-wrapper>.nav li>a').each(function() {
                    if ($(this).attr('data-menu-id') == $(_this).attr('href').substring(1)) {
                        $('.navbar .navbar-brand a').text($(this).text());
                        $('.sidebar .sidebar-wrapper>.nav li').removeClass('active');
                        $(this).parent().eq(0).parents('li').addClass('active');
                        $(this).parent().addClass('active');
                    }
                });
            });


            /*
             * 点击tab页上的X关闭tab页
             */
            $('.nav-tabs').on('click', 'li .ti-close', function() {
                var _this = this;
                if ($(_this).closest('li').next().length > 0) {
                    //找到下一个tab页面 出发点击事件
                    $(_this).closest('li').next().find('a').trigger('click');
                } else {
                    //如果没有下一个，找到上一个tab页面 出发点击事件
                    $(_this).closest('li').prev().find('a').trigger('click');
                };
                if ($(_this).closest('li').siblings().length == 0) {
                    //如果是最后一个弹出提示
                    swal({
                        title: "已经是最后一个了!",
                        buttonsStyling: false,
                        confirmButtonClass: 'btn btn-primary btn-lg'
                    });
                } else {
                    //移除tab标签  且  给菜单上的open开关移除
                    $(_this).closest('li').remove();
                    // $('.nav-tabs.main>li').width((($('.nav-tabs.main').width() - 1) / $('.nav-tabs.main>li').length) - 1);
                    $('.sidebar .sidebar-wrapper>.nav li>a').each(function() {
                        if ($(this).attr('data-menu-id') == $(_this).closest('a').attr('href').substring(1)) {
                            $(this).removeClass('open');
                        }
                    });
                }

                return false;
            });
            /*
             * 点击左侧菜单，添加到tab页面里
             */
            $('.sidebar .sidebar-wrapper').on('click', '.nav>li>a.transactionDemo', function() {
                $('.sidebar .sidebar-wrapper .nav ul li>a[data-menu-id=customerInformation]').trigger('click');
                $(this).parent().siblings().removeClass('active');
                $(this).parent().siblings().find('a').removeClass('active');
                $(this).parent().addClass('active');
            });
            $('.sidebar .sidebar-wrapper').on('click', '.nav ul li>a', function() {
                //判断此tab页有没有打开 如果打开定位到此tab页面 如果没有打开就显示此页
                if ($(this).hasClass('menu')) {
                    console.log('menu');
                } else {
                    if ($(this).hasClass('open')) {
                        console.log('open');
                        $('.navbar .navbar-brand a').text($(this).text());
                        $('.sidebar .sidebar-wrapper>.nav li').removeClass('active');
                        $(this).parent().addClass('active');
                        $(this).parent().eq(0).parents('li').addClass('active');
                        $('.nav-tabs a[href=' + '#' + $(this).attr('data-menu-id') + ']').trigger('click');
                    } else {
                        $(this).addClass('open');
                        $('.navbar .navbar-brand a').text($(this).text());
                        $('.sidebar .sidebar-wrapper>.nav li').removeClass('active');
                        $(this).parent().addClass('active');
                        $(this).parent().eq(0).parents('li').addClass('active');
                        var tab = $('<li role="presentation"><a href=' + '#' + $(this).attr('data-menu-id') + ' role="tab" data-toggle="tab">' + $(this).text() + '<i class="ti-close"></i></a></li>');
                        $('.nav.nav-tabs.main').append(tab);
                        // $('.nav-tabs.main>li').width((($('.nav-tabs.main').width() - 1) / $('.nav-tabs.main>li').length));
                        $('.nav-tabs a[href=' + '#' + $(this).attr('data-menu-id') + ']').trigger('click');
                    }
                }
            });

    },
/**页面渲染部分 end ****************************/

/** 交易演示 -- 设置客户信息修改 start ***********/
    transactionDemo : function(){
      $('.card-wizard input').iCheck({
          // checkboxClass: 'icheckbox_minimal-grey',
          radioClass: 'iradio_minimal-grey',
          increaseArea: '20%' // optional
      });
      //datepicker 设置
      $('.date.datepicker').datetimepicker({
          viewMode: 'years',
          format: 'YYYY/MM'
      });
      $('.card-wizard .nav-pills.main li').css('width', (100 / $('.card-wizard .nav-pills.main>li').length) + '%');
      //表单验证
      var $validator = $('#wizardForm').bootstrapValidator({
          message: 'This value is not valid',
          autoFocus: true,
          feedbackIcons: {
              valid: 'fa fa-check',
              invalid: 'fa fa-times',
              validating: 'fa fa-refresh'
          },
          fields: {
              customerType: {
                  validators: {
                      notEmpty: {
                          message: '客户类型为必填项'
                      }
                  }
              },
              documentType: {
                  validators: {
                      notEmpty: {
                          message: '证件类型为必填项'
                      }
                  }
              },
              idNo: {
                  validators: {
                      notEmpty: {
                          message: '证件号为必填项'
                      }
                  }
              },
              customerNumber: {
                  validators: {
                      notEmpty: {
                          message: '客户号为必填项'
                      }
                  }
              },
              account: {
                  validators: {
                      notEmpty: {
                          message: '账号/合约号为必填项'
                      }
                  }
              }
          }
      });
      $('#customerInformation').bootstrapWizard({
          'tabClass': 'nav nav-pills',
          'nextSelector': '.btn-next',
          'previousSelector': '.btn-back',
          onTabClick: function(tab, navigation, index) {
              // return false;
          },
          onNext: function(tab, navigation, index) {
              if (index == 1) {
                  $('#wizardForm select').each(function() {
                      if ($(this).val() == '请选择') {
                          $(this).val('');
                      }
                  });
                  $('#wizardForm').submit();
              } else if (index == 2) {
                  if ($('#customerInformationTable').bootstrapTable('getSelections').length < 1) {
                      swal({
                          title: '提示',
                          text: '您还没有选择，请选择客户信息',
                          type: 'warning',
                          buttonsStyling: false,
                          confirmButtonClass: 'button button-highlight button-pill button-small'
                      });
                      return false;
                  } else {
                      $('.card-wizard.card .card-footer .btn-next').css('display', 'none');
                      $('.card-wizard.card .card-footer .btn-finish').css('display', 'block');
                  }
              }
              var $valid = $('#wizardForm').data('bootstrapValidator').isValid();
              if (!$valid) {
                  //  $validator.focusInvalid();
                  return false;
              } else {
                  $('.card-wizard.card .card-footer .btn-back').css('display', 'block');
              }
          },
          onPrevious: function(tab, navigation, index) {
              if (index == 1) {
                  $('.card-wizard.card .card-footer .btn-next').css('display', 'block');
                  $('.card-wizard.card .card-footer .btn-finish').css('display', 'none');
              }
          }
      });
      $('.btn-customerNumber').on('click', function() {
          var sHtml = $('#modalCustomerNumber').html();
          swal({
              title: '获取客户号',
              html: sHtml,
              width: '800px',
              showCancelButton: true,
              buttonsStyling: false,
              confirmButtonClass: 'button button-primary button-pill button-small',
              cancelButtonClass: 'button button-caution button-pill button-small',
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              allowOutsideClick: false
          }).then(function() {
              swal({
                  title: '成功!',
                  text: '你获取的客户号是：010020210201.',
                  type: 'success',
                  buttonsStyling: false,
                  confirmButtonClass: 'button button-action button-pill button-small'
              });
          }).then(function() {
              $('.form-group.hasBtn input[name=customerNumber]').val('010020210201');
              $('#wizardForm').data('bootstrapValidator').updateStatus('customerNumber', 'VALIDATED').validateField('customerNumber');
          });
          $('.swal2-container.swal2-in .row .form-group select').addClass('selectpicker');
          $('.selectpicker').selectpicker();
      });
      $('.btn-account').on('click', function() {
          var sHtml = $('#modalAccount').html();
          swal({
              title: '获取账号',
              html: sHtml,
              width: '800px',
              showCancelButton: true,
              buttonsStyling: false,
              confirmButtonClass: 'button button-primary button-pill button-small',
              cancelButtonClass: 'button button-caution button-pill button-small',
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              allowOutsideClick: false
          }).then(function() {
              swal({
                  title: '成功!',
                  text: '你获取的账号号是：1263287656734017.',
                  type: 'success',
                  buttonsStyling: false,
                  confirmButtonClass: 'button button-action button-pill button-small'
              });
          }).then(function() {
              $('.form-group.hasBtn input[name=account]').val('1263287656734017');
              $('#wizardForm').data('bootstrapValidator').updateStatus('account', 'VALIDATED').validateField('account');
          });
          $('.swal2-container.swal2-in .row .form-group select').addClass('selectpicker');
          $('.selectpicker').selectpicker();
      });
      $('#customerInformationTable').bootstrapTable({
          data: [{
              customerType: 'P',
              customerNo: '010020210201',
              DocumentType: '1999-个人其他证件',
              DocumentNo: 'AD0979769890679',
              chineseName: '小明',
              englishName: 'xiaoming',
              portugalName: 'Olá.'
          }]
      });
      // var $table = $('#customerInformationTable');
      // $('#toolbar').find('select').change(function() {
      //     $table.bootstrapTable('refreshOptions', {
      //         exportDataType: $(this).val()
      //     });
      // });

      //点击 列表标签切换对应的页面
      $('.card.card-wizard .panel-body>.header .nav>li').click(function() {
          $(this).siblings().removeClass('active');
          $(this).addClass('active');
          $listContent = $('#collapseOne1 .panel-body .content>div');
          $listContent.eq($(this).index()).siblings().css('display', 'none');
          $listContent.eq($(this).index()).css('display', 'block');

      });
      //给表格添加数据或者事件
      var i = 2;
        window.operateEvents = {
            'click .add': function(e, value, row, index) {
              var $contactNumber = '0000000' + i;
              var newRow = row;
              newRow.contactNumber = $contactNumber;
              $contactTable.bootstrapTable('insertRow', {index: i, row: row});
              $contactTable.bootstrapTable('updateRow', {index: i, row: newRow});
              i++;
            },
            'click .like': function(e, value, row, index) {
                info = JSON.stringify(row).substring(0, 100);

                swal({
                    title: 'You click view icon, row: ',
                    text: info,
                    confirmButtonClass: 'btn btn-primary'
                });
                console.log(info);
                return false;
            },
            'click .edit': function(e, value, row, index) {
                info = JSON.stringify(row).substring(0, 100);

                swal({
                    title: 'You click edit icon, row: ',
                    text: info,
                    confirmButtonClass: 'btn btn-primary'
                });
                console.log(info);
                return false;
            },
            'click .remove1': function(e, value, row, index) {
                $contactTable.bootstrapTable('remove', {
                    field: 'contactNumber',
                    values: [row.contactNumber]
                });
                return false;
            },
            'click .remove': function(e, value, row, index) {
                console.log(row);
                $contactTable.bootstrapTable('remove', {
                    field: 'id',
                    values: [row.id]
                });
                return false;
            }
        };
        $(window).resize(function() {
            $table.bootstrapTable('resetView');
            $contactTable.bootstrapTable('resetView');
        });
    }

/** 交易演示 -- 设置客户信息修改 end *************/
}
