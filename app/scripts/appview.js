var AppView = Backbone.View.extend({

  className: "signup col-md-6",

  renderedTemplate: _.template($('#appview-template').text()),

  events: {
    "click .js-login-page": "goLoginPage",
    "click .js-signup": "signUp"
  },

  goLoginPage: function() {
    new LoginView()
  },

  signUp: function() {
    var user = new Parse.User();

    user.set("username", this.$('.js-email').val());
    user.set("password", this.$('.js-password').val());
    user.set("email", this.$('.js-email').val());

    user.signUp(null, {
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

  initialize: function() {
    $('.container').html(this.el)
    this.render()

    $('.signup').css({
      top: ($(window).height() - $('.signup').outerHeight()) / 2
    });

    $(window).resize(function() {
      $('.signup').css({
        position: 'absolute',
        left: ($(window).width() - $('.signup').outerWidth()) / 2,
        top: ($(window).height() - $('.signup').outerHeight()) / 2
      });
    });
  },

  render: function() {
    this.$el.html(this.renderedTemplate())
  }
})