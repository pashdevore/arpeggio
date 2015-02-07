Arpeggio.Models.User = Backbone.Model.extend({
  urlRoot: "users",

  songs: function () {
    if(!this._songs){
      this._songs = new Arpeggio.Collections.Songs([], { profile: this });
    }

    return this._songs;
  },
});
