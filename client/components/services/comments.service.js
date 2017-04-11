angular
.module('projectThree')
.service('CommentsService', CommentsService);

CommentsService.$inject = ['$http', '$stateParams'];

function CommentsService($http) {
  const self = this;

  self.addComment = addComment;
  // self.deleteComment = deleteComment;


  // Tells server to add new comment to database
  function addComment(newComment, $stateParams) {
    var itemId = $stateParams.itemId;
    return $http
    .post('/api/items/' + itemId + '/comments/', newComment);
  };


  // function deleteComment(item){
  //   return $http
  //   .delete('/api/comments/' + comment._id);
  // };

};
