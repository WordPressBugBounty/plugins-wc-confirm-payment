(function( $ ) {
  'use strict';

  function wcp_alert(message){
    return '<div class="wcp-alert">'+ message +'</div>'
  }

  $(document).on('change', 'select#wcp-order', function(event) {

    var selected = $("option:selected", this);

    $('#wcp-amount').val( selected.data('total') );

  });

  $(document).on('keyup click', 'input#wcp-order', function(event) {

    var $this = $(this);

    $.ajax({
      type: 'POST',
      dataType: 'json',
      url: WCP.ajaxurl,
      data: 'order_id='+ $this.val() + '&security='+ WCP.check_order_nonce +'&action=wcp_check_order',
      success : function( data ){

        $this.closest('.wcp-form-group').removeClass('has-error').find('.wcp-alert').remove();

        if( data.errors ){
          $this.closest('.wcp-form-group').addClass('has-error').append(wcp_alert(data.errors));
        }else{
          $('#wcp-amount').val( data.total );
        }
      },
      complete: function(data){},
      error : function( err ){}
    });

  });

  $(document).on('change', 'input#wcp-slip', function(event) {
    var group = $(this).closest('.wcp-form-group');

    group.removeClass('has-error').find('.wcp-alert').remove();

    if(this.files[0].size > 2097152){
       group.addClass('has-error').append(wcp_alert(WCP.i18n.maximum_upload_file));
       this.value = '';
    }
  });

  function before_confirm_payment(field, form, options) {
    form.addClass('is-loading');
  }

  function after_confirm_payment(data){

    $('.wcp-alert, .wcp-form-success-message').remove();
    $('.wcp-form-group').removeClass('has-error');
    $('form.wcp-form').removeClass('is-loading');

    if ( data.errors.length === 0 ) {

      $('.wcp-form-response').html( '<div class="wcp-form-success-message">' + data.success + '</div>');
      $('#wcp-date, #wcp-time, #wcp-slip, #wcp-amount').val('');

    }else{

      if( data.errors.name )       $('#wcp-name').closest('.wcp-form-group').addClass('has-error').append(wcp_alert(data.errors.name));
      if( data.errors.phone )      $('#wcp-phone').closest('.wcp-form-group').addClass('has-error').append(wcp_alert(data.errors.phone));
      if( data.errors.date )       $('#wcp-date').closest('.wcp-form-group').addClass('has-error').append(wcp_alert(data.errors.date));
      if( data.errors.time )       $('#wcp-time').closest('.wcp-form-group').addClass('has-error').append(wcp_alert(data.errors.time));
      if( data.errors.bank )       $('#wcp-bank').closest('.wcp-form-group').addClass('has-error').append(wcp_alert(data.errors.bank));
      if( data.errors.amount )     $('#wcp-amount').closest('.wcp-form-group').addClass('has-error').append(wcp_alert(data.errors.amount));
      if( data.errors.order )      $('#wcp-order').closest('.wcp-form-group').addClass('has-error').append(wcp_alert(data.errors.order));
      if( data.errors.slip )       $('#wcp-slip').closest('.wcp-form-group').addClass('has-error').append(wcp_alert(data.errors.slip));
      if( data.errors.attachment ) $('#wcp-slip').closest('.wcp-form-group').addClass('has-error').append(wcp_alert(data.errors.attachment));

      $('.wcp-form-group.has-error:first input').focus();
    }
  }

  $(document).ready(function(){

    $('form.wcp-form').ajaxForm({
      dataType: 'json',
      beforeSubmit: before_confirm_payment,
      success: after_confirm_payment,
      url: WCP.ajaxurl
    });

  });

})( jQuery );