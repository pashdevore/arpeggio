Arpeggio.Collections.Profiles = Backbone.Collection.extend({
  url: "api/profiles",
  model: Arpeggio.Models.Profile,

  getOrFetch: function(id){
    var profile = this.get(id);
    var profiles = this;

    if(!profile){
      profile = new Arpeggio.Models.Profile({ id: id });

      profile.fetch({
        success: function(){
          profiles.add(profile);
        }
      });
    } else {
      profile.fetch();
    }

    return profile;
  }
});

Arpeggio.Collections.profiles = new Arpeggio.Collections.Profiles();
