(function() {
  var Tween, _base;

  Tween = {
    tweens: [],
    initTime: new Date().getTime(),
    to: function(object, duration, toParams, options) {
      var tween;
      tween = new TweenCommand(object, toParams);
      tween.duration = duration;
      if (options) {
        tween.onComplete = options.onComplete;
        tween.delay = options.delay || 0;
        if (options.ease != null) tween.ease = options.ease;
      }
      tween.finished = false;
      return this.tweens.push(tween);
    },
    kill: function(object) {
      var i, _ref, _results;
      _results = [];
      for (i = _ref = this.tweens.length - 1; i >= i; i += -1) {
        if (this.tweens[i].object === object) {
          this.tweens[i] = null;
          this.tweens.splice(i, 1);
          _results.push(i = -1);
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    },
    update: function() {
      var doCleanup, i, time, _ref;
      if (this.hasTweens()) {
        doCleanup = false;
        time = new Date().getTime();
        for (i = 0, _ref = this.tweens.length - 1; 0 <= _ref ? i <= _ref : i >= _ref; 0 <= _ref ? i++ : i--) {
          this.tweens[i].update(time);
          this.tweens[i] = this.checkCleanup(tween);
        }
        if (cleanup) return this.cleanup();
      }
    },
    hasTweens: function() {
      return this.tweens.length > 0;
    },
    checkCleanup: function(tween) {
      var doCleanup;
      if (tween.finished) {
        doCleanup = true;
        return null;
      } else {
        return tween;
      }
    },
    cleanup: function() {
      var i, _ref, _results;
      _results = [];
      for (i = i, _ref = this.tweens.length - 1; i <= _ref ? i <= _ref : i >= _ref; i <= _ref ? i++ : i--) {
        if (!this.tweens[i]) {
          this.tweens.splice(i, 1);
          _results.push(i = -1);
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    }
  };

  this.Td || (this.Td = {});

  (_base = this.Td).Animation || (_base.Animation = {});

  this.Td.Animation.Tween = Tween;

}).call(this);
