ItemsShowController.$inject = ['$stateParams','ItemsService', 'UsersService', 'CommentsService'];

function ItemsShowController($stateParams, ItemsService, UsersService, CommentsService){
 var vm = this;
 vm.current = {};
 vm.comments = [];
 vm.addItemComment = addItemComment;
 // vm.deleteItemComment = deleteItemComment;
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
      vm.comments = response.data.item.comments;
      console.log('this is where the response is: ' + response);
    })
  }

  function addItemComment(newComment){
    CommentsService
    .addComment(newComment)
    .then(function addNewComment(response){
      vm.newComment.userId = response.data.cookie;
      vm.comments.push(newComment);
    })
  }

};

module.exports = ItemsShowController;
