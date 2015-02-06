Arpeggio.Views.ProfilesForm = Backbone.View.extend({
  template: JST['profiles/form'],
  tagName: 'form',
  className: 'song-new',

  events: {
    "click button": "submit",
  },

  initialize: function(){
    this.listenTo(this.model, "sync", this.render);
  },

  render: function(){
    var renderedContent = this.template({
      profile: this.model
    });

    this.$el.html(renderedContent);
    return this;
  },

  submit: function (event) {
    event.preventDefault();
    var attrs = this.$el.serializeJSON();

    var that = this;

    this.model.set(attrs);
    this.model.save({}, {
      success: function(){
        that.collection.add(that.model, { merge: true } );
        Backbone.history.navigate("", { trigger: true } );
      },
      error: function(){
        console.log("error");
      }
    });
  }
});
