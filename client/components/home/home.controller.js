HomeController.$inject = ['$state','UsersService'];

function HomeController($state,UsersService) {
  const vm = this;
  vm.addUser = addUser;
  vm.newUser = {};

// Tells service to add new user to database upon signup
  function addUser() {
    console.log(vm.newUser);
    UsersService
    .addToUserCollection(vm.newUser)
    .then(function(){
      $state.go('items');
    });
  };
};


module.exports = HomeController;
