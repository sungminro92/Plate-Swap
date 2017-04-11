ItemsController.$inject = ['$state','UsersService','ItemsService'];

function ItemsController($state, UsersService,ItemsService) {
  const vm = this;
  vm.items = [];
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
      console.log("Here is the response from load all items: " + response);
      vm.items = response.data.items;
      console.log(response.data.items);
    });
  }

  function getCookie() {
    UsersService
    .getCookie()
    .then(function display(response) {
      vm.cookie = response.data.cookie;
      console.log(response.data.cookie);
    })
  }
};

module.exports = ItemsController;
