(function() {
  var Core, _base;

  Core = {
    ctx: null,
    tickTimer: null,
    fps: 24,
    canvasWidth: 640,
    canvasHeight: 480,
    tileWidth: 10,
    tileHeight: 10,
    viewport: null,
    mapLayer: null,
    world: null,
    init: function() {
      this.initCanvas();
      this.initTicker();
      this.initViewport();
      return this.initWorld();
    },
    initWorld: function() {
      this.world = Td.Services.Loader.get('world');
      this.worldLayer = new Td.Gfx.Layers.IsometricMap(this.world, this.viewport, Td.Gfx.Renderers.Isometric.Diamond);
      return Td.Gfx.Renderers.DisplayObjects.add(this.worldLayer);
    },
    initViewport: function() {
      this.viewport = new Td.World.Viewport(this.tileWidth, this.tileHeight);
      Td.World.InteractiveViewport.init(this.ctx);
      return Td.World.InteractiveViewport.setViewport(this.viewport);
    },
    initCanvas: function() {
      return this.ctx = document.getElementById('canvas').getContext('2d');
    },
    initTicker: function() {
      var _this = this;
      return this.tickTimer = setInterval((function() {
        return _this.handleTick();
      }), 1000 / this.fps, this);
    },
    handleTick: function() {
      Td.Animation.Tween.update();
      Td.World.InteractiveViewport.update();
      Td.Gfx.Renderers.Clear.render(this.ctx, this.canvasWidth, this.canvasHeight);
      return Td.Gfx.Renderers.DisplayObjects.render(this.ctx);
    }
  };

  this.Td || (this.Td = {});

  (_base = this.Td).Game || (_base.Game = {});

  this.Td.Game.Core = Core;

}).call(this);
