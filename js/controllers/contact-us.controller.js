let CommentsController = function(CommentsService) {

  let vm = this;

  vm.comments = [];

  activate();

  function activate () {
    CommentsService.getAllComments().then( (res) => {
      vm.comments = res.data.results;
    });
  }

};

CommentsController.$inject = [];

export default CommentsController;