angular
.module('projectThree')
.service('UsersService', UsersService);

UsersService.$inject = ['$http'];

function UsersService($http) {
  const self = this;

  self.loadAll = loadAll;
  self.addToUserCollection = addToUserCollection;
  self.login = login;
  self.getCookie = getCookie;
  self.getUserName = getUserName;
  self.decrementToken = decrementToken;
  self.getTokens = getTokens;
  self.loadUser = loadUser;

// Asks server for list of ALL items (regardless of creator)
  function loadAll() {
    console.log('load all function fired from service');
    return $http
      .get('/api/items');
  };

  function loadUser(id){
    return $http
    .get('/api/users/' + id);
  };

  function getCookie(user) {
    return $http
    .get('/api/users/cookie');
  };

  function getUserName(id) {
    return $http
    .get('/api/users/name/' + id);
  };

  function login(user) {
    return $http
      .post('/api/users/login', user);
  };

  function decrementToken(user) {
    return $http
      .patch('/api/users/tokens/dec/' + user);
  };

  function getTokens(user) {
    return $http
      .patch('/api/users/tokens/inc/' + user);
  };

// Tells server to add new user to database
  function addToUserCollection(newUser) {
    return $http
      .post('/api/users', newUser);
  };
};
