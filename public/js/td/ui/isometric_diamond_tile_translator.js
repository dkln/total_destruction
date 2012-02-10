(function() {
  var IsometricDiamondTileTranslator, _base;

  IsometricDiamondTileTranslator = {
    width: 50,
    height: 25,
    viewport: null,
    getX: function(x) {
      return ((x / parseInt(this.width * 2)) - (y / parseInt(this.width / 2))) + viewport.getX();
    },
    getY: function(y) {
      return ((y / parseInt(this.height * 2)) + (y / parseInt(this.height / 2))) + viewport.getY();
    }
  };

  this.Td || (this.Td = {});

  (_base = this.Td).Ui || (_base.Ui = {});

  this.Td.Ui.IsometricDiamondTileConverter = IsometricDiamondTileTranslator;

}).call(this);
