(function() {
  var Boot, _base;

  Boot = {
    canvasWidth: 640,
    canvasHeight: 480,
    tiles: {
      pavement: 'img/tiles/pavement.png',
      grass: 'img/tiles/grass.png',
      speedway: 'img/tiles/speedway.png'
    },
    maps: {
      world: 'maps/test.map'
    },
    configLoader: function() {
      return Td.Services.Loader.basePath = 'public/';
    },
    boot: function() {
      this.configLoader();
      return this.loadAssets();
    },
    loadAssets: function() {
      Td.Services.Loader.addStack(this.tiles, 'sprite');
      Td.Services.Loader.addStack(this.maps, 'world');
      Td.Services.Loader.load(this.handleComplete, this.handleStatusUpdate);
      return $('#progressbar').show();
    },
    handleStatusUpdate: function() {
      return $('#progressbar .progress').width(Td.Services.Loader.getProgress() * 100);
    },
    handleComplete: function() {
      $('#progressbar').hide();
      Td.Game.Core.init();
      return Td.Game.Intro.boot();
    }
  };

  this.Td || (this.Td = {});

  (_base = this.Td).Game || (_base.Game = {});

  this.Td.Game.Boot = Boot;

  $(function() {
    return Td.Game.Boot.boot();
  });

}).call(this);
