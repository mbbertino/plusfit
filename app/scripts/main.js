$(document).ready(function() {
  Parse.initialize("G9uyCX4XU9TeNlK68J7Twj2cB9r6uS2yaejr4WEM", "cEoLgevYZmA7OHALB8Z5dyZoGnyJ3MvdfVRIKDDv");

  window.router = new MainRouter();
  Backbone.history.start();
});