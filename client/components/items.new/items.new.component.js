// We set up and named our component by requiring our controller and template html and assigning them variables
const controller = require('./items.new.controller.js');
const template = require('./items.new.html');

const ItemsNewComponent = {
  template: template,
  controller: controller
};

angular
  .module('projectThree')
  .component('itemsNew', ItemsNewComponent);
