// We set up and named our component by requiring our controller and template html and assigning them variables
const controller = require('./user.show.controller.js');
const template = require('./user.show.html');

const UserShowComponent = {
  template: template,
  controller: controller
};

angular
  .module('projectThree')
  .component('userShow', UserShowComponent);
