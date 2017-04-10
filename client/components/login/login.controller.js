LoginController.$inject = ['UsersService'];

function LoginController(UsersService) {
  const vm = this;
  vm.login = login;
  vm.user = {};

// Tells service to add new user to database upon signup
  function login() {
    console.log(vm.user);
    UsersService
    .login(vm.user);
  };
};

module.exports = LoginController;
