Arpeggio.Models.Stream = Backbone.Model.extend({
  urlRoot: "api/streams",

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
  },

  parse: function (response) {
    if(response.songs) {
      this.songs().set(response.songs, { parse: true });
      delete response.songs;
    }

    if(response.followers) {
      this.followers().set(response.followers, { parse: true });
      delete response.followers;
    }

    if(response.following) {
      this.following().set(response.following, { parse: true });
      delete response.following;
    }

    return response;
  }
});
