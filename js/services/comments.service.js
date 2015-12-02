let CommentsService = function($http, PARSE) {
  
  let url = PARSE.URL + 'classes/contactus';

  this.getAllComments   = getAllComments;
  this.getComment       = getComment;

  function (contactUsObj) {
    this.message = contactUsObj.message;
  }

  function getAllComments () {
    return $http.get(url, PARSE.CONFIG);
  }

  function getComments (id) {
    return $http.get(url + '/' + id, PARSE.CONFIG);
  }

};

CommentsService.$inject = ['$http', 'PARSE'];

export default CommentsService;