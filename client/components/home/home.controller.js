HomeController.$inject = ['$state','UsersService'];

function HomeController($state,UsersService) {
  const vm = this;
  vm.addUser = addUser;
  vm.newUser = {};
  activate();
  vm.cookied = false;
  vm.userName = {};

  function activate() {
    getCookie();
  }

// Tells service to add new user to database upon signup
  function addUser() {
    console.log(vm.newUser);
    UsersService
    .addToUserCollection(vm.newUser)
    .then(function(){
      $state.go('items');
    });
  }

  function getCookie() {
    UsersService
    .getCookie()
    .then(function display(response) {
      userId = response.data.cookie;
      if ( userId !== undefined) {
        hideSignupForm();
        getUserName(userId);
      } else {
        showSignupForm();
        console.log('no response')
      }
    });
  };

  function hideSignupForm(){
    vm.cookied = true;
  };

  function showSignupForm(){
    vm.cooked = false;
  };

  function getUserName(userId) {
    UsersService
    .getUserName(userId)
    .then(function display(response){
        vm.userName = response.data.user.name
    });
  }
};


module.exports = HomeController;
