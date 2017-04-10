ItemsController.$inject = ['UsersService','ItemsService'];

function ItemsController(UsersService,ItemsService) {
  const vm = this;
  vm.items = [];
  vm.users = [];
  vm.cookie = [];
  activate();

  function activate() {
    console.log('Items controller activated');
    loadAllItems();
    getCookie();
  }

  function loadAllItems() {
    ItemsService
    .loadAll()
    .then(function resolve(response){
      vm.items = response.data.items;
      console.log(response)
    });
  };

  function getCookie() {
    UsersService
    .getCookie()
    .then(function display(response) {
      vm.cookie = response.data.cookie;
      console.log(response.data.cookie);
    })
  }

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
