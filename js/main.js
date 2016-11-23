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

    $('.nav-tabs a').on('click',function(){
      $(this).tab('show');
    });
})
