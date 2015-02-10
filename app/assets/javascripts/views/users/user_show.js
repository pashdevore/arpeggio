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
    // this.renderFollowers();
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
    var view = new Arpeggio.Views.SongShow({
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
    debugger
    event.preventDefault();
    var $target = $(event.currentTarget);

    //front end handles adding to other user's followers collection
    var user_to_follow = Arpeggio.Collections.users.getOrFetch($target.data('user-id'));
    user_to_follow._followers.add(this.model);

    //back end will have a followings controller that has a post and destroy
    //for creating and deleting a follower
  }
});
