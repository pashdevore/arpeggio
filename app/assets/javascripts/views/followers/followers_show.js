Arpeggio.Views.FollowersShow = Backbone.View.extend({
  template: JST['followers/show'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var renderedContent = this.template({
      following: this.model
    });

    this.$el.html(renderedContent);
    return this;
  }
});
