Arpeggio.Models.Stream = Backbone.Model.extend({
  urlRoot: "api/stream",

  songs: function () {
    if(!this._songs){
      this._songs = new Arpeggio.Collections.Songs([], { user: this });
    }

    return this._songs;
  },

  followings: function () {
    if(!this._followings){
      this._followings = new Arpeggio.Collections.Followings([], { user: this });
    }

    return this._following;
  },

  followers: function () {
    if(!this._followers){
      this._followers = new Arpeggio.Collections.Followers([], { user: this });
    }

    return this._followers;
  }
});
