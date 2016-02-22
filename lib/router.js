Router.configure({
  layoutTemplate: 'main',
  notFoundTemplate: 'notFound',
  loadingTemplate: 'loading',
  progressDelay: 100,
  progressSpinner: false,
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

Router.route('/legal', function () {
  this.render('legal');
}, {
  name: 'legal'
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