Arpeggio.Routers.Router = Backbone.Router.extend({
  initialize: function(options){
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "": "index",
    "songs/new": "new",
    "songs/:id": "show",
    "songs/:id/edit": "edit"
  },

  index: function(){
    Arpeggio.Collections.songs.fetch();

    var view = new Arpeggio.Views.SongsIndex({
      collection: Arpeggio.Collections.songs
    });

    this._swapView(view);
  },

  new: function(){

  },

  edit: function(id){

  },

  show: function(id){

  },

  _swapView: function(view){
    debugger
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
