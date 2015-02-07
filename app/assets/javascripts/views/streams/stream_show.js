Arpeggio.Views.StreamShow = Backbone.model.extend({
  template: JST['stream/show'],

  render: function () {
    var renderedContent = this.template();
  }
});
