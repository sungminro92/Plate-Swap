// In order to use the $state service and the UsersService
// we created on our Welcome page, we needed to INJECT them into our controller using Angular's $.inject
HomeController.$inject = ['$state','UsersService'];

// This is where define the HomeController function and all the properties and methods that we can access in the Home page view
function HomeController($state,UsersService) {
  // setting a var vm to this allows us to establish a Controller function scope
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
