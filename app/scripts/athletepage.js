var AthleteProfileView = Backbone.View.extend({

  className: "profile-container col-sm-10",

  renderedTemplate: _.template($('#profile-template').text()),

  events: {
    "click .js-logout": "logOut"
  },

  initialize: function() {
    $('.container').html(this.el)
    this.render()
  },

  logOut: function() {
    Parse.User.logOut()
    window.router.navigate("", {
      trigger: true
    });
  },
  render: function() {
    this.$el.html(this.renderedTemplate())
  }
})