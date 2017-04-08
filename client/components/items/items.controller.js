ItemsController.$inject = ['ItemsService'];
function ItemsController(ItemsService) {
  const vm = this;

  vm.items = [];

  activate();

  function activate() {
    console.log('Items controller activated');
    loadAllItems();
  }

  function loadAllItems() {
    ItemsService
    .loadAll()
    .then(function resolve(response){
      vm.items = response.data.items;
    });
  };
};

module.exports = ItemsController;
