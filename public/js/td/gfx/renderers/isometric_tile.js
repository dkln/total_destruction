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
        if (!this.isOffscreen(ctx, x, y)) {
          return this.renderOnScreen(ctx, x, y, world.tiles[worldY][worldX]);
        }
      }
    },
    renderOnScreen: function(ctx, screenX, screenY, sprite) {
      return sprite.render(ctx, screenX, screenY);
    },
    getScreenX: function(world, viewport, worldX, worldY, tile) {
      return (worldX * parseInt(this.width / 2)) + (worldY * parseInt(this.width / 2)) - this.getScreenOffsetX(viewport);
    },
    getScreenY: function(world, viewport, worldX, worldY, tile) {
      return (worldY * parseInt(this.height / 2)) - (worldX * parseInt(this.height / 2)) - this.getScreenOffsetY(viewport);
    },
    getScreenOffsetX: function(viewport) {
      return Math.round(viewport.x * this.width);
    },
    getScreenOffsetY: function(viewport) {
      return Math.round(viewport.y * this.height);
    },
    getScreenWidth: function(viewport) {
      return viewport.width * this.width;
    },
    getScreenHeight: function(viewport) {
      return viewport.height * this.height;
    },
    isOffscreen: function(ctx, x, y) {
      return x < -this.width || y < -this.height || x > ctx.canvas.width || y > ctx.canvas.height;
    }
  };

  this.Td || (this.Td = {});

  (_base = this.Td).Gfx || (_base.Gfx = {});

  (_base2 = this.Td.Gfx).Renderers || (_base2.Renderers = {});

  this.Td.Gfx.Renderers.IsometricTile = IsometricTile;

}).call(this);
