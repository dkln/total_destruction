(function() {
  var Base, Boot, Clear, Colors, Container, ContainerBase, Core, Default, DisplayObjects, IdGenerator, Intro, Isometric, IsometricTile, Main, Math, Mixins, Object, Player, Progressbar, Sprite, SpriteLoader, Tile, Translate, Tween, TweenCommand, Viewport, _base, _base10, _base11, _base12, _base13, _base14, _base15, _base16, _base17, _base18, _base19, _base2, _base20, _base21, _base22, _base23, _base24, _base25, _base26, _base27, _base28, _base29, _base3, _base30, _base31, _base32, _base33, _base34, _base4, _base5, _base6, _base7, _base8, _base9;
  var _this = this, __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  this.Td || (this.Td = {});

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

  (_base2 = this.Td).Animation || (_base2.Animation = {});

  this.Td.Animation.TweenCommand = TweenCommand;

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
      Td.Game.Core.init();
      return Td.Game.Intro.boot();
    }
  };

  this.Td || (this.Td = {});

  (_base3 = this.Td).Game || (_base3.Game = {});

  this.Td.Game.Boot = Boot;

  $(function() {
    return Td.Game.Boot.boot();
  });

  Core = {
    ctx: null,
    tickTimer: null,
    fps: 24,
    init: function() {
      this.initCanvas();
      return this.initTicker();
    },
    initCanvas: function() {
      return this.ctx = document.getElementById('canvas').getContext();
    },
    initTicker: function() {
      return this.tickTimer = setInterval(this.handleTick, 1000 / this.fps, this);
    },
    handleTick: function() {
      Td.Animation.Tween.update();
      Td.Gfx.Renderers.Clear.render(_this.ctx);
      return Td.Gfx.Renderers.DisplayObjects.render(_this.ctx);
    }
  };

  this.Td || (this.Td = {});

  (_base4 = this.Td).Game || (_base4.Game = {});

  this.Td.Game.Core = Core;

  Intro = {
    boot: function() {}
  };

  this.Td || (this.Td = {});

  (_base5 = this.Td).Game || (_base5.Game = {});

  this.Td.Game.Intro = Intro;

  Main = {
    boot: function() {}
  };

  this.Td || (this.Td = {});

  (_base6 = this.Td).Game || (_base6.Game = {});

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

  (_base7 = this.Td).Game || (_base7.Game = {});

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

    Sprite.prototype.render = function(ctx) {
      return ctx.drawImage(this.image, 0, 0);
    };

    return Sprite;

  })();

  this.Td || (this.Td = {});

  (_base8 = this.Td).Gfx || (_base8.Gfx = {});

  this.Td.Gfx.Sprite = Sprite;

  Colors = {
    hex2rgba: function(hex) {
      var num;
      num = parseInt(hex.slice(1), 16);
      return [num >> 16 & 255, num >> 8 & 255, num & 255, num >> 24 & 255];
    },
    firstUpcase: function(str) {
      return str.substr(0, 1).toUpperCase() + str.substr(1);
    }
  };

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

  (_base9 = this.Td).Services || (_base9.Services = {});

  this.Td.Services.IdGenerator = IdGenerator;

  Math = {
    angleToRadians: function(angle) {
      return angle * Math.PI / 180;
    }
  };

  this.Td || (this.Td = {});

  (_base10 = this.Td).Services || (_base10.Services = {});

  this.Td.Services.Math = Math;

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

  Progressbar = (function() {

    function Progressbar() {}

    return Progressbar;

  })();

  Base = (function() {

    function Base() {
      this.width = 0;
      this.height = 0;
      this.tiles = [];
    }

    Base.prototype.set = function(tileId, x, y) {
      var _base12;
      (_base12 = this.tiles)[y] || (_base12[y] = []);
      this.tiles[y][x] = tileId;
      if (x > this.width) this.width = x;
      if (y > this.height) return this.height = y;
    };

    return Base;

  })();

  this.Td || (this.Td = {});

  (_base12 = this.Td).World || (_base12.World = {});

  this.Td.World.Base = Base;

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

  (_base13 = this.Td).World || (_base13.World = {});

  this.Td.World.Tile = Tile;

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

  (_base14 = this.Td).World || (_base14.World = {});

  this.Td.World.Viewport = Viewport;

  Default = function(t, b, c, d) {
    return -c * (t /= d) * (t - 2) + b;
  };

  this.Td || (this.Td = {});

  (_base15 = this.Td).Animation || (_base15.Animation = {});

  (_base16 = this.Td.Animation).Easing || (_base16.Easing = {});

  this.Td.Animation.Easing.Default = Default;

  Container = (function() {

    function Container() {}

    Container.prototype.render = function(ctx) {
      return true;
    };

    return Container;

  })();

  Td.Services.Mixins.include(Container, Td.Gfx.Layers.ContainerBase);

  this.Td || (this.Td = {});

  (_base17 = this.Td).Gfx || (_base17.Gfx = {});

  (_base18 = this.Td.Gfx).Layers || (_base18.Layers = {});

  this.Td.Gfx.Layers.Container = Container;

  ContainerBase = {
    add: function(child) {
      Td.Gfx.Renderers.DisplayObjects.childrenChanged = true;
      if (child.parent) child.parent.remove(child);
      this.setAncestorsFor(child);
      child.translatedObjects = [child].concat(child.ancestors).reverse();
      this.children.push(child);
      return this;
    },
    remove: function(child) {
      var index;
      if ((index = this.children.indexOf(child)) > -1) {
        Td.Gfx.Renderers.DisplayObjects.childrenChanged = true;
        child.parent = null;
        child.ancestors = null;
        child.translatedObjects = null;
        this.children.splice(index, 1);
      }
      return this;
    },
    setAncestorsFor: function(child) {
      var theParent;
      child.parent = this;
      child.ancestors = [];
      theParent = this;
      while (theParent) {
        child.ancestors.push(theParent);
        theParent = theParent.parent;
      }
      return true;
    }
  };

  this.Td || (this.Td = {});

  (_base19 = this.Td).Gfx || (_base19.Gfx = {});

  (_base20 = this.Td.Gfx).Layers || (_base20.Layers = {});

  this.Td.Gfx.Layers.ContainerBase = ContainerBase;

  Object = (function() {

    function Object() {
      this.id = '';
      this.x = 0;
      this.y = 0;
      this.oldX = null;
      this.oldY = null;
      this.calculatedX = 0;
      this.calculatedY = 0;
      this.width = 0;
      this.height = 0;
      this.alpha = 1;
      this.oldAlpha = 1;
      this.calculatedAlpha = 1;
      this.scaleX = 1;
      this.scaleY = 1;
      this.oldScaleX = null;
      this.oldScaleY = null;
      this.calculatedScaleX = 1;
      this.calculatedScaleY = 1;
      this.rotation = 0;
      this.oldRotation = null;
      this.calculatedRotation = 0;
      this.enabled = true;
      this.visible = true;
      this.oldVisible = null;
      this.calculatedVisibility = true;
      this.parent = null;
      this.ancestors = null;
      this.translatedObjects = null;
    }

    Object.prototype.positionChanged = function() {
      return this.x !== this.oldX || this.y !== this.oldY || this.rotation !== this.oldRotation || this.scaleX !== this.oldScaleX || this.scaleY !== this.oldScaleY || this.visible !== this.old || Td.Gfx.Layers.Translate.ancestorsPositionChanged(this);
    };

    return Object;

  })();

  this.Td || (this.Td = {});

  (_base21 = this.Td).Gfx || (_base21.Gfx = {});

  (_base22 = this.Td.Gfx).Layes || (_base22.Layes = {});

  this.Td.Gfx.Layers.Object = Object;

  Sprite = (function() {

    __extends(Sprite, Td.Gfx.Layers.Object);

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

    Sprite.prototype.render = function(ctx) {
      return ctx.drawImage(this.image, 0, 0);
    };

    return Sprite;

  })();

  this.Td || (this.Td = {});

  (_base23 = this.Td).Gfx || (_base23.Gfx = {});

  (_base24 = this.Td.Gfx).Layers || (_base24.Layers = {});

  this.Td.Gfx.Layers.Sprite = Sprite;

  Translate = {
    setCanvasPositions: function(layer) {
      var newVars;
      if (layer.positionChanged()) {
        layer.oldX = layer.x;
        layer.oldY = layer.y;
        layer.oldVisible = layer.visible;
        layer.oldAlpha = layer.alpha;
        newVars = this.getCanvasPositions(layer);
        layer.calculatedX = newVars[0];
        layer.calculatedY = newVars[1];
        layer.calculatedVisibility = newVars[2];
        return layer.calculatedAlpha = newVars[3];
      }
    },
    getCanvasPositions: function(layer) {
      var theParent, translatedAlpha, translatedVisibility, translatedX, translatedY;
      theParent = layer;
      translatedX = 0;
      translatedY = 0;
      translatedVisibility = true;
      translatedAlpha = 1;
      while (theParent) {
        if (!theParent.visible) translatedVisibility = false;
        translatedX += theParent.x;
        translatedY += theParent.y;
        translatedAlpha *= theParent.alpha;
        theParent = theParent.parent;
      }
      return [translatedX, translatedY, translatedVisibility, translatedAlpha];
    },
    ancestorsPositionChanged: function(layer) {
      var ancestor, _i, _len, _ref;
      _ref = layer.ancestors;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        ancestor = _ref[_i];
        if (ancestor.positionChanged()) return true;
      }
      return false;
    }
  };

  this.Td || (this.Td = {});

  (_base25 = this.Td).Gfx || (_base25.Gfx = {});

  (_base26 = this.Td.Gfx).Layes || (_base26.Layes = {});

  this.Td.Gfx.Layers.Translate = Translate;

  Clear = {
    render: function(ctx) {
      return ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  };

  this.Td || (this.Td = {});

  (_base27 = this.Td).Gfx || (_base27.Gfx = {});

  (_base28 = this.Td.Gfx).Renderers || (_base28.Renderers = {});

  this.Td.Gfx.Renderers.Clear = Clear;

  DisplayObjects = {
    allChildren: [],
    children: [],
    childrenChanged: false,
    cloneCanvas: function() {
      var canvas;
      canvas = document.createElement('canvas');
      canvas.width = this.canvas.width;
      canvas.height = this.canvas.height;
      return canvas;
    },
    render: function(ctx) {
      if (this.childrenChanged) {
        this.findAllChildren();
        this.childrenChanged = false;
      }
      return this.renderAllChildren(ctx);
    },
    setupContext: function(ctx, child) {
      var object, _i, _len, _ref, _results;
      ctx.globalAlpha = child.calculatedAlpha;
      _ref = child.translatedObjects;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        object = _ref[_i];
        ctx.translate(object.x, object.y);
        ctx.rotate(Td.Services.Math.angleToRadians(object.rotation));
        _results.push(ctx.scale(object.scaleX, object.scaleY));
      }
      return _results;
    },
    renderAllChildren: function(ctx) {
      var child, _i, _len, _ref, _results;
      _ref = this.allChildren;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        child = _ref[_i];
        Td.Gfx.Layers.Translate.setCanvasPositions(child);
        if (child.calculatedVisibility) {
          _results.push(this.renderChild(ctx));
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    },
    renderChild: function(ctx) {
      ctx.save();
      this.setupContext(ctx, child);
      child.render(ctx);
      return ctx.restore();
    },
    findAllChildren: function() {
      this.allChildren = [];
      return this.getChildren(this, this.allChildren);
    },
    getChildren: function(fromParent, collectedChildren) {
      var child, _i, _len, _ref;
      _ref = fromParent.children;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        child = _ref[_i];
        collectedChildren.push(child);
        if (this.hasChildren(child)) this.getChildren(child, collectedChildren);
      }
      return collectedChildren;
    },
    hasChildren: function(object) {
      return (object.children != null) && object.children.length > 0;
    }
  };

  Td.Services.Mixins.include(DisplayObjects, Td.Gfx.DisplayContainerBase);

  this.Td || (this.Td = {});

  (_base29 = this.Td).Gfx || (_base29.Gfx = {});

  (_base30 = this.Td.Gfx).Renderers || (_base30.Renderers = {});

  this.Td.Gfx.Renderers.DisplayObjects = DisplayObjects;

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

  (_base31 = this.Td).Gfx || (_base31.Gfx = {});

  (_base32 = this.Td.Gfx).Renderers || (_base32.Renderers = {});

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

  (_base33 = this.Td).Gfx || (_base33.Gfx = {});

  (_base34 = this.Td.Gfx).Renderers || (_base34.Renderers = {});

  this.Td.Gfx.Renderers.IsometricTile = IsometricTile;

}).call(this);
