ItemsShowController.$inject = ['$stateParams','ItemsService', 'UsersService', 'CommentsService'];

function ItemsShowController($stateParams, ItemsService, UsersService, CommentsService){
 var vm = this;
 vm.current = {};
 vm.comments = [];
 vm.newComment = {};
 vm.addItemComment = addItemComment;
 // vm.deleteItemComment = deleteItemComment;
 activate();

  function activate(){
    loadCurrentItem();
    getCookie();
  }

  function loadCurrentItem(){
    ItemsService
    .loadItem($stateParams.itemId)
    .then(function showItem(response){
      vm.current = response.data.item;
      vm.comments = response.data.item.comments;
    })
  }

  function addItemComment(newComment){
    CommentsService
    .addComment(newComment, $stateParams)
    .then(function (response){
      vm.comments.unshift(response.data.newComment);
      vm.newComment = {};
      getCookie();
    })
  }

  function getCookie() {
    UsersService
    .getCookie()
    .then(function display(response) {
      vm.newComment.userId = response.data.cookie;
    })
  }
};

module.exports = ItemsShowController;
