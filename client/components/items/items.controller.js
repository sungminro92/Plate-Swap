ItemsController.$inject = ['$state','UsersService','ItemsService'];

function ItemsController($state, UsersService,ItemsService) {
  const vm = this;
  vm.items = [];
  vm.cookie = [];
  vm.tokens = 0;
  vm.claimThisItem = claimThisItem;
  vm.disabled = false;
  activate();

  function activate() {
    console.log('Items controller activated');
    loadAllItems();
    getCookie();
  };

  function loadAllItems() {
    ItemsService
    .loadAll()
    .then(function resolve(response){
      vm.items = response.data.items;
    });
  };

  function getCookie() {
    UsersService
    .getCookie()
    .then(function display(response) {
      vm.cookie = response.data.cookie;
      checkForTokens(vm.cookie);
    });
  };

  function checkForTokens(cookie) {
    var userId = cookie;
    UsersService
    .loadUser(cookie)
    .then(function(response){
      vm.tokens = response.data.user.tokens;
      checkEligibility(vm.tokens);
    });
  };

  function checkEligibility(tokens){
    if (tokens <= 0) {
      vm.disabled = true;
    } else {
      console.log('still eligible to claim');
    };
  };

  function claimThisItem(thisItem) {
    item = thisItem;
    item.disabled = true;
    item.status = 'Claimed!';
    decrementTokens(vm.cookie);
  };

  function decrementTokens(cookie){
    UsersService
    .decrementToken(cookie)
    .then(function(response) {
      checkForTokens(cookie);
    });
  };
};

module.exports = ItemsController;
