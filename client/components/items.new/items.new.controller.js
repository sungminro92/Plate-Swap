ItemsNewController.$inject = ['UsersService'];

function ItemsNewController(UsersService) {
  const vm = this;
  vm.addItem = addItem;
  vm.newItem = {};

  // HOW IT DOES STUFF
  function addItem(newItem) {
    console.log(newItem);
    UsersService
      .addItem(newItem)
  };
};

module.exports = ItemsNewController;
