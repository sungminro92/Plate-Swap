ItemsShowController.$inject = ['$stateParams','ItemsService', 'UsersService'];

function ItemsShowController($stateParams, ItemsService, UsersService){
 var vm = this;
 vm.current = {};

activate();

  function activate(){
    loadCurrentItem();
  }


  function loadCurrentItem(){
    console.log($stateParams);

    ItemsService
    .loadItem($stateParams.itemId)
    .then(function showItem(response){
      vm.current = response.data.item;
      console.log('this is where the response is: ' + response);
    })
  }

};

module.exports = ItemsShowController;
