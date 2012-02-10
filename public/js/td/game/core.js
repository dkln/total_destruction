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
      this.initViewport();
      this.initWorld();
      this.initUi();
      this.initTicker();
      return this.run();
    },
    initWorld: function() {
      this.world = Td.Services.Loader.get('world');
      this.worldLayer = new Td.Gfx.Layers.IsometricMap(this.world, this.viewport, Td.Gfx.Renderers.Isometric.Diamond);
      return Td.Gfx.Renderers.DisplayObjects.add(this.worldLayer);
    },
    initViewport: function() {
      return this.viewport = new Td.World.Viewport(this.tileWidth, this.tileHeight);
    },
    initUi: function() {
      Td.Ui.Mouse.init(this.ctx);
      Td.Ui.InteractiveViewport.init(this.ctx);
      return Td.Ui.InteractiveViewport.viewport = this.viewport;
    },
    initCanvas: function() {
      return this.ctx = document.getElementById('canvas').getContext('2d');
    },
    initTicker: function() {
      return window.requestAnimFrame = window.webkitRequestAnimationFrame || window.requestAnimationFrame;
    },
    run: function() {
      var _this = this;
      return window.requestAnimFrame(function() {
        return _this.handleTick();
      });
    },
    handleTick: function() {
      var _this = this;
      try {
        window.requestAnimFrame(function() {
          return _this.handleTick();
        });
        Td.Animation.Tween.update();
        Td.Ui.InteractiveViewport.update();
        Td.Gfx.Renderers.Clear.render(this.ctx, this.canvasWidth, this.canvasHeight);
        Td.Gfx.Renderers.DisplayObjects.render(this.ctx);
        return Td.Ui.Mouse.cleanup();
      } catch (error) {
        clearInterval(this.tickTimer);
        if (console) console.log('Error in render tick, exiting render loop');
        throw error;
      }
    }
  };

  this.Td || (this.Td = {});

  (_base = this.Td).Game || (_base.Game = {});

  this.Td.Game.Core = Core;

}).call(this);
