ItemsNewController.$inject = ['$state', 'UsersService', 'ItemsService'];

function ItemsNewController($state, UsersService, ItemsService) {
  const vm = this;
  vm.addItem = addItem;
  vm.newItem = {};
  activate();
  vm.cookie = {};

  function activate() {
    getCookie();
  }

  function addItem(newItem) {
    console.log(newItem);
    ItemsService
      .addItem(newItem)
      .then(function(){
        getTokens(vm.cookie);
        $state.go('userShow', {userId: vm.newItem.userId});
      });
  };

  function getTokens(){
    console.log('getting tokens');
    UsersService
    .getTokens(vm.cookie)
    .then(function(response){
      console.log(response);
    })
  }

  function getCookie() {
    UsersService
    .getCookie()
    .then(function display(response) {
      getUserName(response.data.cookie);
      vm.newItem.userId = response.data.cookie;
      vm.cookie = response.data.cookie;
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
