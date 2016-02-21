Router.configure({
  layoutTemplate: 'main',
  notFoundTemplate: 'notFound',
  loadingTemplate: 'loading'
});

Router.route('/', function () {
  this.render('home');
}, {
  name: 'home'
});

Router.route('/slack', function () {
  this.render('slack');
}, {
  name: 'slack'
});