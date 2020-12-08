$(document).ready(function() {
  $('.color-choose input').on('click', function() {
      var headphonesColor = $(this).attr('data-image');

      $('.active').removeClass('active');
      $('.left-column img[data-image = ' + headphonesColor + ']').addClass('active');
      $(this).addClass('active');
  });


  // Widget configuration
  let configuration = {
    attributes: ['red', 'blue', 'black'],
    placeholder: '.product-color',
    placeholder_text: 'Surprise me with the color',
    cart_button: '.cart-btn',
    image: window.location.origin + '/images/black.png',
    select_attribute: function(attr) {}
  }

  // let widget = Widget(configuration)
  // setTimeout(widget.start, 2000)
});
