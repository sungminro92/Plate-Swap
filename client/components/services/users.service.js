angular
.module('projectThree')
.service('UsersService', UsersService);

UsersService.$inject = ['$http'];

function UsersService($http) {
  const self = this;

  self.loadAll = loadAll;
  self.addToUserCollection = addToUserCollection;
  self.addItem = addItem;

// Asks server for list of ALL items (regardless of creator)
  function loadAll() {
    console.log('load all function fired from service');
    return $http
      .get('/api/items');
  };

// Tells server to add new user to database
  function addToUserCollection(newUser) {
    return $http
      .post('/api/users', newUser);
  };

  // Tells server to add new item to database
  function addItem(newItem) {
    return $http
      .post('/api/items', newItem);
  };
};
