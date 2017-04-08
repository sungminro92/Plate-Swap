ItemsController.$inject = ['UsersService'];
function ItemsController(UsersService) {
  const vm = this;

  vm.items = [];

  activate();

  function activate() {
    console.log('Items controller activated');
    loadAllItems();
  }

  function loadAllItems() {
    UsersService
    .loadAll()
    .then(function resolve(response){
      vm.items = response.data.items;
    });
  };
};

module.exports = ItemsController;
