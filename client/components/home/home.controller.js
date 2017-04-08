HomeController.$inject = [];
function HomeController() {
  const vm = this;

  activate();

  function activate() {
    console.log('Home controller activated');
  }
}

module.exports = HomeController;
