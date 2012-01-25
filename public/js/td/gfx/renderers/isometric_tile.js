(function() {
  var IsometricTile, _base, _base2;

  IsometricTile = {
    width: 50,
    height: 25,
    render: function(ctx, world, viewport, worldX, worldY) {
      var x, y;
      if (world.tiles[worldY][worldX]) {
        x = this.getScreenX(world, viewport, worldX, worldY, world.tiles[worldY][worldX]);
        y = this.getScreenY(world, viewport, worldX, worldY, world.tiles[worldY][worldX]);
        return this.renderOnScreen(ctx, x, y, world.tiles[worldY][worldX]);
      }
    },
    renderOnScreen: function(ctx, screenX, screenY, sprite) {
      return sprite.render(ctx, screenX, screenY);
    },
    getScreenX: function(world, viewport, worldX, worldY, tile) {
      var x;
      x = this.getScreenOffsetX(worldY, viewport) + this.getWorldOffsetX(worldX, viewport) * this.width;
      return Math.round(this.getCenterX(x, tile));
    },
    getScreenY: function(world, viewport, worldX, worldY, tile) {
      var y;
      y = this.getWorldOffsetY(worldY, viewport) * this.height / 2;
      return Math.round(this.getCenterY(y, tile));
    },
    getCenterX: function(x, tile) {
      return x + (this.width / 2 - tile.width / 2);
    },
    getCenterY: function(y, tile) {
      return y + (this.height / 2 - tile.height / 2);
    },
    getWorldOffsetX: function(x, viewport) {
      return x - viewport.x;
    },
    getWorldOffsetY: function(y, viewport) {
      return y - viewport.y;
    },
    getScreenOffsetX: function(worldY, viewport) {
      if (this.getWorldOffsetY(worldY, viewport) % 2 === 0) {
        return this.width / 2;
      } else {
        return 0;
      }
    }
  };

  this.Td || (this.Td = {});

  (_base = this.Td).Gfx || (_base.Gfx = {});

  (_base2 = this.Td.Gfx).Renderers || (_base2.Renderers = {});

  this.Td.Gfx.Renderers.IsometricTile = IsometricTile;

}).call(this);
