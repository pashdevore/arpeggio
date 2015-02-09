Arpeggio.Views.SongsForm = Backbone.View.extend({
  template: JST['songs/form'],
  tagName: 'form',
  className: 'song-new',

  events: {
    "click button": "submit",
    "click #upload_widget_opener": "upload",
    "click .upload-song": "uploadSongMedia"
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
    this.uploadSongImage();
    var attrs = this.$el.serializeJSON();

    var that = this;

    this.model.set(attrs);
    this.model.save({}, {
      success: function(){
        that.collection.add(that.model, { merge: true } );
        Backbone.history.navigate("", { trigger: true } );
      },
      error: function(){
        console.log("error");
      }
    });
  },

  uploadSongImage: function(){
    $(".song-new").attr("enctype","multipart/form-data");

    document.getElementById("upload_widget_opener").addEventListener("click", function() {

      cloudinary.openUploadWidget({ cloud_name: 'arpeggio', upload_preset: 'wnoych6m'},
      function(error, result) {
        if (error) {
          console.log("Something went wrong...");
        } else {
          //Success!!!
          console.log(result);
          $(".img_url").attr('value', result[0].url);
          $(".thumb_url").attr('value', result[0].thumbnail_url);
          $(".img_height").attr('value', result[0].height);
          $(".img_width").attr('value', result[0].width);
          $(".hidden-img").attr('src', result[0].url);
          $(".hidden-img").css('display', 'block');
          $(".hidden-div").css('display', 'block');
        }
      });
    }, false);
  },

  uploadSongMedia: function() {
    filepicker.pick(function(blob) {
      $(".song_url").attr("value", blob.url);
    });
  }
});
