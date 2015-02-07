Arpeggio.Collections.Users = Backbone.Collection.extend({
  url: "users",
  model: Arpeggio.Models.User,

  getOrFetch: function(id){
    var user = this.get(id);
    var users = this;

    if(!user){
      user = new Arpeggio.Models.User({ id: id });

      user.fetch({
        success: function(){
          users.add(user);
        }
      });
    } else {
      user.fetch();
    }

    return user;
  }
});

Arpeggio.Collections.users = new Arpeggio.Collections.Users();
