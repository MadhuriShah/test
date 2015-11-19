Router.route('/', {
  name: 'home'
});

Router.route('/dashboard', {
  name: 'dashboard'
});

Router.route('/items/new', {
  name: 'items.new'
});

Router.plugin('ensureSignedIn', {
  only: ['dashboard']
});

Router.route('/product', {
  name: 'product'
});

Router.route('/ourFarmer', {
  name: 'ourFarmer'
});

Router.route('/insertBookForm', {
  name: 'insertBookForm'
});
Router.route('/insertProduct', {
  name: 'insertProduct'
});