Arpeggio.Views.ProfileShow = Backbone.View.extend({
  template: JST['profiles/show'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var renderedContent = this.template({
      profile: this.model
    });

    this.$el.html(renderedContent);
    return this;
  }
});
