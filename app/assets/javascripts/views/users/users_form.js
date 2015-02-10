Arpeggio.Views.UsersForm = Backbone.View.extend({
  template: JST['users/form'],
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
      user: this.model
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
        // that.collection.add(that.model, { merge: true } );
        Backbone.history.navigate("", { trigger: true } );
      },
      error: function(){
        console.log("error");
      }
    });
  },

  upload: function (event) {
    event.preventDefault();

    cloudinary.openUploadWidget({ cloud_name: 'arpeggio', upload_preset: 'wnoych6m'},
    function(error, result) {
      if (error) {
        console.log("Something went wrong...");
      } else {
        //Success!!!
        console.log(result);
        $(".gravatar_url").attr('value', result[0].url);
        $(".img-responsive").attr("src", result[0].url);
      }
    });
  }
});
