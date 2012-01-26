(function() {
  var Isometric, _base, _base2;

  Isometric = {
    render: function(ctx, world, viewport) {
      var worldX, worldY, _ref, _results;
      _results = [];
      for (worldY = 0, _ref = world.height; 0 <= _ref ? worldY <= _ref : worldY >= _ref; 0 <= _ref ? worldY++ : worldY--) {
        _results.push((function() {
          var _ref2, _results2;
          _results2 = [];
          for (worldX = _ref2 = world.width; _ref2 <= 0 ? worldX <= 0 : worldX >= 0; _ref2 <= 0 ? worldX++ : worldX--) {
            _results2.push(Td.Gfx.Renderers.IsometricTile.render(ctx, world, viewport, worldX, worldY));
          }
          return _results2;
        })());
      }
      return _results;
    }
  };

  this.Td || (this.Td = {});

  (_base = this.Td).Gfx || (_base.Gfx = {});

  (_base2 = this.Td.Gfx).Renderers || (_base2.Renderers = {});

  this.Td.Gfx.Renderers.Isometric = Isometric;

}).call(this);
