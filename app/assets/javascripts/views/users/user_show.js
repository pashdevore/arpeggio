Arpeggio.Views.UserShow = Backbone.CompositeView.extend({
  template: JST['users/show'],

  events: {
    "click .subscribe": "subscribe"
  },

  initialize: function () {
    this.collection = this.model.songs();
    this.listenTo(this.model.followers(), "add", this.addFollower);
    this.listenTo(this.model.followings(), "add", this.addFollowing);
    // this.listenTo(this.model.follow(), "sync", this.render);
    this.listenTo(this.model, 'sync', this.render);
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
    console.log("followers rendered");
  },

  renderFollowings: function () {
    this.model.followings().each(this.addFollowing.bind(this));
    console.log("followings rendered");
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
          $('.subscribe').text("Unsubscribe");
          this.model.followers().add(this.model.follow());
        }.bind(this)
      });
    } else {
      // this.model.follow().save({follower_id: this.model.id});
      current_user.followers().remove(this.model);
      this.model.follow().destroy();
      $('.subscribe').text("Subscribe");
      // this.model.followings().remove(this.model.follow());
    }
  }
});
