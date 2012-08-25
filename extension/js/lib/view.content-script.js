(function() {
  var ContentScriptView,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  ContentScriptView = (function(_super) {

    __extends(ContentScriptView, _super);

    function ContentScriptView() {
      ContentScriptView.__super__.constructor.apply(this, arguments);
    }

    ContentScriptView.prototype.tagName = 'button';

    ContentScriptView.prototype.attributes = {
      id: 'add-to-list'
    };

    ContentScriptView.prototype.events = {
      click: 'addToList'
    };

    ContentScriptView.prototype.initialize = function(model) {
      this.model = model;
      this.$el.text('Add to list');
      this.$el.hide();
      return this.$el.appendTo('body');
    };

    ContentScriptView.prototype.render = function() {
      return this.$el.show();
    };

    ContentScriptView.prototype.addToList = function() {
      return this.model.scrape();
    };

    return ContentScriptView;

  })(Backbone.View);

  window.ContentScriptView = ContentScriptView;

}).call(this);
