window.Arpeggio = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Arpeggio.Routers.Router({
      $rootEl: $(".wrapper")
    });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Arpeggio.initialize();
});
