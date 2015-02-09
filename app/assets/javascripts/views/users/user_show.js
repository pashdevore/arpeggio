Arpeggio.Views.UserShow = Backbone.CompositeView.extend({
  template: JST['users/show'],

  events: {
    "click .subscribe": "subscribe"
  },

  initialize: function () {
    this.collection = this.model.songs();
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addSong);
  },

  render: function () {
    var renderedContent = this.template({
      user: this.model
    });

    this.$el.html(renderedContent);
    this.renderSongs();
    return this;
  },

  renderSongs: function(){
    this.model.songs().each(this.addSong.bind(this));
  },

  addSong: function (song) {
    var view = new Arpeggio.Views.SongShow({
      model: song
    });
    this.addSubview('.songs', view);
  },

  subscribe: function(event) {
    var $target = $(event.currentTarget);

    //get user-id data attribute from html button
    debugger
    //front end handles adding to other user's followers collection
    //back end will have a followings controller that has a post and destroy
    //for creating and deleting a follower
    var user_id = $target.data('user-id');
  }
});
