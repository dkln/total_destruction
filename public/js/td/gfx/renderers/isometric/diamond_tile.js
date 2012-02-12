(function() {
  var DiamondTile, _base, _base2, _base3;

  DiamondTile = {
    width: 50,
    height: 25,
    render: function(ctx, world, viewport, worldX, worldY) {
      var height, x, y;
      if (world.tiles[worldY][worldX]) {
        x = this.getScreenX(viewport, worldX, worldY);
        y = this.getScreenY(viewport, worldX, worldY);
        height = world.tiles[worldY][worldX][0];
        if (!this.isOffscreen(ctx, x, y)) {
          return this.renderOnScreen(ctx, x, y, height, world.tiles[worldY][worldX][1]);
        }
      }
    },
    renderOnScreen: function(ctx, screenX, screenY, height, sprite) {
      return sprite.render(ctx, screenX, screenY - height);
    },
    getScreenX: function(viewport, worldX, worldY) {
      return (worldX * parseInt(this.width / 2)) + (worldY * parseInt(this.width / 2)) - this.getScreenOffsetX(viewport);
    },
    getScreenY: function(viewport, worldX, worldY) {
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

  (_base3 = this.Td.Gfx.Renderers).Isometric || (_base3.Isometric = {});

  this.Td.Gfx.Renderers.Isometric.DiamondTile = DiamondTile;

}).call(this);
