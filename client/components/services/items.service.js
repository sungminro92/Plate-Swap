angular
.module('projectThree')
.service('ItemsService', ItemsService);

ItemsService.$inject = ['$http'];

function ItemsService($http) {
  const self = this;

  self.loadAll = loadAll;

  function loadAll() {
    console.log('load all function fired from service');
    return $http
      .get('/api/items');
  };
};
