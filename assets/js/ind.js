$(document).ready(function() {

  $('.contactform').on('submit', function(event) {
      event.preventDefault();
      var fname = $('#fname').val();
      var email = $('#email').val();
      var subj = $('#subject').val();
      var message = $('#message').val();
    $.ajax({
      url: "https://formspree.io/darkmantis404@zoho.com",
      method: "POST",
      data: {
        name: fname,
        email: email,
        _subject: subj,
        message: message
      },
      dataType: "json"
    }).done(function() {
      $('#fname').val('');
      $('#email').val('');
      $('#subject').val('');
      $('#message').val('');
      $('.alert').show();
    });
  });

  $('.closebtn').on('click', function() {
    $( this ).parent().fadeOut( 1000, function() {
      $( this ).hide();
    });
  });

});
