Arpeggio.Models.User = Backbone.Model.extend({
  urlRoot: "users",

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

    return this._followings;
  },

  followers: function () {
    if(!this._followers){
      this._followers = new Arpeggio.Collections.Followers([], { user: this });
    }

    return this._followers;
  },

  likes: function () {
    if(!this._likes){
      this._likes = new Arpeggio.Collections.Likes([], { user: this });
    }

    return this._likes;
  },

  parse: function(response){
    if(response.songs) {
      this.songs().set(response.songs, { parse: true });
      delete response.songs;
    }

    if(response.following) {
      debugger
      this.followings().set(response.following, { parse: true });
      delete response.following;
    }

    if(response.followers) {
      this.followers().set(response.followers, { parse: true });
      delete response.followers;
    }

    if(response.likes) {
      this.likes().set(response.likes, { parse: true });
      delete response.likes;
    }

    return response;
  }
});
