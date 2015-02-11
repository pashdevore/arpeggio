Arpeggio.Views.FollowerShow = Backbone.View.extend({
  template: JST['followers/show'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var renderedContent = this.template({
      follower: this.model
    });

    this.$el.html(renderedContent);
    return this;
  }
});
