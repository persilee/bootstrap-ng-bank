/*! =========================================================
 *
 * Paper Dashboard PRO - V1.1.0
 *
 * =========================================================
 *
 * Copyright 2016 Creative Tim
 * Available with purchase of license from http://www.creative-tim.com/product/paper-dashboard-pro
 *
 *                       _oo0oo_
 *                      o8888888o
 *                      88" . "88
 *                      (| -_- |)
 *                      0\  =  /0
 *                    ___/`---'\___
 *                  .' \\|     |// '.
 *                 / \\|||  :  |||// \
 *                / _||||| -:- |||||- \
 *               |   | \\\  -  /// |   |
 *               | \_|  ''\---/''  |_/ |
 *               \  .-\__  '-'  ___/-. /
 *             ___'. .'  /--.--\  `. .'___
 *          ."" '<  `.___\_<|>_/___.' >' "".
 *         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
 *         \  \ `_.   \_ __\ /__ _/   .-` /  /
 *     =====`-.____`.___ \_____/___.-`___.-'=====
 *                       `=---='
 *
 *     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *
 *               Buddha Bless:  "No Bugs"
 *
 * ========================================================= */

var fixedTop = false;

var mobile_menu_visible = 0,
    mobile_menu_initialized = false,
    toggle_initialized = false,
    bootstrap_nav_initialized = false,
    $sidebar,
    isWindows;

<<<<<<< HEAD
(function(){
    isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;

    if (isWindows && !$('body').hasClass('sidebar-mini')){
       // if we are on windows OS we activate the perfectScrollbar function
       $('.sidebar .sidebar-wrapper, .main-panel').perfectScrollbar();

       $('html').addClass('perfect-scrollbar-on');
   } else {
       $('html').addClass('perfect-scrollbar-off');
   }
})();

