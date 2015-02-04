Arpeggio.Collections.Songs = Backbone.Collection.extend({
  url: "api/songs",
  model: Arpeggio.Models.Song,

  comparator: function(){

  },

  getOrFetch: function(id){
    var song = this.get(id);
    var songs = this;

    if(!song){
      song = new Arpeggio.Models.Song({ id: id });

      song.fetch({
        success: function(){
          songs.add(song);
        }
      });
    } else {
      song.fetch();
    }

    return song;
  }
});

Arpeggio.Collections.songs = new Arpeggio.Collections.Songs();
