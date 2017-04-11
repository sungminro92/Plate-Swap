UserShowController.$inject = ['$stateParams','ItemsService', 'UsersService'];

function UserShowController($stateParams, ItemsService, UsersService){
 var vm = this;
 vm.currentUser = {};
 vm.deleteCurrentItem = deleteCurrentItem;
 vm.items = [];
 vm.updateItem = updateItem;
 vm.isEditing = false;

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

  function updateItem(item) {
    console.log('update item fn fired');
    ItemsService
    .updateItem(item)
    .then (function () {
      item.isEditing = false;
      console.log(vm.isEditing);
    })
  }

//This function is to delete the current item
  function deleteCurrentItem(item) {
    var index = vm.items.indexOf(item)
    ItemsService
    .deleteItem(item)
    .then(function destroy(response){
      vm.items.splice(index, 1);
    })
  }

}

module.exports = UserShowController;
