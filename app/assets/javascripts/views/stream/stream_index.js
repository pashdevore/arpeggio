Arpeggio.Views.StreamIndex = Backbone.View.extend({
  template: JST['stream/index'],

  initialize: function(){
    this.listenTo(this.collection, "add sync", this.render);
  },

  render: function(){
    var renderedContent = this.template({
      stream: this.collection
    });

    this.$el.html(renderedContent);
    return this;
  },

  renderTrack: function (track) {
    var song = new Arpeggio.SongShow.View({model: song});
    this.addSubview(this.selector, trackView);
    return trackView;
  },

  renderTracks: function () {
    debugger
    this.collection.each(this.renderTrack.bind(this));
  }
});
