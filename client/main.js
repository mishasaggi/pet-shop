// Require language extensions BEFORE anything else
require('../ext');
var m = require('mithril');


var PetShopWindow = require('./components/PetShopWindow');

m.route(document.getElementById('app'), '/', {
  '/': {
    controller: function(){},
    view: function(){
      return m('.app', [
        m.component(PetShopWindow)])
    }
  }
});
