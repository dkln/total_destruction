(function() {
  var Tile, _base;

  Tile = (function() {

    function Tile() {
      this.x = 0;
      this.y = 0;
      this.z = 0;
      this.sprite = null;
    }

    return Tile;

  })();

  this.Td || (this.Td = {});

  (_base = this.Td).World || (_base.World = {});

  this.Td.World.Tile = Tile;

}).call(this);
