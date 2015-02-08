Arpeggio.Collections.Likes = Backbone.Collection.extend({
  url: "api/likes",
  model: Arpeggio.Models.Like,

  getOrFetch: function(id){
    var like = this.get(id);
    var likes = this;

    if(!like){
      like = new Arpeggio.Models.Like({ id: id });

      like.fetch({
        success: function(){
          likes.add(like);
        }
      });
    } else {
      like.fetch();
    }

    return like;
  }
});

Arpeggio.Collections.likes = new Arpeggio.Collections.Likes();
