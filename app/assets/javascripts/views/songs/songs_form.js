Arpeggio.Views.SongsForm = Backbone.View.extend({
  template: JST['songs/form'],
  tagName: 'form',
  className: 'song-new',

  events: {
    "click button": "submit",
    "click #upload_widget_opener": "upload"
  },

  initialize: function(){
    this.listenTo(this.model, "sync", this.render);
  },

  render: function(){
    var renderedContent = this.template({
      song: this.model
    });

    this.$el.html(renderedContent);
    return this;
  },

  upload: function (event) {
    event.preventDefault();
  },

  submit: function (event) {
    event.preventDefault();
    var attrs = this.$el.serializeJSON();
    // var data = {
    //   "timestamp": "",
    //   "callback": "http://www.arpeggio.xyz/vendor/assets/html/cloudinary_cors.html",
    //   "signature": "j6fY5zVGvCdzWnu2s87jz2Laecg",
    //   "api_key": "933224247549886"
    // };

    $('.cloudinary-fileupload').attr('data-form-data', JSON.stringify(data));
    var that = this;

    this.model.set(attrs);
    this.model.save({}, {
      success: function(){
        that.collection.add(that.model, { merge: true });
        Backbone.history.navigate("", { trigger: true } );
      }
    });
  }
});