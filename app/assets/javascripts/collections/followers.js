Arpeggio.Collections.Followers = Backbone.Collection.extend({
  url: "api/followers",
  model: Arpeggio.Models.Follower,

  getOrFetch: function(id){
    var follower = this.get(id);
    var followers = this;

    if(!follower){
      follower = new Arpeggio.Models.Follower({ id: id });

      follower.fetch({
        success: function(){
          followers.add(follower);
        }
      });
    } else {
      follower.fetch();
    }

    return follower;
  }
});

Arpeggio.Collections.followers = new Arpeggio.Collections.Followers();
