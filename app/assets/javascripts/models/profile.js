Arpeggio.Models.Profile = Backbone.Model.extend({
  urlRoot: "api/profiles",

  songs: function () {
    if(!this._songs){
      this._songs = new Arpeggio.Collections.Songs([], { profile: this });
    }

    return this._songs;
  },
});
