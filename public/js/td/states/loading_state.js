(function() {
  var _base,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; },
    _this = this;

  __extends(LoadingState, BaseState({
    assets: {
      logo: 'logo.png'
    },
    handleOpen: function() {
      return this.setOpenReady();
    },
    load: function() {
      var id, url, _len, _ref;
      _ref = this.assets;
      for (url = 0, _len = _ref.length; url < _len; url++) {
        id = _ref[url];
        Td.Services.SpriteLoader.add(id, url);
      }
      return Td.Services.SpriteLoader.load(this.handleLoadComplete, this.handleStatusUpdate);
    },
    handleLoadComplete: function() {},
    handleStatusUpdate: function() {}
  }));

  this.Td || (this.Td = {});

  (_base = this.Td).States || (_base.States = {});

  this.Td.Sates.LoadingState = LoadingState;

}).call(this);
