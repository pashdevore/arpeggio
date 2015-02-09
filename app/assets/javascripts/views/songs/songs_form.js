Arpeggio.Views.SongsForm = Backbone.View.extend({
  template: JST['songs/form'],
  tagName: 'form',
  className: 'song-new',

  events: {
    "click button": "submit",
    "click #upload_widget_opener": "uploadSongImage",
    "click #upload_song_file": "uploadSongMedia"
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

  submit: function (event) {
    event.preventDefault();
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

  uploadSongImage: function(event){
    event.preventDefault();
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
    }, false);
  },

  uploadSongMedia: function(event) {
    event.preventDefault();
    filepicker.pick(function(blob) {
      $(".song_url").attr("value", blob.url);
    });
  }
});
