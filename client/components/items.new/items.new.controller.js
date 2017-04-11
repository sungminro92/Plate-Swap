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

  function addItem(newItem) {
    console.log(newItem);
    ItemsService
      .addItem(newItem)
  };


  function getCookie() {
    UsersService
    .getCookie()
    .then(function display(response) {
      getUserName(response.data.cookie);
      vm.newItem.userId = response.data.cookie;
    })
  }

  function getUserName(userId) {
    UsersService
    .getUserName(userId)
    .then(function display(response){
      vm.newItem.userName = response.data.user.name
    })
  }
};


module.exports = ItemsNewController;
