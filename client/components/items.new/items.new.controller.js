ItemsNewController.$inject = ['UsersService', 'ItemsService'];

function ItemsNewController(UsersService, ItemsService) {
  const vm = this;
  vm.addItem = addItem;
  vm.newItem = {};
  vm.cookie = [];
  activate();

  function activate() {
    getCookie();
  }

  // HOW IT DOES STUFF
  function addItem(newItem) {
    console.log(newItem);
    ItemsService
      .addItem(newItem)
  };


  function getCookie() {
    UsersService
    .getCookie()
    .then(function display(response) {
      vm.newItem.userId = response.data.cookie;
    })
  }
};

module.exports = ItemsNewController;
