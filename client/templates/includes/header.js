Template.header.helpers({
  isMobile: function () {
    var width = $(window).width();

    if (width <= 1024) {
      Session.set('mobile', true)
    } else {
      Session.set('mobile', false)
    }

    $(window).resize(function () {
      width = $(window).width();

      if (width <= 1024) {
        Session.set('mobile', true)
      } else {
        Session.set('mobile', false)
      }
    });

    return Session.get('mobile');
  }
});

Template.header.events({
  'click .header__toggle': function () {
    $('.header__content')
      .stop()
      .toggleClass('header__content--active');

    $('body')
      .stop()
      .toggleClass('header--toggled');

    $('.header__toggle')
      .stop()
      .toggleClass('header__toggle--toggled');
  }
});