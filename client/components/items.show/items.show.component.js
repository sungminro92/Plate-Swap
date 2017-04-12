// We set up and named our component by requiring our controller and template html and assigning them variables
const controller = require('./items.show.controller.js');
const template = require('./items.show.html');

const ItemsShowComponent = {
  template: template,
  controller: controller
};

angular
  .module('projectThree')
  .component('itemsShow', ItemsShowComponent);
