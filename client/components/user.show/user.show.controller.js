UserShowController.$inject = ['$stateParams','ItemsService', 'UsersService'];

function UserShowController($stateParams, ItemsService, UsersService){
 var vm = this;
 vm.currentUser = {};
 vm.items = [];

 activate()

 function activate() {
  loadThisUserItems();
 }

 function loadThisUserItems (){
  ItemsService
  .loadThisUserItems($stateParams.userId)
  .then (function showItems(response) {
    vm.items = response.data.items;
    console.log(response.data.items);
  })
  };
}

module.exports = UserShowController;
