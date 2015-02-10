Arpeggio.Views.SongShowSmall = Backbone.View.extend({
  template: JST['songs/show_small'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var renderedContent = this.template({
      song: this.model
    });

    this.$el.html(renderedContent);
    return this;
  }
});
