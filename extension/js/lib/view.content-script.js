(function() {
  var ContentScript,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  ContentScript = (function(_super) {

    __extends(ContentScript, _super);

    function ContentScript() {
      ContentScript.__super__.constructor.apply(this, arguments);
    }

    ContentScript.prototype.tagName = 'button';

    ContentScript.prototype.attributes = {
      id: 'add-to-list',
      text: 'Add to list'
    };

    ContentScript.prototype.events = {
      click: 'addToList'
    };

    ContentScript.prototype.initialize = function(model) {
      this.model = model;
      return this.$el.appendTo('body');
    };

    ContentScript.prototype.render = function() {};

    ContentScript.prototype.addToList = function() {
      return this.model.scrape();
    };

    return ContentScript;

  })(Backbone.View);

  window.ContentScript = ContentScript;

}).call(this);
