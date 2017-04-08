const angular = require('angular');
require('angular-ui-router');

angular
	.module('projectThree', ['ui.router'])
  .config(routerSetup)


routerSetup.$inject = ['$stateProvider', '$urlRouterProvider'];
function routerSetup($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('/', {
    template: '<h2>Hello from UI Router</h2>'
  });
};
