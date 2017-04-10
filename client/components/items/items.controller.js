ItemsController.$inject = ['UsersService'];
function ItemsController(UsersService) {
  const vm = this;

  vm.users = [];

  activate();

  function activate() {
    console.log('Items controller activated');
    loadAllItems();
  }

  function loadAllItems() {
    UsersService
    .loadAll()
    .then(function resolve(response){
      vm.users = response.data.users;
      console.log(response)
    });
  };
};

module.exports = ItemsController;
