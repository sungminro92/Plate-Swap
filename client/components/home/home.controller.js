HomeController.$inject = ['UsersService'];

function HomeController(UsersService) {
  const vm = this;
  vm.addUser = addUser;
  vm.newUser = {};

// Tells service to add new user to database upon signup
  function addUser() {
    console.log(vm.newUser);
    UsersService
    .addToUserCollection(vm.newUser);    
  };
};

module.exports = HomeController;
