angular
.module('projectThree')
.service('ItemsService', ItemsService);

ItemsService.$inject = ['$http'];

function ItemsService($http) {
  const self = this;

  self.loadAll = loadAll;
  self.addToItemCollection = addItem;
  self.addItem = addItem;
  self.loadItem = loadItem;
  self.loadThisUserItems = loadThisUserItems;


// Asks server for list of ALL items (regardless of creator)
  function loadAll() {
    console.log('load all function fired from service');
    return $http
      .get('/api/items');
  };

  function loadItem(id){
    console.log(id);
    return $http
    .get('/api/items/' + id);
  };

  // Tells server to add new item to database
  function addItem(newItem) {
    return $http
    .post('/api/items', newItem);
  };

  function loadThisUserItems(userId) {
    return $http
    .get('/api/items/filter/' + userId)
  };

};

