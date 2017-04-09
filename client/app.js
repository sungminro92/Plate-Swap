const angular = require('angular');
require('angular-ui-router');

angular
	.module('projectThree', ['ui.router'])
  .config(routerSetup)


routerSetup.$inject = ['$stateProvider', '$urlRouterProvider'];
function routerSetup($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home', {
    template: '<home></home>',
    url: '/'
  })
  .state('items', {
    template: '<items></items>',
    url: '/items'
  })
  .state('login', {
    template: '<login></login>',
    url: '/login'
  })
  .state('itemsNew', {
    template: '<items-new></items-new>',
    url: '/items/new'
  });
  $urlRouterProvider.otherwise('/');
};
