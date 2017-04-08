HomeController.$inject = ['UsersService'];

function HomeController(UsersService) {
  const vm = this;
  vm.addUser = addUser;
  vm.newUser = {};

// Tells service to add new user to database upon signup
  function addUser(newUser) {
    console.log(newUser);
    UsersService
    .addToUserCollection(newUser)
  };
};

module.exports = HomeController;
