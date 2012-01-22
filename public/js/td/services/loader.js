(function() {
  var Loader, _base;

  Loader = {
    stack: {},
    loadStack: [],
    toLoad: null,
    loading: false,
    completeHandlers: [],
    statusHandlers: [],
    numToLoad: 0,
    loaded: 0,
    basePath: '',
    addStack: function(stack, type) {
      var id, url, _results;
      _results = [];
      for (id in stack) {
        url = stack[id];
        _results.push(this.add(id, url, type));
      }
      return _results;
    },
    add: function(id, url, type) {
      this.numToLoad++;
      if (this.stack[id]) this.remove(id);
      return this.loadStack.push(new Td.Services.Loader[Td.Services.String.titleize(type)](id, url));
    },
    remove: function(id) {},
    get: function(id) {
      if (!this.stack[id]) console.log("Unknown item " + id + " requested");
      return this.stack[id];
    },
    getProgress: function() {
      return this.loaded / parseFloat(this.numToLoad);
    },
    load: function(onComplete, onStatusUpdate) {
      if (onComplete != null) this.completeHandlers.push(onComplete);
      if (onStatusUpdate != null) this.statusHandlers.push(onStatusUpdate);
      if (!this.loading) return this.loadNext();
    },
    handleLoadComplete: function(event) {
      this.placeLoadedIntoStack();
      this.popLoadStack();
      this.callStatusUpdateHandlers();
      return this.loadNext();
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
      return this.stack[this.toLoad.id] = this.toLoad.get();
    },
    popLoadStack: function() {
      this.toLoad = null;
      return this.loadStack.splice(0, 1);
    },
    isLoadStackEmpty: function() {
      return this.loadStack.length === 0;
    },
    loadNextInStack: function() {
      var _this = this;
      this.toLoad = this.loadStack[0];
      return this.toLoad.load(function(event) {
        return _this.handleLoadComplete(event);
      });
    }
  };

  this.Td || (this.Td = {});

  (_base = this.Td).Services || (_base.Services = {});

  this.Td.Services.Loader = Loader;

}).call(this);
