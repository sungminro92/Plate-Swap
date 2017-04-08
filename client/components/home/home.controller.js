HomeController.$inject = ['UsersService'];

function HomeController(UsersService) {
  const vm = this;
  vm.addUser = addUser;
  vm.newUser = {};

  function addUser(newUser) {
    console.log(newUser);
    UsersService
    .addToUserCollection(newUser)
  };
};

module.exports = HomeController;
