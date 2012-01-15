(function() {
  var SpriteLoader, _base,
    _this = this;

  SpriteLoader = {
    stack: {},
    loadStack: [],
    toLoad: null,
    loading: false,
    completeHandlers: [],
    statusHandlers: [],
    numToLoad: 0,
    loaded: 0,
    add: function(id, url) {
      numToLoad++;
      if (this.stack[id]) this.remove(id);
      return this.loadStack.push(new Td.Gfx.Sprite(id, url));
    },
    remove: function(id) {},
    get: function(id) {
      return this.stack[id];
    },
    getProgress: function() {
      return loaded / parseFloat(numToLoad);
    },
    load: function(onComplete, onStatusUpdate) {
      if (onComplete != null) this.completeHandlers.push(onComplete);
      if (onStatusUpdate != null) this.statusHandlers.push(onStatusUpdate);
      if (!this.loading) return this.loadNext();
    },
    handleLoadComplete: function(event) {
      _this.placeLoadedIntoStack();
      _this.popLoadStack();
      _this.callStatusUpdateHandlers();
      return _this.loadNext();
    },
    loadNext: function() {
      this.loading = true;
      if (this.isLoadStackEmpty()) {
        return this.roundUpLoading();
      } else {
        return this.loadNextInStack();
      }
    },
    roundUpLoading: function() {
      this.callStatusUpdateHandlers();
      this.statusHandlers = [];
      this.loading = false;
      this.loaded = 0;
      this.numToLoad = 0;
      return this.callCompleteHandlers();
    },
    callStatusUpdateHandlers: function() {
      var handler, _i, _len, _ref, _results;
      _ref = this.statusHandlers;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        handler = _ref[_i];
        _results.push(handler());
      }
      return _results;
    },
    callCompleteHandlers: function() {
      var handler, _i, _len, _ref;
      _ref = this.completeHandlers;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        handler = _ref[_i];
        handler();
      }
      return this.completeHandlers = [];
    },
    updateProgress: function() {
      return this.loaded++;
    },
    placeLoadedIntoStack: function() {
      this.toLoad.loaded = true;
      return this.stack[this.toLoad.id] = this.toLoad;
    },
    popLoadStack: function() {
      this.toLoad = null;
      return this.loadStack.splice(0, 1);
    },
    isLoadStackEmpty: function() {
      return this.loadStack.length === 0;
    },
    loadNextInStack: function() {
      this.toLoad = this.loadStack[0];
      return this.toLoad.load();
    }
  };

  this.Td || (this.Td = {});

  (_base = this.Td).Services || (_base.Services = {});

  this.Td.Services.SpriteLoader = SpriteLoader;

}).call(this);
