(function() {
  var IsometricTile, _base, _base2;

  IsometricTile = {
    width: 50,
    height: 25,
    render: function(ctx, world, viewport, worldX, worldY) {
      var x, y;
      x = this.getScreenX(world, viewport, worldX, worldY, world[worldY][worldX]);
      y = this.getScreenY(world, viewport, worldX, worldY, world[worldY][worldX]);
      if (world[worldY][worldX]) {
        return this.renderOnScreen(x, y, world[worldY][worldX]);
      }
    },
    renderOnScreen: function(ctx, screenX, screenY, sprite) {
      return sprite.render(ctx, screenX, screenY);
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

  (_base = this.Td).Gfx || (_base.Gfx = {});

  (_base2 = this.Td.Gfx).Renderers || (_base2.Renderers = {});

  this.Td.Gfx.Renderers.IsometricTile = IsometricTile;

}).call(this);
