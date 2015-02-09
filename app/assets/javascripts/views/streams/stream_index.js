Arpeggio.Views.StreamIndex = Backbone.View.extend({
  template: JST['stream/index'],

  initialize: function(){
    this.listenTo(this.collection, "sync", this.render);
  },

  render: function(){
    var renderedContent = this.template({
      stream: this.collection
    });

    this.$el.html(renderedContent);
    return this;
  }
});