$(document).ready(function(){
    window_width = $(window).width();
    $sidebar = $('.sidebar');

    if($('body').hasClass('sidebar-mini')){
=======
(function() {
    isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;

    if (isWindows && !$('body').hasClass('sidebar-mini')) {
        // if we are on windows OS we activate the perfectScrollbar function
        $('.sidebar .sidebar-wrapper, .main-panel').perfectScrollbar();

        $('html').addClass('perfect-scrollbar-on');
    } else {
        $('html').addClass('perfect-scrollbar-off');
    }
})();

$(document).ready(function() {
    window_width = $(window).width();
    $sidebar = $('.sidebar');

    if ($('body').hasClass('sidebar-mini')) {
>>>>>>> fa24ee786ca8f0c11a557f6b64923726f60d0ab3
        pdp.misc.sidebar_mini_active = true;
    }

    pdp.initSidebarsCheck();

    pdp.initMinimizeSidebar();

<<<<<<< HEAD
    $('.form-control').on("focus", function(){
        $(this).parent('.input-group').addClass("input-group-focus");
    }).on("blur", function(){
=======
    $('.form-control').on("focus", function() {
        $(this).parent('.input-group').addClass("input-group-focus");
    }).on("blur", function() {
>>>>>>> fa24ee786ca8f0c11a557f6b64923726f60d0ab3
        $(this).parent(".input-group").removeClass("input-group-focus");
    });

    //  Activate the tooltips
    $('[rel="tooltip"]').tooltip();

    // Init Tags Input
<<<<<<< HEAD
    if($(".tagsinput").length != 0){
=======
    if ($(".tagsinput").length != 0) {
>>>>>>> fa24ee786ca8f0c11a557f6b64923726f60d0ab3
        $(".tagsinput").tagsInput();
    }

    //  Init Bootstrap Select Picker
<<<<<<< HEAD
    if($(".selectpicker").length != 0){
=======
    if ($(".selectpicker").length != 0) {
>>>>>>> fa24ee786ca8f0c11a557f6b64923726f60d0ab3
        $(".selectpicker").selectpicker({
            size: 9
        });
    }


});



// activate collapse right menu when the windows is resized
<<<<<<< HEAD
$(window).resize(function(){
=======
$(window).resize(function() {
>>>>>>> fa24ee786ca8f0c11a557f6b64923726f60d0ab3
    pdp.initSidebarsCheck();

});

pdp = {
<<<<<<< HEAD
    misc:{
=======
    misc: {
>>>>>>> fa24ee786ca8f0c11a557f6b64923726f60d0ab3
        navbar_menu_visible: 0,
        active_collapse: true,
        disabled_collapse_init: 0

    },
<<<<<<< HEAD
    initSidebarsCheck: function(){
        // Init navigation toggle for small screens
        if($(window).width() <= 991){
            if($sidebar.length != 0){
=======
    initSidebarsCheck: function() {
        // Init navigation toggle for small screens
        if ($(window).width() <= 991) {
            if ($sidebar.length != 0) {
>>>>>>> fa24ee786ca8f0c11a557f6b64923726f60d0ab3
                pdp.initSidebarMenu();
            } else {
                pdp.initBootstrapNavbarMenu();
            }
<<<<<<< HEAD
        } else if(mobile_menu_initialized == true){
=======
        } else if (mobile_menu_initialized == true) {
>>>>>>> fa24ee786ca8f0c11a557f6b64923726f60d0ab3
            // reset all the additions that we made for the sidebar wrapper only if the screen is bigger than 991px
            $sidebar_wrapper.find('.navbar-form').remove();
            $sidebar_wrapper.find('.nav-mobile-menu').remove();

            mobile_menu_initialized = false;
        }
    },

<<<<<<< HEAD
    initMinimizeSidebar: function(){

        // when we are on a Desktop Screen and the collapse is triggered we check if the sidebar mini is active or not. If it is active then we don't let the collapse to show the elements because the elements from the collapse are showing on the hover state over the icons in sidebar mini, not on the click.
        $('.sidebar .collapse').on('show.bs.collapse',function(){
            if($(window).width() > 991){
                if(pdp.misc.sidebar_mini_active == true){
                    return false;
                } else{
=======
    initMinimizeSidebar: function() {

        // when we are on a Desktop Screen and the collapse is triggered we check if the sidebar mini is active or not. If it is active then we don't let the collapse to show the elements because the elements from the collapse are showing on the hover state over the icons in sidebar mini, not on the click.
        $('.sidebar .collapse').on('show.bs.collapse', function() {
            if ($(window).width() > 991) {
                if (pdp.misc.sidebar_mini_active == true) {
                    return false;
                } else {
>>>>>>> fa24ee786ca8f0c11a557f6b64923726f60d0ab3
                    return true;
                }
            }
        });

<<<<<<< HEAD
        $('#minimizeSidebar').click(function(){
            var $btn = $(this);

            if(pdp.misc.sidebar_mini_active == true){
=======
        $('#minimizeSidebar').click(function() {
            var $btn = $(this);

            if (pdp.misc.sidebar_mini_active == true) {
>>>>>>> fa24ee786ca8f0c11a557f6b64923726f60d0ab3
                $('body').removeClass('sidebar-mini');
                $btn.html('<i class="ti-more-alt"></i>');
                pdp.misc.sidebar_mini_active = false;

<<<<<<< HEAD
                if(isWindows){
                    $('.sidebar .sidebar-wrapper').perfectScrollbar();
                }

            }else{

                $('.sidebar .collapse').collapse('hide').on('hidden.bs.collapse',function(){
                    $(this).css('height','auto');
                });

                if(isWindows){
                    $('.sidebar .sidebar-wrapper').perfectScrollbar('destroy');
                }

                setTimeout(function(){
                    $('body').addClass('sidebar-mini');
                    $btn.html('<i class="ti-menu-alt"></i>');

                    $('.sidebar .collapse').css('height','auto');
                    pdp.misc.sidebar_mini_active = true;
                },300);
            }

            // we simulate the window Resize so the charts will get updated in realtime.
            var simulateWindowResize = setInterval(function(){
                window.dispatchEvent(new Event('resize'));
            },180);

            // we stop the simulation of Window Resize after the animations are completed
            setTimeout(function(){
                clearInterval(simulateWindowResize);
            },1000);
        });
    },

    initSidebarMenu: function(){
        $sidebar_wrapper = $('.sidebar-wrapper');

        if(!mobile_menu_initialized){
=======
                if (isWindows) {
                    $('.sidebar .sidebar-wrapper').perfectScrollbar();
                }

            } else {

                $('.sidebar .collapse').collapse('hide').on('hidden.bs.collapse', function() {
                    $(this).css('height', 'auto');
                });

                if (isWindows) {
                    $('.sidebar .sidebar-wrapper').perfectScrollbar('destroy');
                }

                setTimeout(function() {
                    $('body').addClass('sidebar-mini');
                    $btn.html('<i class="ti-menu-alt"></i>');

                    $('.sidebar .collapse').css('height', 'auto');
                    pdp.misc.sidebar_mini_active = true;
                }, 300);
            }

            // we simulate the window Resize so the charts will get updated in realtime.
            var simulateWindowResize = setInterval(function() {
                window.dispatchEvent(new Event('resize'));
            }, 180);

            // we stop the simulation of Window Resize after the animations are completed
            setTimeout(function() {
                clearInterval(simulateWindowResize);
            }, 1000);
        });
    },

    initSidebarMenu: function() {
        $sidebar_wrapper = $('.sidebar-wrapper');

        if (!mobile_menu_initialized) {
>>>>>>> fa24ee786ca8f0c11a557f6b64923726f60d0ab3

            $navbar = $('nav').find('.navbar-collapse').first().clone(true);

            nav_content = '';
            mobile_menu_content = '';

<<<<<<< HEAD
            $navbar.children('ul').each(function(){
=======
            $navbar.children('ul').each(function() {
>>>>>>> fa24ee786ca8f0c11a557f6b64923726f60d0ab3

                content_buff = $(this).html();
                nav_content = nav_content + content_buff;
            });

            nav_content = '<ul class="nav nav-mobile-menu">' + nav_content + '</ul>';

            $navbar_form = $('nav').find('.navbar-form').clone(true);

            $sidebar_nav = $sidebar_wrapper.find(' > .nav');

            // insert the navbar form before the sidebar list
            $nav_content = $(nav_content);
            $nav_content.insertBefore($sidebar_nav);
            $navbar_form.insertBefore($nav_content);

            $(".sidebar-wrapper .dropdown .dropdown-menu > li > a").click(function(event) {
                event.stopPropagation();

            });

            mobile_menu_initialized = true;
        } else {
<<<<<<< HEAD
            if($(window).width() > 991){
=======
            if ($(window).width() > 991) {
>>>>>>> fa24ee786ca8f0c11a557f6b64923726f60d0ab3
                // reset all the additions that we made for the sidebar wrapper only if the screen is bigger than 991px
                $sidebar_wrapper.find('.navbar-form').remove();
                $sidebar_wrapper.find('.nav-mobile-menu').remove();

                mobile_menu_initialized = false;
            }
        }

<<<<<<< HEAD
        if(!toggle_initialized){
            $toggle = $('.navbar-toggle');

            $toggle.click(function (){

                if(mobile_menu_visible == 1) {
                    $('html').removeClass('nav-open');

                    $('.close-layer').remove();
                    setTimeout(function(){
=======
        if (!toggle_initialized) {
            $toggle = $('.navbar-toggle');

            $toggle.click(function() {

                if (mobile_menu_visible == 1) {
                    $('html').removeClass('nav-open');

                    $('.close-layer').remove();
                    setTimeout(function() {
>>>>>>> fa24ee786ca8f0c11a557f6b64923726f60d0ab3
                        $toggle.removeClass('toggled');
                    }, 400);

                    mobile_menu_visible = 0;
                } else {
<<<<<<< HEAD
                    setTimeout(function(){
=======
                    setTimeout(function() {
>>>>>>> fa24ee786ca8f0c11a557f6b64923726f60d0ab3
                        $toggle.addClass('toggled');
                    }, 430);

                    main_panel_height = $('.main-panel')[0].scrollHeight;
                    $layer = $('<div class="close-layer"></div>');
<<<<<<< HEAD
                    $layer.css('height',main_panel_height + 'px');
                    $layer.appendTo(".main-panel");


                    setTimeout(function(){
=======
                    $layer.css('height', main_panel_height + 'px');
                    $layer.appendTo(".main-panel");


                    setTimeout(function() {
>>>>>>> fa24ee786ca8f0c11a557f6b64923726f60d0ab3
                        $layer.addClass('visible');
                    }, 100);

                    $layer.click(function() {
                        $('html').removeClass('nav-open');
                        mobile_menu_visible = 0;

                        $layer.removeClass('visible');

<<<<<<< HEAD
                         setTimeout(function(){
                            $layer.remove();
                            $toggle.removeClass('toggled');

                         }, 400);
=======
                        setTimeout(function() {
                            $layer.remove();
                            $toggle.removeClass('toggled');

                        }, 400);
>>>>>>> fa24ee786ca8f0c11a557f6b64923726f60d0ab3
                    });

                    $('html').addClass('nav-open');
                    mobile_menu_visible = 1;

                }
            });

            toggle_initialized = true;
        }

    },

<<<<<<< HEAD
      initBootstrapNavbarMenu: debounce(function(){

        if(!bootstrap_nav_initialized){
=======
    initBootstrapNavbarMenu: debounce(function() {

        if (!bootstrap_nav_initialized) {
>>>>>>> fa24ee786ca8f0c11a557f6b64923726f60d0ab3
            $navbar = $('nav').find('.navbar-collapse').first().clone(true);

            nav_content = '';
            mobile_menu_content = '';

            //add the content from the regular header to the mobile menu
<<<<<<< HEAD
            $navbar.children('ul').each(function(){
=======
            $navbar.children('ul').each(function() {
>>>>>>> fa24ee786ca8f0c11a557f6b64923726f60d0ab3
                content_buff = $(this).html();
                nav_content = nav_content + content_buff;
            });

            nav_content = '<ul class="nav nav-mobile-menu">' + nav_content + '</ul>';

            $navbar.html(nav_content);
            $navbar.addClass('off-canvas-sidebar');

            // append it to the body, so it will come from the right side of the screen
            $('body').append($navbar);

            $toggle = $('.navbar-toggle');

            $navbar.find('a').removeClass('btn btn-round btn-default');
            $navbar.find('button').removeClass('btn-round btn-fill btn-info btn-primary btn-success btn-danger btn-warning btn-neutral');
            $navbar.find('button').addClass('btn-simple btn-block');

<<<<<<< HEAD
            $toggle.click(function (){
                if(mobile_menu_visible == 1) {
                    $('html').removeClass('nav-open');

                    $('.close-layer').remove();
                    setTimeout(function(){
=======
            $toggle.click(function() {
                if (mobile_menu_visible == 1) {
                    $('html').removeClass('nav-open');

                    $('.close-layer').remove();
                    setTimeout(function() {
>>>>>>> fa24ee786ca8f0c11a557f6b64923726f60d0ab3
                        $toggle.removeClass('toggled');
                    }, 400);

                    mobile_menu_visible = 0;
                } else {
<<<<<<< HEAD
                    setTimeout(function(){
=======
                    setTimeout(function() {
>>>>>>> fa24ee786ca8f0c11a557f6b64923726f60d0ab3
                        $toggle.addClass('toggled');
                    }, 430);

                    $layer = $('<div class="close-layer"></div>');
                    $layer.appendTo(".wrapper-full-page");

<<<<<<< HEAD
                    setTimeout(function(){
=======
                    setTimeout(function() {
>>>>>>> fa24ee786ca8f0c11a557f6b64923726f60d0ab3
                        $layer.addClass('visible');
                    }, 100);


                    $layer.click(function() {
                        $('html').removeClass('nav-open');
                        mobile_menu_visible = 0;

                        $layer.removeClass('visible');

<<<<<<< HEAD
                         setTimeout(function(){
                            $layer.remove();
                            $toggle.removeClass('toggled');

                         }, 400);
=======
                        setTimeout(function() {
                            $layer.remove();
                            $toggle.removeClass('toggled');

                        }, 400);
>>>>>>> fa24ee786ca8f0c11a557f6b64923726f60d0ab3
                    });

                    $('html').addClass('nav-open');
                    mobile_menu_visible = 1;

                }

            });
            bootstrap_nav_initialized = true;
        }
    }, 500),
}


// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.

function debounce(func, wait, immediate) {
<<<<<<< HEAD
	var timeout;
	return function() {
		var context = this, args = arguments;
		clearTimeout(timeout);
		timeout = setTimeout(function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		}, wait);
		if (immediate && !timeout) func.apply(context, args);
	};
};


(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
=======
    var timeout;
    return function() {
        var context = this,
            args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        }, wait);
        if (immediate && !timeout) func.apply(context, args);
    };
};


(function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
>>>>>>> fa24ee786ca8f0c11a557f6b64923726f60d0ab3

ga('create', 'UA-46172202-1', 'auto');
ga('send', 'pageview');
