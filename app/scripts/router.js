var MainRouter = Backbone.Router.extend({

  routes: {
    "": "home",
    "athleteprofile/:user": "goToProfile",
  },

  initialize: function() {},

  home: function() {
    if (Parse.User.current()) {
      window.router.navigate("/athleteprofile/" + Parse.User.current().attributes.username, {
        trigger: true
      });
    } else {
      new AppView()
    }
  },

  goToProfile: function() {
    if (Parse.User.current()) {
      new AthleteProfileView()
    } else {
      new AppView()
    }
  }
})