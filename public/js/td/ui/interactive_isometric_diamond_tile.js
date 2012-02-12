(function() {
  var InteractiveIsometricDiamondTile, _base;

  InteractiveIsometricDiamondTile = {
    viewport: null,
    init: function(focusSprite, ctx, viewport) {
      this.focusSprite = focusSprite;
      this.ctx = ctx;
      this.viewport = viewport;
    },
    update: function() {
      if (Td.Ui.Mouse.focus) return this.render();
    },
    render: function() {
      return this.focusSprite.render(this.ctx, this.getScreenX(), this.getScreenY());
    },
    getWorldX: function() {
      return Td.Ui.IsometricDiamondTileTranslator.getX(Td.Ui.Mouse.x);
    },
    getWorldY: function() {
      return Td.Ui.IsometricDiamondTileTranslator.getY(Td.Ui.Mouse.y);
    },
    getScreenX: function() {
      return Td.Gfx.Renderers.Isometric.DiamondTile.getScreenX(this.viewport, this.getWorldX(), this.getWorldY());
    },
    getScreenY: function() {
      return Td.Gfx.Renderers.Isometric.DiamondTile.getScreenY(this.viewport, this.getWorldX(), this.getWorldY());
    }
  };

  this.Td || (this.Td = {});

  (_base = this.Td).Ui || (_base.Ui = {});

  this.Td.Ui.InteractiveIsometricDiamondTile = InteractiveIsometricDiamondTile;

}).call(this);
