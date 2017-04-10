LoginController.$inject = ['$state','UsersService'];

function LoginController($state, UsersService) {
  const vm = this;
  vm.login = login;
  vm.user = {};

// Tells service to add new user to database upon signup
  function login() {
    console.log(vm.user);
    UsersService
    .login(vm.user)
    $state.go('items', {users: users, items: users.items});
  };

};

module.exports = LoginController;
