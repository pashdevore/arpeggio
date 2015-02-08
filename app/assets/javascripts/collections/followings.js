Arpeggio.Collections.Followings = Backbone.Collection.extend({
  url: "api/followings",
  model: Arpeggio.Models.Following,

  getOrFetch: function(id){
    var following = this.get(id);
    var followings = this;

    if(!following){
      following = new Arpeggio.Models.Following({ id: id });

      following.fetch({
        success: function(){
          followings.add(following);
        }
      });
    } else {
      following.fetch();
    }

    return following;
  }
});

Arpeggio.Collections.followings = new Arpeggio.Collections.Followings();
