(function() {
  var Isometric, _base, _base2;

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

  (_base = this.Td).Gfx || (_base.Gfx = {});

  (_base2 = this.Td.Gfx).Renderers || (_base2.Renderers = {});

  this.Td.Gfx.Renderers.Isometric = Isometric;

}).call(this);
