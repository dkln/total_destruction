(function() {
  var Boot, Colors, Core, Default, IdGenerator, Intro, Isometric, IsometricTile, Main, Mixins, Player, Progressbar, Sprite, SpriteLoader, Tile, Tween, TweenCommand, Viewport, World, _base, _base10, _base11, _base12, _base13, _base14, _base15, _base16, _base17, _base18, _base19, _base2, _base3, _base4, _base5, _base6, _base7, _base8, _base9;
  var _this = this;

  this.Td || (this.Td = {});

  TweenCommand = (function() {

    function TweenCommand(object, toParams) {
      var property;
      this.object = object;
      this.toParams = toParams;
      this.startTime = new Date().getTime();
      this.duration = 0;
      this.delay = 0;
      this.ease = Td.Animation.Easing.Default;
      this.finished = false;
      this.onComplete = null;
      this.startValues = {};
      for (property in this.toParams) {
        if (this.object.hasOwnProperty(property)) {
          this.startValues[property] = this.object[property];
          this.toParams[property] = this.toParams[property] - this.object[property];
        }
      }
    }

    TweenCommand.prototype.update = function(updateTime) {
      var factor, property, time, _results;
      time = updateTime - this.startTime;
      if (time >= this.duration) {
        factor = 1;
        this.finished = true;
      } else {
        this.finished = false;
        factor = this.ease(time, 0, 1, this.duration);
      }
      _results = [];
      for (property in this.toParams) {
        _results.push(this.object[property] = this.startValues[property] + (factor * this.toParams[property]));
      }
      return _results;
    };

    return TweenCommand;

  })();

  this.Td || (this.Td = {});

  (_base = this.Td).Animation || (_base.Animation = {});

  this.Td.Animation.TweenCommand = TweenCommand;

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

  (_base2 = this.Td).Animation || (_base2.Animation = {});

  this.Td.Animation.Tween = Tween;

  Intro = {
    boot: function() {}
  };

  this.Td || (this.Td = {});

  (_base3 = this.Td).Game || (_base3.Game = {});

  this.Td.Game.Intro = Intro;

  Main = {
    boot: function() {}
  };

  this.Td || (this.Td = {});

  (_base4 = this.Td).Game || (_base4.Game = {});

  this.Td.Game.Main = Main;

  Player = (function() {

    function Player() {
      this.x = 0;
      this.y = 0;
      this.z = 0;
      this.name = '';
      this.id = Td.Services.IdGenerator.generate();
    }

    return Player;

  })();

  this.Td || (this.Td = {});

  (_base5 = this.Td).Game || (_base5.Game = {});

  this.Td.Game.Player = Player;

  Sprite = (function() {

    function Sprite(id, url) {
      this.id = id;
      this.url = url;
      this.loaded = false;
      this.image = null;
    }

    Sprite.prototype.load = function(onComplete) {
      this.image = new Image();
      this.image.onload = onComplete;
      return this.image.src = this.url;
    };

    Sprite.prototype.render = function(ctx, x, y) {
      return ctx.drawImage(this.image, x, y);
    };

    return Sprite;

  })();

  this.Td || (this.Td = {});

  (_base6 = this.Td).Gfx || (_base6.Gfx = {});

  this.Td.Gfx.Sprite = Sprite;

  Tile = (function() {

    function Tile() {
      this.x = 0;
      this.y = 0;
      this.z = 0;
      this.sprite = null;
    }

    return Tile;

  })();

  this.Td || (this.Td = {});

  (_base7 = this.Td).Gfx || (_base7.Gfx = {});

  this.Td.Gfx.Tile = Tile;

  Viewport = (function() {

    function Viewport() {
      this.x = 0;
      this.y = 0;
      this.width = 0;
      this.height = 0;
    }

    Viewport.prototype.boundX = function(world) {
      var boundX;
      boundX = x + this.width;
      if (boundX > world.width) return boundX = world.width;
    };

    Viewport.prototype.boundY = function(world) {
      var boundY;
      boundY = y + this.height;
      if (boundX > world.height) return boundY = world.height;
    };

    return Viewport;

  })();

  this.Td || (this.Td = {});

  (_base8 = this.Td).Gfx || (_base8.Gfx = {});

  this.Td.Gfx.Viewport = Viewport;

  World = (function() {

    function World() {
      this.width = 0;
      this.height = 0;
      this.tiles = [];
    }

    World.prototype.set = function(tileId, x, y) {
      var _base9;
      (_base9 = this.tiles)[y] || (_base9[y] = []);
      this.tiles[y][x] = tileId;
      if (x > this.width) this.width = x;
      if (y > this.height) return this.height = y;
    };

    return World;

  })();

  this.Td || (this.Td = {});

  (_base9 = this.Td).Gfx || (_base9.Gfx = {});

  this.Td.Gfx.World = World;

  Colors = {
    hex2rgba: function(hex) {
      var num;
      num = parseInt(hex.slice(1), 16);
      return [num >> 16 & 255, num >> 8 & 255, num & 255, num >> 24 & 255];
    },
    angleToRadians: function(angle) {
      return angle * Math.PI / 180;
    },
    firstUpcase: function(str) {
      return str.substr(0, 1).toUpperCase() + str.substr(1);
    }
  };

  Boot = {
    assets: {
      logo: 'logo.png'
    },
    boot: function() {
      Td.Services.SpriteLoader.basePath = 'public/img/';
      Td.Services.SpriteLoader.addStack(this.assets);
      Td.Services.SpriteLoader.load(this.handleComplete, this.handleStatusUpdate);
      return $('#progressbar').show();
    },
    handleStatusUpdate: function() {
      return $('#progressbar .progress').width(Td.Services.SpriteLoader.getProgress() * 100);
    },
    handleComplete: function() {
      $('#progressbar').hide();
      return Td.Game.Intro.boot();
    }
  };

  this.Td || (this.Td = {});

  (_base10 = this.Td).Game || (_base10.Game = {});

  this.Td.Game.Boot = Boot;

  $(function() {
    return Td.Game.Boot.boot();
  });

  Mixins = {
    extend: function(object, mixin) {
      var method, name, _results;
      _results = [];
      for (name in mixin) {
        method = mixin[name];
        _results.push(object[name] = method);
      }
      return _results;
    },
    include: function(object, mixin) {
      return extend(object.prototype, mixin);
    }
  };

  Progressbar = (function() {

    function Progressbar() {}

    return Progressbar;

  })();

  SpriteLoader = {
    stack: {},
    loadStack: [],
    toLoad: null,
    loading: false,
    completeHandlers: [],
    statusHandlers: [],
    numToLoad: 0,
    loaded: 0,
    basePath: '',
    addStack: function(stack) {
      var id, url, _results;
      _results = [];
      for (id in stack) {
        url = stack[id];
        _results.push(this.add(id, url));
      }
      return _results;
    },
    add: function(id, url) {
      this.numToLoad++;
      if (this.stack[id]) this.remove(id);
      return this.loadStack.push(new Td.Gfx.Sprite(id, "" + this.basePath + url));
    },
    remove: function(id) {},
    get: function(id) {
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

  (_base11 = this.Td).Services || (_base11.Services = {});

  this.Td.Services.SpriteLoader = SpriteLoader;

  IdGenerator = {
    generate: function(length) {
      var id;
      if (length == null) length = 8;
      id = "";
      while (id.length < length) {
        id += Math.random().toString(36).substr(2);
      }
      return id.substr(0, length);
    }
  };

  this.Td || (this.Td = {});

  (_base12 = this.Td).Services || (_base12.Services = {});

  this.Td.Services.IdGenerator = IdGenerator;

  Core = {
    renderer: function() {}
  };

  this.Td || (this.Td = {});

  (_base13 = this.Td).Game || (_base13.Game = {});

  this.Td.Game.Core = Core;

  Default = function(t, b, c, d) {
    return -c * (t /= d) * (t - 2) + b;
  };

  this.Td || (this.Td = {});

  (_base14 = this.Td).Animation || (_base14.Animation = {});

  (_base15 = this.Td.Animation).Easing || (_base15.Easing = {});

  this.Td.Animation.Easing.Default = Default;

  Isometric = {
    render: function(ctx, world, viewport) {
      var fromX, toX, worldX, worldY, _ref, _ref2, _results;
      fromX = viewport.x;
      toX = viewport.boundX(world);
      _results = [];
      for (worldY = _ref = viewport.y, _ref2 = viewport.boundY(world); _ref <= _ref2 ? worldY <= _ref2 : worldY >= _ref2; _ref <= _ref2 ? worldY++ : worldY--) {
        _results.push((function() {
          var _results2;
          _results2 = [];
          for (worldX = fromX; fromX <= toX ? worldX <= toX : worldX >= toX; fromX <= toX ? worldX++ : worldX--) {
            _results2.push(Td.Gfx.Renderers.IsometricTile.draw(ctx, world, viewport, worldX, worldY));
          }
          return _results2;
        })());
      }
      return _results;
    }
  };

  this.Td || (this.Td = {});

  (_base16 = this.Td).Gfx || (_base16.Gfx = {});

  (_base17 = this.Td.Gfx).Renderers || (_base17.Renderers = {});

  this.Td.Gfx.Renderers.Isometric = Isometric;

  IsometricTile = {
    width: 25,
    height: 25,
    render: function(ctx, world, viewport, worldX, worldY) {
      var x, y;
      x = this.getScreenX(world, viewport, worldX, worldY, world[worldY][worldX]);
      y = this.getScreenY(world, viewport, worldX, worldY, world[worldY][worldX]);
      return this.renderOnScreen(x, y, world[worldY][worldX]);
    },
    renderOnScreen: function(ctx, screenX, screenY, tile) {
      return tile.render(ctx, screenX, screenY);
    },
    getScreenX: function(world, viewport, worldX, worldY, tile) {
      var x;
      x = this.getScreenOffsetX(worldY, viewport) + this.getWorldOffsetX(worldX, viewport) * this.width;
      return this.getCenterX(x, tile);
    },
    getScreenY: function(world, viewport, worldX, worldY, tile) {
      var y;
      y = this.getWorldOffsetY(worldY, viewport) * this.height / 2;
      return this.getCenterY(y, tile);
    },
    getCenterX: function(x, tile) {
      return x + (this.width / 2 - tile.sprite.width / 2);
    },
    getCenterY: function(x, tile) {
      return y + (this.height / 2 - tile.sprite.height / 2);
    },
    getWorldOffsetX: function(x, viewport) {
      return viewport.x - x;
    },
    getWorldOffsetY: function(y, viewport) {
      return viewport.y - y;
    },
    getScreenOffsetX: function(worldY, viewport) {
      if (this.getWorldOffsetY(worldY) % 2 === 0) {
        return this.width / 2;
      } else {
        return 0;
      }
    }
  };

  this.Td || (this.Td = {});

  (_base18 = this.Td).Gfx || (_base18.Gfx = {});

  (_base19 = this.Td.Gfx).Renderers || (_base19.Renderers = {});

  this.Td.Gfx.Renderers.IsometricTile = IsometricTile;

}).call(this);
