$(function() {

    $('.card').height($('.content').height() - 20);
    $('.dropdown-toggle').dropdown();

    /*
     * 点击让搜索框整体变白，失去焦点是变回原来颜色
     */

    $('.form-control').on({
        focus: function() {
            $('.input-group-addon').css('background-color', '#FFFFFF');
        },
        blur: function() {
            $('.input-group-addon').css('background-color', '#F3F2EE');
        }
    });
    /*
     * 点击左侧菜单，添加到tab页面里
     */
    $('.sidebar .sidebar-wrapper>.nav [data-toggle="collapse"]~div>ul>li>a').on('click', function() {
        if ($(this).hasClass('open')) {
            console.log('open');
            $('.sidebar .sidebar-wrapper>.nav [data-toggle="collapse"]~div>ul>li').removeClass('active');
            $(this).parent().addClass('active');
            $('.nav-tabs a[href=' + '#' + $(this).attr('data-menu-id') + ']').trigger('click');
        } else {
            $(this).addClass('open');
            $('.sidebar .sidebar-wrapper>.nav [data-toggle="collapse"]~div>ul>li').removeClass('active');
            $(this).parent().addClass('active');
            var tab = $('<li role="presentation"><a href=' + '#' + $(this).attr('data-menu-id') + ' role="tab" data-toggle="tab">' + $(this).text() + '</a></li>');
            $('.nav.nav-tabs.main').append(tab);
            $('.nav-tabs a[href=' + '#' + $(this).attr('data-menu-id') + ']').trigger('click');
        }
    });
    $('.nav-tabs').on('click', 'a', function() {
        $(this).tab('show');
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
})
