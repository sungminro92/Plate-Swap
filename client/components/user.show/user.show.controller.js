UserShowController.$inject = ['$stateParams','ItemsService', 'UsersService'];

function UserShowController($stateParams, ItemsService, UsersService){
 var vm = this;
 vm.currentUser = {};

};

module.exports = UserShowController;
