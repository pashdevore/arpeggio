Arpeggio.Views.ProfileShow = Backbone.View.extend({
  template: JST['profiles/show'],

  events: {
    "click .subscribe": "subscribe"
  },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var renderedContent = this.template({
      profile: this.model
    });

    this.$el.html(renderedContent);
    return this;
  },

  subscribe: function(event) {
    var $target = $(event.currentTarget);

    //get user-id data attribute from html button
    var user_id = $target.data('user-id');
    //TODO: work on method for creating a subscription
  }
});
