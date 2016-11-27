$(function() {

    $('.card').height($('.content').height() - 20);
    $('.main.tab-content').height($('.card').height() - 81);

    //下拉菜单
    $('.dropdown-toggle').dropdown();

    /*
     * 点击让搜索框整体变白，失去焦点是变回原来颜色
     */

    $('.navbar-form .form-control').on({
        focus: function() {
            $('.input-group-addon').css('background-color', '#FFFFFF');
        },
        blur: function() {
            $('.input-group-addon').css('background-color', '#F3F2EE');
        }
    });
    $('.nav-tabs').on('click', 'a', function() {
        var _this = this;
        $(this).tab('show');
        $('.sidebar .sidebar-wrapper>.nav [data-toggle="collapse"]~div>ul>li>a').each(function() {
            if ($(this).attr('data-menu-id') == $(_this).attr('href').substring(1)) {
                $('.sidebar .sidebar-wrapper>.nav [data-toggle="collapse"]~div>ul>li').removeClass('active');
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
            $('.sidebar .sidebar-wrapper>.nav [data-toggle="collapse"]~div>ul>li>a').each(function() {
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
    $('.sidebar .sidebar-wrapper>.nav [data-toggle="collapse"]~div>ul').on('click', 'li>a', function() {
        //判断此tab页有没有打开 如果打开定位到此tab页面 如果没有打开就显示此页
        if ($(this).hasClass('open')) {
            console.log('open');
            $('.sidebar .sidebar-wrapper>.nav [data-toggle="collapse"]~div>ul>li').removeClass('active');
            $(this).parent().addClass('active');
            $('.nav-tabs a[href=' + '#' + $(this).attr('data-menu-id') + ']').trigger('click');
        } else {
            $(this).addClass('open');
            $('.sidebar .sidebar-wrapper>.nav [data-toggle="collapse"]~div>ul>li').removeClass('active');
            $(this).parent().addClass('active');
            var tab = $('<li role="presentation"><a href=' + '#' + $(this).attr('data-menu-id') + ' role="tab" data-toggle="tab">' + $(this).text() + '<i class="ti-close"></i></a></li>');
            $('.nav.nav-tabs.main').append(tab);
            $('.nav-tabs a[href=' + '#' + $(this).attr('data-menu-id') + ']').trigger('click');
        }
    });
    /*
     * sweet alert 2
     */
    $('.btn1').on('click', function() {
        swal({
            title: "Here's a message!",
            buttonsStyling: false,
            confirmButtonClass: 'btn btn-primary btn-lg'
        });
    });
    $('.btn2').on('click', function() {
        swal({
            title: "Good job!",
            type: 'success',
            text: 'You clicked the button!',
            buttonsStyling: false,
            confirmButtonClass: 'btn btn-success btn-lg'
        });
    });
    $('.btn3').on('click', function() {
        swal({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            buttonsStyling: false,
            confirmButtonClass: 'btn btn-primary',
            cancelButtonClass: 'btn btn-danger',
            confirmButtonText: 'Yes, delete it!'
        }).then(function() {
            swal({
                title: 'Deleted!',
                text: 'Your file has been deleted.',
                type: 'success',
                buttonsStyling: false,
                confirmButtonClass: 'btn btn-success btn-lg'
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
            confirmButtonClass: 'btn btn-primary',
            cancelButtonClass: 'btn btn-danger',
            confirmButtonText: 'Yes, delete it!'
        }).then(function() {
            swal({
                title: 'Deleted!',
                text: 'Your file has been deleted.',
                type: 'success',
                buttonsStyling: false,
                confirmButtonClass: 'btn btn-success btn-lg'
            });
        }, function(dismiss) {
            if (dismiss === 'cancel') {
                swal({
                    title: 'Cancelled!',
                    text: 'Your imaginary file is safe :)',
                    type: 'error',
                    buttonsStyling: false,
                    confirmButtonClass: 'btn btn-danger btn-lg'
                });
            }
        });
    });

    /*
     * 警告框的设置
     */

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
    /*
     * 设置datetimepicker
     */
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
})

/*
 * 设置validator
 */

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
