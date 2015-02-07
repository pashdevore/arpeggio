Arpeggio.Routers.Router = Backbone.Router.extend({
  initialize: function(options){
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "": "stream",
    "songs/new": "upload",
    "users/:id": "user_show",
    "songs/:id": "song_show",
    "songs/:id/edit": "song_edit",
    "users/:id/edit": "user_edit"
  },

  stream: function(){
    Arpeggio.Collections.songs.fetch();

    var view = new Arpeggio.Views.SongsIndex({
      collection: Arpeggio.Collections.songs
    });

    this._swapView(view);
  },

  upload: function(){
    var song = new Arpeggio.Models.Song();

    var view = new Arpeggio.Views.SongsForm({
      model: song,
      collection: Arpeggio.Collections.songs
    });

    this._swapView(view);
  },

  song_edit: function(id){

  },

  song_show: function(id){
    var song = Arpeggio.Collections.songs.getOrFetch(id);

    var view = new Arpeggio.Views.SongShow({
      model: song
    });

    this._swapView(view);
  },

  user_show: function(id){
    var user = Arpeggio.Collections.users.getOrFetch(id);

    var view = new Arpeggio.Views.UserShow({
      model: user
    });

    this._swapView(view);
  },

  user_edit: function(id){
    var user = Arpeggio.Collections.users.getOrFetch(id);

    var view = new Arpeggio.Views.UsersForm({
      model: user,
      collection: Arpeggio.Collections.users
    });

    this._swapView(view);
  },

  _swapView: function(view){
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
