var LoginView = Backbone.View.extend({

  className: "login",

  renderedTemplate: _.template($('#login-template').text()),

  events: {
    "click .js-signup-page": "goSignupPage",
    "click .js-login": "login"
  },

  goSignupPage: function() {
    new AppView()
  },

  initialize: function() {
    $('.signup').html(this.el)
    this.render()
  },

  login: function() {
    Parse.User.logIn(this.$('.js-email').val(), this.$('.js-password').val(), {
      success: function(user) {
        window.router.navigate("/athleteprofile/" + Parse.User.current().attributes.username, {
          trigger: true
        });
      },
      error: function(user, error) {
        alert("Error: " + error.code + " " + error.message);
      }
    });
  },

  render: function() {
    this.$el.html(this.renderedTemplate())
  }
})