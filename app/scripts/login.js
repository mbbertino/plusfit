var LoginView = Backbone.View.extend({

  className: "login",

  renderedTemplate: _.template($('#login-template').text()),

  events: {
    "click .js-signup-page": "goSignupPage"
  },

  goSignupPage: function() {
    new AppView()
  },

  initialize: function() {
    $('.signup').html(this.el)
    this.render()
  },

  render: function() {
    this.$el.html(this.renderedTemplate())
  }
})