angular
.module('projectThree')
.service('UsersService', UsersService);

UsersService.$inject = ['$http'];

function UsersService($http) {
  const self = this;

  self.loadAll = loadAll;
  self.addToUserCollection = addToUserCollection;

  function loadAll() {
    console.log('load all function fired from service');
    return $http
      .get('/api/items');
  };

  function addToUserCollection(newUser) {
    return $http
      .post('/api/users', newUser);
  };
};
