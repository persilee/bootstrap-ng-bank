window.operateEvents1 = {
  'click .add': function(e, value, row, index){
    $.get('caseManagement.html',function(data){
      swal({
          title: '增加测试案例',
          html: data,
          width: '65%',
          showCancelButton: true,
          buttonsStyling: false,
          confirmButtonClass: 'button button-primary button-pill button-small',
          cancelButtonClass: 'button button-caution button-pill button-small',
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          allowOutsideClick: false
      }).then(function() {
      })
      $('.selectpicker').selectpicker();
      $('.date.datepicker').datetimepicker({
          // viewMode: 'years',
          // format: 'YYYY/MM'
      });
    });
  }
}
