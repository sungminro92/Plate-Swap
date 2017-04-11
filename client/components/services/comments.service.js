angular
.module('projectThree')
.service('CommentsService', CommentsService);

CommentsService.$inject = ['$http', '$stateParams'];

function CommentsService($http) {
  const self = this;

  self.addComment = addComment;
  self.deleteComment = deleteComment;

// Asks server for list of ALL items (regardless of creator)
  // function loadAllComments() {
  //   console.log('all comments loaded!');
  //   return $http
  //     .get('/api/items/');
  // };

  // function loadComment(itemId){
  //   console.log(id);
  //   return $http
  //   .get('/api/items/' + id + );
  // };

  // Tells server to add new item to database
  function addComment(newComment, $stateParams) {
    var itemId = $stateParams.itemId;
    return $http
    .post('/api/items/' + itemId + '/comments/', newComment);
  };

  // function loadThisUserComments(userId) {
  //   return $http
  //   .get('/api/items/filter/' + userId)
  // };

  function deleteComment(item){
    return $http
    .delete('/api/comments/' + comment._id);
  };

};
