Arpeggio.Routers.Router = Backbone.Router.extend({
  initialize: function(options){
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "": "index",
    "songs/new": "song_new",
    "songs/:id": "song_show",
    "songs/:id/edit": "song_edit",
    "profiles/:id": "profile_show"
  },

  index: function(){
    Arpeggio.Collections.songs.fetch();

    var view = new Arpeggio.Views.SongsIndex({
      collection: Arpeggio.Collections.songs
    });

    this._swapView(view);
  },

  song_new: function(){

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

  profile_show: function(id){
    var profile = Arpeggio.Collections.profiles.getOrFetch(id);

    var view = new Arpeggio.Views.ProfileShow({
      model: profile
    });

    this._swapView(view);
  }

  _swapView: function(view){
    this.currentView && this.currentView.remove();
    this.currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
