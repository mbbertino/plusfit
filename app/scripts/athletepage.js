var AthleteProfileView = Backbone.View.extend({

  className: "profile-container col-sm-10",

  renderedTemplate: _.template($('#profile-template').text()),

  events: {

  },

  initialize: function() {
    $('.container').html(this.el)
    this.render()
  },

  render: function() {
    this.$el.html(this.renderedTemplate())
  }
})