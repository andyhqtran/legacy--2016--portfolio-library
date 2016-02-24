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