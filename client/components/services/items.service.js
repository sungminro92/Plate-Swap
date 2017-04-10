angular
.module('projectThree')
.service('ItemsService', ItemsService);

ItemsService.$inject = ['$http'];

function ItemsService($http) {
  const self = this;

  self.loadAll = loadAll;
  self.addToItemCollection = addToItemCollection;
  self.addItem = addItem;

// Asks server for list of ALL items (regardless of creator)
  function loadAll() {
    console.log('load all function fired from service');
    return $http
      .get('/api/items');
  };

  // Tells server to add new item to database
  function addItem(newItem) {
    return $http
      .post('/api/items', newItem);
  };
};
