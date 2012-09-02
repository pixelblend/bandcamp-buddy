(function() {
  var BackgroundView,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  BackgroundView = (function(_super) {

    __extends(BackgroundView, _super);

    function BackgroundView() {
      BackgroundView.__super__.constructor.apply(this, arguments);
    }

    BackgroundView.prototype.attributes = {
      id: 'player-container'
    };

    BackgroundView.prototype.initialize = function() {
      this.model = this.options.model;
      this.container = this.options.container != null ? this.options.container : $('body');
      this.template = $('#player-template').html();
      this.template = $(this.template);
      return this.container.append(this.$el);
    };

    BackgroundView.prototype.render = function() {
      this.template.find('source').attr('src', this.model.nowPlaying.src);
      return this.$el.html(this.template);
    };

    return BackgroundView;

  })(Backbone.View);

  window.BackgroundView = BackgroundView;

}).call(this);
