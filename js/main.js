$(function() {

    $('.card').height($('.content').height() - 20);
    $('.dropdown-toggle').dropdown();

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
        var tab = $('<li role="presentation"><a href=' + '#' + $(this).text() + ' role="tab" data-toggle="tab">' + $(this).text() + '</a></li>');
        $('.nav.nav-tabs').append(tab);
    });
    $('.nav-tabs').on('click', 'a', function() {
        $(this).tab('show');
    });
})
