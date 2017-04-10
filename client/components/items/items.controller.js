ItemsController.$inject = ['UsersService','ItemsService'];

function ItemsController(UsersService,ItemsService) {
  const vm = this;
  vm.items = [];
  vm.users = [];
  activate();

  function activate() {
    console.log('Items controller activated');
    loadAllItems();
  }

  function loadAllItems() {
    ItemsService
    .loadAll()
    .then(function resolve(response){
      vm.items = response.data.items;
      console.log(response)
    });
  };

  function loadAllUsers() {
    UsersService
    .loadAll()
    .then(function resolve(response){
      vm.users = response.data.users;
      console.log(response)
    });
  };
};

module.exports = ItemsController;
