Router.configure({
  layoutTemplate: 'main',
  notFoundTemplate: 'notFound',
  loadingTemplate: 'loading',
  progressDelay: 100,
  progressSpinner: false,
  onAfterAction: function () {
    // Scroll back to top
    window.scrollTo(0, 0);

    // Remove header toggle
    $('body').removeClass('header--toggled');
    $('.header__toggle').removeClass('header__toggle--toggled');
    $('.header__content').removeClass('header__content--active');
  }
});

Router.route('/', function () {
  this.render('home');
}, {
  name: 'home'
});

Router.route('/blog', function () {
  this.render('blog');
}, {
  name: 'blog'
});

Router.route('/slack', function () {
  this.render('slack');
}, {
  name: 'slack'
});

Router.route('/pricing', function () {
  this.render('pricing');
}, {
  name: 'pricing'
});

Router.route('/about', function () {
  this.render('about');
}, {
  name: 'about'
});

Router.route('/sponsor', function () {
  this.render('sponsor');
}, {
  name: 'sponsor'
});

Router.route('/license', function () {
  this.render('license');
}, {
  name: 'license'
});

Router.route('/privacy', function () {
  this.render('privacy');
}, {
  name: 'privacy'
});

Router.route('/terms', function () {
  this.render('terms');
}, {
  name: 'terms'
});

Router.route('/support', function () {
  this.render('support');
}, {
  name: 'support'
});

Router.route('/login', function () {
  this.render('login');
}, {
  name: 'login'
});

Router.route('/signup', function () {
  this.render('signup');
}, {
  name: 'signup'
});