Arpeggio.Views.UserShow = Backbone.CompositeView.extend({
  template: JST['users/show'],

  events: {
    "click .subscribe": "subscribe"
  },

  initialize: function () {
    this.collection = this.model.songs();
    this.listenTo(this.model, 'sync remove', this.render);
    this.listenTo(this.collection, 'add', this.addSong);
  },

  render: function () {
    var renderedContent = this.template({
      user: this.model
    });

    this.$el.html(renderedContent);
    this.renderSongs();
    this.renderFollowers();
    this.renderFollowings();

    return this;
  },

  renderSongs: function () {
    this.model.songs().each(this.addSong.bind(this));
  },

  renderFollowers: function () {
    this.model.followers().each(this.addFollower.bind(this));
  },

  renderFollowings: function () {
    this.model.followings().each(this.addFollowing.bind(this));
  },

  addSong: function (song) {
    var view = new Arpeggio.Views.SongShowSmall({
      model: song
    });

    // check to make sure song is one user has created
    if(song.escape('user_id') == this.model.escape('id')){
      this.addSubview('.songs', view);
    }
  },

  addFollower: function (follower) {
    var view = new Arpeggio.Views.FollowerShow({
      model: follower
    });

    this.addSubview('.followers', view);
  },

  addFollowing: function (following) {
    var view = new Arpeggio.Views.FollowingShow({
      model: following
    });

    this.addSubview('.followings', view);
  },

  subscribe: function(event) {

    event.preventDefault();

    var current_user = Arpeggio.Collections.users.getOrFetch($(".wrapper").data("user-id"));
    //save, get, and fetch in backbone call the appropriate html methods!

    if($(".subscribe").text() === "Subscribe") {
      this.model.follow().save({follower_id: this.model.id}, {
        success: function() {
          //this.model is John Mayer when subscribing to John Mayer
          //this.model we are adding is the subscriber (i.e. George Washington)
          this.model.followings().add(this.model.follow());
        }.bind(this)
      });
      //back end will have a followings controller that has a post and destroy
      //for creating and deleting a follower
    } else {
      debugger
      this.model.follow().destroy({follower_id: this.model.id});
      var model = this.model.followers().get(current_user.id);
      model.destroy();
    }
  }
});
