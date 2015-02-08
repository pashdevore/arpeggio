Arpeggio.Views.StreamShow = Backbone.View.extend({
  template: JST['streams/show'],

  render: function(){
    var renderedContent = this.template({
      stream: this.model
    });

    this.$el.html(renderedContent);
    return this;
  },

  renderFollowedSongs: function(){
    var that = this;

    this.followings.each( function(user) {
      user.fetch({
        success: function() {
          if (user.songs()) {
            user.songs().each( function(song) {
              var view = new Arpeggio.Views.SongsShow({ model: song });
              that.$el.append(view.render().$el);
            });
          }
        }
      });
    });
  }
});
