Arpeggio.Views.StreamShow = Backbone.View.extend({
  template: JST['stream/index'],

  render: function(){
    var renderedContent = this.template({
      stream: this.model
    });

    this.$el.html(renderedContent);
    return this;
  }
});
