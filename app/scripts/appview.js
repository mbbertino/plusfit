var AppView = Backbone.View.extend({

  className: "signup col-md-6",

  renderedTemplate: _.template($('#appview-template').text()),

  events: {
    "click .js-login-page": "goLoginPage"
  },

  goLoginPage: function() {
    new LoginView()
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